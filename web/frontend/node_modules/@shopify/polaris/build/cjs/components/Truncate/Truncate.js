'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Truncate$1 = require('./Truncate.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Truncate({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: Truncate$1["default"].Truncate
  }, children);
}

exports.Truncate = Truncate;
