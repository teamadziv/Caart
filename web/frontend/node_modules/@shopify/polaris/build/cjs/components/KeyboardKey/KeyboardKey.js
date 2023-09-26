'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var KeyboardKey$1 = require('./KeyboardKey.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function KeyboardKey({
  children
}) {
  let key = children || '';
  key = key.length > 1 ? key.toLowerCase() : key.toUpperCase();
  return /*#__PURE__*/React__default["default"].createElement("kbd", {
    className: KeyboardKey$1["default"].KeyboardKey
  }, key);
}

exports.KeyboardKey = KeyboardKey;
