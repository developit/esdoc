'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _srcPublisherBuilderLintDocBuilderJs = require('../../../src/Publisher/Builder/LintDocBuilder.js');

/** @test {LintDocBuilder} */
describe('Lint:', function () {
  it('has results', function () {
    // method
    _assert2['default'].equal(_srcPublisherBuilderLintDocBuilderJs._results[0].doc.longname, 'src/Z003_MyInvalidLintClass.js~Z003_MyInvalidLintClass#method1');
    _assert2['default'].equal(_srcPublisherBuilderLintDocBuilderJs._results[1].doc.longname, 'src/Z003_MyInvalidLintClass.js~Z003_MyInvalidLintClass#method2');
    _assert2['default'].equal(_srcPublisherBuilderLintDocBuilderJs._results[2].doc.longname, 'src/Z003_MyInvalidLintClass.js~Z003_MyInvalidLintClass#method3');
    _assert2['default'].equal(_srcPublisherBuilderLintDocBuilderJs._results[3].doc.longname, 'src/Z003_MyInvalidLintClass.js~Z003_MyInvalidLintClass#method4');
  });
});