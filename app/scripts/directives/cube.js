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


        console.log('this is the element', element);

         var faces = element.children().children().children().children().length,
            rotation,
            degs = rotation = 360 / faces;

          console.log(element.children().children().children().length);


          angular.forEach(element.children().children().children().children(), function(face){
            console.log('this is the face', face, degs, faces);
            angular.element(face).css('transform', 'rotateY(  '+ degs +'deg ) translateZ( 100px )');
            degs = degs + 90;
          });

        scope.rotate = function(){

          console.log('I think that this is the element', element, element[0]);
          console.log(element.children().children().children().children().length);

          // var faces = element.children().children().children().children().length,
          //   rotation,
          //   degs = rotation = 360 / faces;

          // console.log(element.children().children().children().length);


          // angular.forEach(element.children().children().children().children(), function(face){
          //   console.log('this is the face', face, degs, faces);
          //   angular.element(face).css('transform', 'rotateY(  '+ degs +'deg ) translateZ( 100px )');
          //   degs = degs + 90;
          // });

          element.children().children().first().css('transform', 'translateZ( -100px ) rotateY(   '+rotation+'deg )');

          //element.children().children().first().css('transform', 'translateZ( -100px ) rotateY(   '+degs+'deg )');
          rotation = rotation + 90;
          //degs = degs + 90 === 360 ? 0 : degs + 90;


          //#cube.show-left   { transform: translateZ( -100px ) rotateY(   90deg ); }
        };
      }
    };
  });
