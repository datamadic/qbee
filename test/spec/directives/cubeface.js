'use strict';

describe('Directive: cubeface', function () {

  // load the directive's module
  beforeEach(module('qbeeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cubeface></cubeface>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cubeface directive');
  }));
});
