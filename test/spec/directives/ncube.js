'use strict';

describe('Directive: nCube', function () {

  // load the directive's module
  beforeEach(module('qbeeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<n-cube></n-cube>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nCube directive');
  }));
});
