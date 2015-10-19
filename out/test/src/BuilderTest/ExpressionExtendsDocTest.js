'use strict';

var _utilJs = require('./../util.js');

/**
 * @test {ClassDocBuilder#_buildMixinClassesHTML}
 * @test {ClassDocBuilder#_buildExpressionExtendsHTML}
 */
describe('ExpressionExtends:', function () {
  describe('Mixin Extends:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/MyExpressionExtend.js~MyExpressionExtendClass1.html');

    it('has expression and mixin', function () {
      (0, _utilJs.find)(doc, '.self-detail', function (doc) {
        _utilJs.assert.includes(doc, '[data-ice="expressionExtends"]', 'Expression Extends:class MyExpressionExtendClass1 extends mix(MyClass1, MyClass2)');
        _utilJs.assert.includes(doc, '[data-ice="mixinExtends"]', 'Mixin Extends:MyClass1, MyClass2');
      });
    });
  });

  describe('Expression Extends:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/MyExpressionExtend.js~MyExpressionExtendClass2.html');

    it('has expression', function () {
      (0, _utilJs.find)(doc, '.self-detail', function (doc) {
        _utilJs.assert.includes(doc, '[data-ice="expressionExtends"]', 'Expression Extends:class MyExpressionExtendClass2 extends MyClass1(123)');
        _utilJs.assert.includes(doc, '[data-ice="extendsChain"]', 'XMLHttpRequest → SuperMyClass2 → SuperMyClass1 → MyClass1 → MyExpressionExtendClass2');
      });
    });
  });
});