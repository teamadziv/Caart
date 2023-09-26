'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var Stack = require('../../Stack.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Item({
  children,
  fill
}) {
  const className = css.classNames(Stack["default"].Item, fill && Stack["default"]['Item-fill']);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, children);
}

exports.Item = Item;
