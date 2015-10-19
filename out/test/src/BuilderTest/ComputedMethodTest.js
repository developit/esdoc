'use strict';

var _utilJs = require('./../util.js');

/** @test {MethodDoc#@_name} */
describe('ComputedMethod:', function () {
  var doc = (0, _utilJs.readDoc)('class/src/Z002_MyComputedMethodClass.js~Z002_MyComputedMethodClass.html');

  it('has computed method', function () {
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', "public ['foo']()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(2)', "public [Symbol.iterator]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(3)', "public [`${ foo }`]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(4)', "public [foo + bar]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(5)', "public [foo()]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(6)', "public [foo.bar()]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(7)', "public [foo.bar.baz]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(8)', "public * [foo.bar]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(9)', "public [foo.p + bar]()");
    _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(10)', "public [foo]()");
  });
});