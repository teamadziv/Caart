'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var css = require('../../../../utilities/css.js');
var Checkbox$1 = require('./Checkbox.scss.js');
var hooks = require('../../../../utilities/unique-id/hooks.js');
var Icon = require('../../../Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Checkbox({
  id: idProp,
  checked = false,
  disabled,
  active,
  onChange,
  name,
  value,
  role
}) {
  const id = hooks.useUniqueId('Checkbox', idProp);
  const [keyFocused, setKeyFocused] = React.useState(false);
  const className = css.classNames(Checkbox$1["default"].Checkbox, active && Checkbox$1["default"].active);

  const handleBlur = () => {
    setKeyFocused(false);
  };

  const handleKeyUp = () => {
    !keyFocused && setKeyFocused(true);
  };

  const inputClassName = css.classNames(Checkbox$1["default"].Input, keyFocused && Checkbox$1["default"].keyFocused);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    id: id,
    name: name,
    value: value,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    className: inputClassName,
    "aria-checked": checked,
    onChange: onChange,
    onBlur: handleBlur,
    onKeyUp: handleKeyUp,
    role: role
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: Checkbox$1["default"].Backdrop
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: Checkbox$1["default"].Icon
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: polarisIcons.TickSmallMinor
  })));
}

exports.Checkbox = Checkbox;
