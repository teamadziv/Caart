'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UnstyledButton = require('./UnstyledButton.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function unstyledButtonFrom({
  content,
  onAction,
  ...action
}, overrides, key) {
  return /*#__PURE__*/React__default["default"].createElement(UnstyledButton.UnstyledButton, Object.assign({
    key: key,
    onClick: onAction
  }, action, overrides), content);
}

exports.unstyledButtonFrom = unstyledButtonFrom;
