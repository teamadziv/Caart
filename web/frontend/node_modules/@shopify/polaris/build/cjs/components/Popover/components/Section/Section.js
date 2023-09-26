'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Popover = require('../../Popover.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Section({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Popover["default"].Section
  }, children);
}

exports.Section = Section;
