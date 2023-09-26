'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var SkeletonDisplayText$1 = require('./SkeletonDisplayText.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SkeletonDisplayText({
  size = 'medium'
}) {
  const className = css.classNames(SkeletonDisplayText$1["default"].DisplayText, size && SkeletonDisplayText$1["default"][css.variationName('size', size)]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  });
}

exports.SkeletonDisplayText = SkeletonDisplayText;
