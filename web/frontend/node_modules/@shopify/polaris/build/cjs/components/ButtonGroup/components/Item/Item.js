'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useToggle = require('../../../../utilities/use-toggle.js');
var css = require('../../../../utilities/css.js');
var ButtonGroup = require('../../ButtonGroup.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Item({
  button
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle.useToggle(false);
  const className = css.classNames(ButtonGroup["default"].Item, focused && ButtonGroup["default"]['Item-focused'], button.props.plain && ButtonGroup["default"]['Item-plain']);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused
  }, button);
}

exports.Item = Item;
