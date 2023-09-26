'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SettingAction$1 = require('./SettingAction.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SettingAction({
  action,
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: SettingAction$1["default"].SettingAction
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: SettingAction$1["default"].Setting
  }, children), /*#__PURE__*/React__default["default"].createElement("div", {
    className: SettingAction$1["default"].Action
  }, action));
}

exports.SettingAction = SettingAction;
