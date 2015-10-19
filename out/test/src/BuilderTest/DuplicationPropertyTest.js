'use strict';

var _utilJs = require('./../util.js');

describe('Duplication property:', function () {
  var doc = (0, _utilJs.readDoc)('class/src/Z001_MyDuplicationPropertyClass.js~Z001_MyDuplicationPropertyClass.html');

  it('excludes member because setter/getter', function () {
    (0, _utilJs.find)(doc, '[data-ice="memberSummary"]', function (doc) {
      _utilJs.assert.includes(doc, '[data-ice="summary"]', 'public set value: number');
      _utilJs.assert.includes(doc, '[data-ice="summary"]', 'public get value: number');
      _utilJs.assert.notIncludes(doc, '[data-ice="summary"]', 'public value: number');
    });
  });

  it('excludes member because method', function () {
    (0, _utilJs.find)(doc, '[data-ice="memberSummary"]', function (doc) {
      _utilJs.assert.notIncludes(doc, '[data-ice="summary"]', 'public onClick: *');
    });

    (0, _utilJs.find)(doc, '[data-ice="methodSummary"]', function (doc) {
      _utilJs.assert.includes(doc, '[data-ice="summary"]', 'public onClick()');
    });
  });
});