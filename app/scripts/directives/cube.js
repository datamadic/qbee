'use strict';

angular.module('qbeeApp')
  .directive('cube', function () {
    return {
      templateUrl: 'templates/cube.html',
      restrict: 'E',
      scope : {

      },
      link: function postLink(scope, element, attrs) {
        var degs = 90;

        console.log('this is the element', element);
        scope.rotate = function(){
          //element.children().children().first().addClass('show-left');
          //console.log(element.children().children().first().css('transform'));

          element.children().children().first().css('transform', 'translateZ( -100px ) rotateY(   '+degs+'deg )');
          degs = degs + 90;
          //degs = degs + 90 === 360 ? 0 : degs + 90;


          //#cube.show-left   { transform: translateZ( -100px ) rotateY(   90deg ); }
        };
      }
    };
  });
