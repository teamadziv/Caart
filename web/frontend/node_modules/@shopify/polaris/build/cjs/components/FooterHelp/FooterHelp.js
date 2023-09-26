'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var FooterHelp$1 = require('./FooterHelp.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function FooterHelp({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: FooterHelp$1["default"].FooterHelp
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: FooterHelp$1["default"].Text
  }, children));
}

exports.FooterHelp = FooterHelp;
