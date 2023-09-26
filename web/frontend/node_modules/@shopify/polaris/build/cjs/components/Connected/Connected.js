'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Connected$1 = require('./Connected.scss.js');
var Item = require('./components/Item/Item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Connected({
  children,
  left,
  right
}) {
  const leftConnectionMarkup = left ? /*#__PURE__*/React__default["default"].createElement(Item.Item, {
    position: "left"
  }, left) : null;
  const rightConnectionMarkup = right ? /*#__PURE__*/React__default["default"].createElement(Item.Item, {
    position: "right"
  }, right) : null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Connected$1["default"].Connected
  }, leftConnectionMarkup, /*#__PURE__*/React__default["default"].createElement(Item.Item, {
    position: "primary"
  }, children), rightConnectionMarkup);
}

exports.Connected = Connected;
