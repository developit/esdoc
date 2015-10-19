'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _srcESDocCLIJs = require('../../../src/ESDocCLI.js');

var _srcESDocCLIJs2 = _interopRequireDefault(_srcESDocCLIJs);

var _utilJs = require('../util.js');

/** @test {Plugin} */
describe('Plugin:', function () {
  it('use plugin without error', function () {
    var cliPath = _path2['default'].resolve('./src/cli.js');
    var configPath = _path2['default'].resolve('./test/fixture/esdoc-plugin.json');
    var argv = ['node', cliPath, '-c', configPath];
    var cli = new _srcESDocCLIJs2['default'](argv);

    (0, _utilJs.consoleLogSwitch)(false);
    cli.exec();
    (0, _utilJs.consoleLogSwitch)(true);
  });

  it('call each handlers', function () {
    var pluginPath = _path2['default'].resolve('./test/fixture/plugin/MyPlugin1.js');
    var plugin = require(pluginPath);

    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onStart);
    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onHandleConfig);
    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onHandleCode);
    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onHandleCodeParser);
    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onHandleAST);
    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onHandleTag);
    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onHandleHTML);
    (0, _utilJs.assert)(plugin.callInfo.handlerNames.onComplete);
    _utilJs.assert.deepEqual(plugin.callInfo.option, { foo: 1 });
    _utilJs.assert.equal(plugin.callInfo.usedParser, true);
  });

  it('custom document by each handlers', function () {
    var doc = (0, _utilJs.readDoc)('index.html', 'esdoc-plugin');

    _utilJs.assert.includes(doc, 'head title', 'Modified Config');
    _utilJs.assert.includes(doc, '.navigation', 'MyClass_ModifiedCode_ModifiedAST_ModifiedTag_ModifiedHTML');
  });

  it('call multi plugins', function () {
    var pluginPath = _path2['default'].resolve('./test/fixture/plugin/MyPlugin1.js');
    var plugin = require(pluginPath);

    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onStart, ['MyPlugin1', 'MyPlugin2']);
    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onHandleConfig, ['MyPlugin1', 'MyPlugin2']);
    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onHandleCode, ['MyPlugin1', 'MyPlugin2']);
    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onHandleCodeParser, ['MyPlugin1', 'MyPlugin2']);
    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onHandleAST, ['MyPlugin1', 'MyPlugin2']);
    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onHandleTag, ['MyPlugin1', 'MyPlugin2']);
    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onHandleHTML, ['MyPlugin1', 'MyPlugin2']);
    _utilJs.assert.deepEqual(plugin.callInfo.handlerNames.onComplete, ['MyPlugin1', 'MyPlugin2']);
  });
});