'use strict';

angular.module('qbeeApp')
  .directive('nCube', function ($compile) {
    return {
      templateUrl: './templates/ncube.html',
      restrict: 'E',
      scope : {
        faces : '='
      },
      transclude: true,
      link: function postLink(scope, element, attrs) {
        //element.text('this is the nCube directive'+ scope.faces);
        //console.log('this is the element', element);
        console.log(element[0].querySelectorAll('.geoface'));
        var geofaces = [{
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
          name : 'seconed face',
          rows : [{
            name : 'eur',
            value : 900
          }]
        }];

        scope.rowMap = geofaces.map(function(item, index){
          console.log(item, index);
          return item.rows;
        });

        //console.log('the rows ', rowMap);

        scope.surely = function(){
          console.log('waka waka')
        };

        var el = $compile( '<n_cube_face rows="rowMap"></n_cube_face>' )( scope );
        element.parent().append( el );

        //console.log(angular.element('<div ng-click="surely()">just a little something</div>'));



        console.log('these are the geofaces', geofaces);
      }//end postLink
    };
  });
