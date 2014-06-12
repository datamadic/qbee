'use strict';

angular.module('qbeeApp')
  .directive('nCube', function ($compile, $timeout) {
    return {
      templateUrl: './templates/ncube.html',
      restrict: 'E',
      scope : {
        faces : '='
      },
      transclude: false,
      //replace : true,
      link: function postLink(scope, element, attrs) {

        var mapLength = scope.faces.length,
            theFaces = element.children()[0].children,
            el,
            faces = element[0].querySelector('.faces'),
            degs = 0,
            rotate90 = 90,
            transitions = [' left ', ' back ', ' right ', ' front '],
            transIterator = 0;


        scope.rowMap = scope.faces.map(function(item, index){
          //console.log(item, index);
          return {
            name : item.name,
            row : item.rows,
            currentFace : !index,
            next : (index + 1 === mapLength ) ? 0 : index + 1,
            prev : (index === 0 ) ? mapLength - 1 : index - 1,
            transitionCSS : !index ? ' front ' : '',
            index : index,
            moving : false
          };
        });

        scope.currentFace = scope.rowMap[0];


        scope.showFace = function(index) {
          return (scope.rowMap[index].moving || scope.rowMap[index].currentFace);
        };


        function clearNotTrans() {
          var index = scope.currentFace.index,
              prev = scope.currentFace.prev;

          for (var f in scope.rowMap) {
            if (!(scope.rowMap[f].index === index || scope.rowMap[f].prev === index)) {
              scope.rowMap[f].currentFace = false;
              scope.rowMap[f].moving = false;
            }
          }
        }



        var calls = 0;

        scope.youMoveMe = function(direction) {

          var incommingFace = scope.rowMap[scope.currentFace.next];

          clearNotTrans();

          incommingFace.moving = true;


          if (direction === 'right'){
            degs += rotate90;
            transIterator++;
          }
          else {
            degs -= rotate90;
            transIterator--;
          }

          //console.log(getRotatedRightLeft(degs));

          incommingFace.transitionCSS = getRotatedRightLeft(degs);
          // console.log('this is the trans', transitions[transIterator % 4]);
          // transIterator++;

          angular.element(faces).css('transform', 'rotateY(  '+degs+'deg ) translateZ( 0px )');

          scope.currentFace = scope.rowMap[scope.currentFace.next];

          //console.log('the calls',calls++);
          //alert('events: '+ calls++ );

        };

        function getRotatedRightLeft (degrees) {
          var realRotation = degrees % 360,
              direction;


          switch (realRotation){
            case 0 : direction =  ' front '; break;
            case 90 : direction =  ' left '; break;
            case 180 : direction =  ' back '; break;
            case 270 : direction =  ' right '; break;
            case -360 : direction =  ' front '; break;
            case -90 : direction =  ' right '; break;
            case -180 : direction =  ' back '; break;
            case -270 : direction =  ' left '; break;
            default : direction =  '';
          }

          console.log('calc off rotation', realRotation ,direction);
          return direction;
        }//end getRoatedRightLeft

      }//end postLink
    };
  });

        // for(var i = 0, len = scope.rowMap.length; i < len; i++) {
        //   console.log('in the for', scope.rowMap[i]);
        //   el = $compile( '<n_cube_face rows="rowMap['+i+']"></n_cube_face>' )( scope );
        //   angular.element(faces).append( el );
        // }
