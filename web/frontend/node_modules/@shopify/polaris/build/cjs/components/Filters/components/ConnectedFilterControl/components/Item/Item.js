'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../../../utilities/css.js');
var useToggle = require('../../../../../../utilities/use-toggle.js');
var ConnectedFilterControl = require('../../ConnectedFilterControl.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Item({
  children
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle.useToggle(false);
  const className = css.classNames(ConnectedFilterControl["default"].Item, focused && ConnectedFilterControl["default"]['Item-focused']);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    onBlur: forceFalseFocused,
    onFocus: forceTrueFocused,
    className: className
  }, children);
}

exports.Item = Item;
