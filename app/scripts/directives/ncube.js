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
          console.log(item, index);
          return {
            name : item.name,
            row : item.rows,
            currentFace : !index,
            next : (index + 1 === mapLength ) ? 0 : index + 1,
            prev : (index === 0 ) ? mapLength - 1 : index - 1,
            transitionCSS : !index ? ' front ' : '',
            moving : false
          };
        });

        scope.currentFace = scope.rowMap[0];


        scope.showFace = function(index) {
          return (scope.rowMap[index].moving || scope.rowMap[index].currentFace);
        };


        scope.youMoveMe = function() {
          var incommingFace = scope.rowMap[scope.currentFace.next];

          incommingFace.currentFace = true;

          incommingFace.transitionCSS = transitions[transIterator % 4];
          transIterator++;

          degs += rotate90;
          angular.element(faces).css('transform', 'rotateY(  '+degs+'deg ) translateZ(0px )');

          scope.currentFace = scope.rowMap[scope.currentFace.next];

        }

      }//end postLink
    };
  });

        // for(var i = 0, len = scope.rowMap.length; i < len; i++) {
        //   console.log('in the for', scope.rowMap[i]);
        //   el = $compile( '<n_cube_face rows="rowMap['+i+']"></n_cube_face>' )( scope );
        //   angular.element(faces).append( el );
        // }
