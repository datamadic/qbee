'use strict';

angular.module('qbeeApp')
  .directive('cube', function () {
    return {
      templateUrl: 'templates/cube.html',
      restrict: 'E',
      transclude: true,
      scope : {

      },
      link: function postLink(scope, element, attrs) {

        var faces = element.children().children().children().children().length,
            rotation,
            degs = rotation = 360 / faces;


        angular.forEach(element.children().children().children().children(), function(face){
          angular.element(face).css('transform', 'rotateY(  '+ degs +'deg ) translateZ( 100px )');
          degs = degs + rotation;
        });

        scope.rotate = function(){
          element.children().children().first().css('transform', 'translateZ( -100px ) rotateY(   '+rotation+'deg )');
          rotation = rotation + 90;
        };



      }//end link
    };
  });
