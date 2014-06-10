'use strict';

angular.module('qbeeApp')
  .controller('MainCtrl', function ($scope) {
    var faces =  ['show-front ' ,
    'show-back  ' ,
    'show-right ' ,
    'show-left  ' ,
    'show-top   ' ,
    'show-bottom' ];
    $scope.rotateDemo = function(){

      console.log(angular.element('#cube'),Math.floor((Math.random() * 10) % 5));
      angular.element('#cube').removeClass();
      angular.element('#cube').addClass(faces[Math.floor((Math.random() * 10) % 5)]);

    };
  });

