'use strict';

angular.module('qbeeApp')
  .directive('nCubeFace', function () {
    return {
      templateUrl: 'templates/ncubeface.html',
      restrict: 'E',
      scope : {
        rows : "="
      },
      link: function postLink(scope, element, attrs) {
       // element.text('this is the nCubeFace directive');
        //console.log('in the compiled directive ', rows)
      }
    };
  });
