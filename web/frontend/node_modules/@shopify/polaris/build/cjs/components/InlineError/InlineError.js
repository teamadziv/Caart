'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var InlineError$1 = require('./InlineError.scss.js');
var Icon = require('../Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function InlineError({
  message,
  fieldID
}) {
  if (!message) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    id: errorTextID(fieldID),
    className: InlineError$1["default"].InlineError
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: InlineError$1["default"].Icon
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: polarisIcons.AlertMinor
  })), message);
}
function errorTextID(id) {
  return `${id}Error`;
}

exports.InlineError = InlineError;
exports.errorTextID = errorTextID;
