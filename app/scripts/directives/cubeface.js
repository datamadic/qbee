'use strict';

angular.module('qbeeApp')
  .directive('cubeface', function () {
    return {
      template: '<figure><div ng-transclude></div></figure>',
      restrict: 'E',
      transclude: true,
      replace : true,
      link: function postLink(scope, element, attrs) {
        // element.text('this is the cubeface directive');
      }
    };
  });
