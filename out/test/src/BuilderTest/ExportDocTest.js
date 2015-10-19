'use strict';

var _utilJs = require('./../util.js');

/**
 * @test {DocFactory#_inspectExportDefaultDeclaration}
 * @test {DocFactory#_inspectExportNamedDeclaration}
 */
describe('Export:', function () {
  describe('MyExport1:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport1.html');

    it('has instance notice.', function () {
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import MyExport1 from 'esdoc-test-fixture/src/Export.js'");
      _utilJs.assert.includes(doc, '.self-detail', 'You can directly use instance of this class. myExport1');
    });
  });

  describe('MyExport2:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport2.html');

    it('has instance notice.', function () {
      _utilJs.assert.notIncludes(doc, '[data-ice="importPath"]', "esdoc-test-fixture/src/Export.js");
      _utilJs.assert.includes(doc, '.self-detail', 'You can directly use instance of this class. myExport2');
    });
  });

  describe('MyExport3:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport3.html');

    it('has instance notice.', function () {
      _utilJs.assert.notIncludes(doc, '[data-ice="importPath"]', "esdoc-test-fixture/src/Export.js");
      _utilJs.assert.includes(doc, '.self-detail', 'You can directly use instance of this class. myExport3');
    });
  });

  describe('MyExport4:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport4.html');

    it('has instance notice.', function () {
      _utilJs.assert.notIncludes(doc, '[data-ice="importPath"]', "esdoc-test-fixture/src/Export.js");
      _utilJs.assert.includes(doc, '.self-detail', 'You can directly use instance of this class. myExport4');
    });
  });

  describe('MyExport5:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport5.html');

    it('has instance notice.', function () {
      _utilJs.assert.notIncludes(doc, '[data-ice="importPath"]', "esdoc-test-fixture/src/Export.js");
      _utilJs.assert.includes(doc, '.self-detail', 'You can directly use instance of this class. myExport5');
    });
  });

  describe('MyExport6:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport6.html');

    it('does not have instance notice.', function () {
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import {MyExport6} from 'esdoc-test-fixture/src/Export.js'");
      _utilJs.assert.notIncludes(doc, '.self-detail', 'You can directly use instance of this class.');
    });
  });

  describe('MyExport9:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport9.html');

    it('has instance notice.', function () {
      _utilJs.assert.notIncludes(doc, '[data-ice="importPath"]', "esdoc-test-fixture/src/Export.js");
      _utilJs.assert.notIncludes(doc, '.self-detail', 'You can directly use instance of this class.');
    });
  });

  describe('MyExport99:', function () {
    var doc = (0, _utilJs.readDoc)('class/src/Export.js~MyExport99.html');

    it('does not have instance notice.', function () {
      _utilJs.assert.includes(doc, '[data-ice="importPath"]', "import {MyExport99} from 'esdoc-test-fixture/src/Export.js'");
      _utilJs.assert.notIncludes(doc, '.self-detail', 'You can directly use instance of this class.');
    });
  });
});