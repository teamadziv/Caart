'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useToggle = require('../../../../utilities/use-toggle.js');
var css = require('../../../../utilities/css.js');
var Option$1 = require('./Option.scss.js');
var Checkbox = require('../Checkbox/Checkbox.js');
var Scrollable = require('../../../Scrollable/Scrollable.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Option({
  label,
  value,
  id,
  select,
  active,
  allowMultiple,
  disabled,
  role,
  media,
  onClick,
  section,
  index,
  verticalAlign
}) {
  const {
    value: focused,
    toggle: toggleFocused
  } = useToggle.useToggle(false);
  const handleClick = React.useCallback(() => {
    if (disabled) {
      return;
    }

    onClick(section, index);
  }, [disabled, index, onClick, section]);
  const mediaMarkup = media ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: Option$1["default"].Media
  }, media) : null;
  const singleSelectClassName = css.classNames(Option$1["default"].SingleSelectOption, focused && Option$1["default"].focused, disabled && Option$1["default"].disabled, select && Option$1["default"].select, active && Option$1["default"].active, verticalAlign && Option$1["default"][css.variationName('verticalAlign', verticalAlign)]);
  const multiSelectClassName = css.classNames(Option$1["default"].Label, disabled && Option$1["default"].disabled, active && Option$1["default"].active, select && Option$1["default"].select, verticalAlign && Option$1["default"][css.variationName('verticalAlign', verticalAlign)]);
  const checkBoxRole = role === 'option' ? 'presentation' : undefined;
  const optionMarkup = allowMultiple ? /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id,
    className: multiSelectClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: Option$1["default"].Checkbox
  }, /*#__PURE__*/React__default["default"].createElement(Checkbox.Checkbox, {
    id: id,
    value: value,
    checked: select,
    active: active,
    disabled: disabled,
    onChange: handleClick,
    role: checkBoxRole
  })), mediaMarkup, label) : /*#__PURE__*/React__default["default"].createElement("button", {
    id: id,
    type: "button",
    className: singleSelectClassName,
    onClick: handleClick,
    disabled: disabled,
    onFocus: toggleFocused,
    onBlur: toggleFocused,
    "aria-pressed": active
  }, mediaMarkup, label);
  const scrollMarkup = active ? /*#__PURE__*/React__default["default"].createElement(Scrollable.Scrollable.ScrollTo, null) : null;
  return /*#__PURE__*/React__default["default"].createElement("li", {
    key: id,
    className: Option$1["default"].Option,
    tabIndex: -1
  }, scrollMarkup, optionMarkup);
}

exports.Option = Option;
