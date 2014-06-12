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

    $scope.geofaces = [{
          name : 'first face',
          rows : [{
            name : 'usd',
            value : 123
          },{
            name : 'rub',
            value : 308
          }]
        },
        {
          name : 'second face',
          rows : [{
            name : 'jay',
            value : 243
          },{
            name : 'fra',
            value : 100
          }]
        },
        {
          name : 'third face',
          rows : [{
            name : 'eur',
            value : 900
          }]
        },
        {
          name : 'fourth face',
          rows : [{
            name : 'jap',
            value : 500
          }, {
            name : 'wer',
            value : 343
          }]
        },
        {
          name : 'face 5',
          rows : [{
            name : 'gre',
            value : 144
          }, {
            name : 'rad',
            value : 884
          }, {
            name : 'cdr',
            value : 209
          }]
        }
        ];
  });




