'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Button = require('./Button.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function buttonsFrom(actions, overrides = {}) {
  if (Array.isArray(actions)) {
    return actions.map((action, index) => buttonFrom(action, overrides, index));
  } else {
    const action = actions;
    return buttonFrom(action, overrides);
  }
}
function buttonFrom({
  content,
  onAction,
  ...action
}, overrides, key) {
  return /*#__PURE__*/React__default["default"].createElement(Button.Button, Object.assign({
    key: key,
    onClick: onAction
  }, action, overrides), content);
}

exports.buttonFrom = buttonFrom;
exports.buttonsFrom = buttonsFrom;
