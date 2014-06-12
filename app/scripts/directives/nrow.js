'use strict';

angular.module('qbeeApp')
  .directive('nRow', function () {
    return {
      templateUrl: './templates/nrow.html',
      restrict: 'E',
      scope : {
        rdata : '='
      },
      link: function postLink(scope, element, attrs) {
        //console.log('i get it', scope.rdata);
      }
    };
  });
