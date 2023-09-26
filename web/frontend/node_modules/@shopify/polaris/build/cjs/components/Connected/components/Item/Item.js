'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var useToggle = require('../../../../utilities/use-toggle.js');
var Connected = require('../../Connected.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Item({
  children,
  position
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle.useToggle(false);
  const className = css.classNames(Connected["default"].Item, focused && Connected["default"]['Item-focused'], position === 'primary' ? Connected["default"]['Item-primary'] : Connected["default"]['Item-connection']);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    onBlur: forceFalseFocused,
    onFocus: forceTrueFocused,
    className: className
  }, children);
}

exports.Item = Item;
