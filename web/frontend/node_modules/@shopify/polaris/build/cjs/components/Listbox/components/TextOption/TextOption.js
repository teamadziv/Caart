'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var context = require('../../../../utilities/combobox/context.js');
var context$1 = require('../../../../utilities/listbox/context.js');
var TextOption$1 = require('./TextOption.scss.js');
var Checkbox = require('../../../Checkbox/Checkbox.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TextOption = /*#__PURE__*/React.memo(function TextOption({
  children,
  selected,
  disabled
}) {
  const {
    allowMultiple
  } = React.useContext(context.ComboboxListboxOptionContext);
  const isAction = React.useContext(context$1.ActionContext);
  const textOptionClassName = css.classNames(TextOption$1["default"].TextOption, selected && !allowMultiple && TextOption$1["default"].selected, disabled && TextOption$1["default"].disabled, allowMultiple && TextOption$1["default"].allowMultiple, isAction && TextOption$1["default"].isAction);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: textOptionClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: TextOption$1["default"].Content
  }, allowMultiple && !isAction ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: TextOption$1["default"].Checkbox
  }, /*#__PURE__*/React__default["default"].createElement(Checkbox.Checkbox, {
    disabled: disabled,
    checked: selected,
    label: children
  })) : children));
});

exports.TextOption = TextOption;
