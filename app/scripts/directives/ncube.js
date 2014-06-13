'use strict';

angular.module('qbeeApp')
  .directive('nCube', function ($compile, $timeout) {
    return {
      templateUrl: './templates/ncube.html',
      restrict: 'E',
      scope : {
        faces : '=',
        cdir : '='
      },
      transclude: false,
      //replace : true,
      link: function postLink(scope, element, attrs) {

        console.log('this is the cdir', scope.cdir);

        scope.$watch('cdir',function(oldVal, newVal){
          // console.log(newVal, typeof newVal);
          // var inDir = ((oldVal + 1 ) == newVal ) ? 'prev' : 'next';
          scope.youMoveMe('right');

        })

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

        scope.currentFace = 0;


        scope.showFace = function(index) {
          return (scope.rowMap[index].moving || (scope.currentFace === index));
        };


        function clearNotTrans(direction) {
          var index = scope.currentFace,
              dir = scope.rowMap[scope.currentFace][direction][direction];



          for (var f in scope.rowMap) {
            if (!(scope.rowMap[f].index === index || scope.rowMap[f].index === dir)) {
              scope.rowMap[f].currentFace = false;
              scope.rowMap[f].moving = false;
            }
            else {
              console.log('the elses', scope.rowMap[f]);
              scope.rowMap[f].moving = true;
            }
          }

          console.log('the scope',index, 'the direction ',direction,dir, scope.currentFace,'all of em', scope.rowMap);
        }



        scope.youMoveMe = function(direction) {

          console.log('youMoveMe called', direction);

          var nextCurrent;
          if(direction) {
            nextCurrent = 'prev';
          }
          else {
            nextCurrent = 'next';
          }

          var incommingIndex = scope.rowMap[scope.currentFace][nextCurrent]
          var incommingFace = scope.rowMap[incommingIndex];

          clearNotTrans(nextCurrent);

          incommingFace.moving = true;


          if (direction === 'right'){
            degs += rotate90;
            transIterator++;
          }
          else {
            degs -= rotate90;
            transIterator--;
          }

          incommingFace.transitionCSS = getRotatedRightLeft(degs);

          angular.element(faces).css('transform', 'rotateY(  '+degs+'deg ) translateZ( 0px )');

          //scope.currentFace.currentFace = false;
          scope.currentFace = incommingIndex;
         // scope.currentFace  = true ;
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
