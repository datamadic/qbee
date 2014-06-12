'use strict';

angular.module('qbeeApp')
  .directive('nCubeFace', function ($compile) {
    return {
      templateUrl: './templates/ncubeface.html',
      restrict: 'E',
      scope : {
        rows : '='
      },
      replace : true,
      link: function postLink(scope, element, attrs) {

        //console.log('this is the atters list ', attrs );

        var el,
            nbody = element[0].querySelector('.nbody');

        // console.log('this is the attrs ', attrs);
        //console.log(scope.$eval(scope.rows));
        // console.log('this is the scope', scope);

        // for(var i = 0, len = scope.rows.length; i < len; i++ ){
        //   el = $compile('<n_row rdata="rows['+i+']"></n_row>')(scope);
        //   angular.element(nbody).append(el);
        // }
      }//end link
    };
  });
