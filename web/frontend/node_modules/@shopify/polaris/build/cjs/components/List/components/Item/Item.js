'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var List = require('../../List.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Item({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: List["default"].Item
  }, children);
}

exports.Item = Item;
