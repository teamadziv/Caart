'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SkeletonBodyText$1 = require('./SkeletonBodyText.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SkeletonBodyText({
  lines = 3
}) {
  const bodyTextLines = [];

  for (let i = 0; i < lines; i++) {
    bodyTextLines.push( /*#__PURE__*/React__default["default"].createElement("div", {
      className: SkeletonBodyText$1["default"].SkeletonBodyText,
      key: i
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, bodyTextLines);
}

exports.SkeletonBodyText = SkeletonBodyText;
