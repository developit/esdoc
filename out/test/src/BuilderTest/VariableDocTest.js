'use strict';

var _utilJs = require('./../util.js');

/** @test {SingleDocBuilder} */
describe('MyVariable:', function () {
  var doc = (0, _utilJs.readDoc)('variable/index.html');

  /** @test {SingleDocBuilder#_buildSingleDoc} */
  it('has summary.', function () {
    (0, _utilJs.find)(doc, '[data-ice="summary"]', function (doc) {
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public myExport1: MyExport1');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(2)', 'public myExport10: MyExport10');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(3)', 'public myExport2: MyExport2');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(4)', 'public myExport3: MyExport3');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(5)', 'public myExport4: MyExport4');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(6)', 'public myExport5: MyExport5');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(7)', 'public myVariable1: Object this is myVariable1 desc.');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(8)', 'public myVariable2: number this is myVariable2 desc.');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(9)', 'public myVariable3: number this is myVariable3 desc.');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(10)', 'public myVariable4: number');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(11)', 'public myVariable5: *');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(12)', 'public myVariableSeparateExport1: {foo: number, bar: string} this is myVariableSeparateExport1.');
      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(13)', 'public myVariableSeparateExport2: Object this is myVariableSeparateExport2.');

      _utilJs.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'variable/index.html#static-variable-myExport1', 'href');
    });
  });

  /** @test {SingleDocBuilder#_buildSingleDoc} */
  it('has detail.', function () {
    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(1)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myExport1', 'public myExport1: MyExport1');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import myExport1 from 'esdoc-test-fixture/src/Export.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(2)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myExport10', 'public myExport10: MyExport10');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import {myExport10} from 'esdoc-test-fixture/src/Export.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(3)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myExport2', 'public myExport2: MyExport2');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import myExport2 from 'esdoc-test-fixture/src/Export.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(4)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myExport3', 'public myExport3: MyExport3');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import myExport3 from 'esdoc-test-fixture/src/Export.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(5)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myExport4', 'public myExport4: MyExport4');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import {myExport4} from 'esdoc-test-fixture/src/Export.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(6)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myExport5', 'public myExport5: MyExport5');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import {myExport5} from 'esdoc-test-fixture/src/Export.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(7)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myVariable1', 'public myVariable1: Object');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import myVariable1 from 'esdoc-test-fixture/src/myVariable.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(8)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myVariable2', 'public myVariable2: number');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import {myVariable2} from 'esdoc-test-fixture/src/myVariable.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(9)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myVariable3', 'public myVariable3: number');
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(10)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myVariable4', 'public myVariable4: number');
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(11)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myVariable5', 'public myVariable5: *');
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(12)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myVariableSeparateExport1', 'public myVariableSeparateExport1: {foo: number, bar: string}');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import myVariableSeparateExport1 from 'esdoc-test-fixture/src/myVariable.js'");
    });

    (0, _utilJs.find)(doc, '[data-ice="detail"]:nth-of-type(13)', function (doc) {
      _utilJs.assert.includes(doc, '#static-variable-myVariableSeparateExport2', 'public myVariableSeparateExport2: Object');
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import {myVariableSeparateExport2} from 'esdoc-test-fixture/src/myVariable.js'");
    });
  });
});