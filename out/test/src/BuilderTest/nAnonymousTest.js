'use strict';

var _utilJs = require('./../util.js');

describe('Anonymous', function () {
  /**
   * @test {ClassDoc#@_name}
   */
  describe('Anonymous Class', function () {
    var doc = (0, _utilJs.readDoc)('class/src/nMyAnonymous.js~nMyAnonymous.html');

    it('has anonymous class', function () {
      _utilJs.assert.includes(doc, '.self-detail [data-ice="name"]', 'nMyAnonymous');
    });
  });

  /**
   * @test {FunctionDoc#@_name}
   */
  describe('Anonymous Function', function () {
    var doc = (0, _utilJs.readDoc)('function/index.html');

    it('has anonymous function', function () {
      _utilJs.assert.includes(doc, '[data-ice="summary"] [data-ice="target"]:nth-of-type(12)', 'nMyAnonymous1');
    });
  });
});