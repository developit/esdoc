'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _srcESDocCLIJs = require('../../../src/ESDocCLI.js');

var _srcESDocCLIJs2 = _interopRequireDefault(_srcESDocCLIJs);

var _utilJs = require('../util.js');

/** @test {publish} */
describe('Source code:', function () {
  it('use esdoc-non-source.json without error', function () {
    var cliPath = _path2['default'].resolve('./src/cli.js');
    var configPath = _path2['default'].resolve('./test/fixture/esdoc-non-source.json');
    var argv = ['node', cliPath, '-c', configPath];
    var cli = new _srcESDocCLIJs2['default'](argv);

    (0, _utilJs.consoleLogSwitch)(false);
    cli.exec();
    (0, _utilJs.consoleLogSwitch)(true);
  });

  it('doest not include source code.', function () {
    var doc = (0, _utilJs.readDoc)('file/src/MyClass.js.html', 'esdoc-non-source');
    _utilJs.assert.includes(doc, '[data-ice="content"]', 'Sorry, this documentation does not provide source code.');
    _utilJs.assert.notIncludes(doc, '[data-ice="content"]', 'class MyClass1');
  });
});