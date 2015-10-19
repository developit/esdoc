'use strict';

var _utilJs = require('./../util.js');

/** @test {DocBuilder#_buildNavDoc} */
describe('Nav:', function () {
  var doc = (0, _utilJs.readDoc)('index.html');

  /** @test {DocBuilder#_buildNavDoc} */
  it('has each nav.', function () {
    (0, _utilJs.find)(doc, '[data-ice="nav"]', function (doc) {
      // class
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(11)', 'MyClass1');
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(11) a', 'class/src/MyClass.js~MyClass1.html', 'href');

      // interface
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(28)', 'MyInterface1');
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(28) a', 'class/src/MyInterface.js~MyInterface1.html', 'href');

      // function
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(31)', 'myFunction1');
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(31) a', 'function/index.html#static-function-myFunction1', 'href');

      // variable
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(43)', 'myExport1');
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(51)', 'myVariable1');
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(51) a', 'variable/index.html#static-variable-myVariable1', 'href');

      // typedef
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(59)', 'MyTypedef1');
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(59) a', 'typedef/index.html#static-typedef-MyTypedef1', 'href');

      // external
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(61)', 'MyError2');
      _utilJs.assert.includes(doc, '[data-ice="doc"]:nth-of-type(61) a', 'example.com', 'href');
    });
  });
});