'use strict';

describe('Directive: nRow', function () {

  // load the directive's module
  beforeEach(module('qbeeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<n-row></n-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nRow directive');
  }));
});
