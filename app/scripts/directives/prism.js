'use strict';

angular.module('qbeeApp')
  .directive('prism', function () {
    return {
      templateUrl: './templates/prism.html',
      restrict: 'E',
      transclude: true,
      scope : {

      },
      link: function postLink(scope, element, attrs) {
        var faces = element.children().children().children().children().length,
            rotation = 120,
            tmpRotation = 120,
            degs  =  0;

        angular.forEach(element.children().children().children().children(), function(face){
          angular.element(face).css('transform', 'rotateY(  '+ degs +'deg ) translateZ( 60px )');
          degs = degs + rotation;
        });

        scope.rotate = function(){
          element.children().children().first().css('transform', 'translateZ( -60px ) rotateY(   '+rotation+'deg )');
          rotation = rotation + tmpRotation;
        };
      }
    };
  });
