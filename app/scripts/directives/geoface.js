'use strict';

angular.module('qbeeApp')
  .directive('geoface', function () {
    return {
      template: '<figure><div ng-transclude></div></figure>',
      restrict: 'E',
      transclude: true,
      replace : true,
      link: function postLink(scope, element, attrs) {

      }
    };
  });
