'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var css = require('../../utilities/css.js');
var useToggle = require('../../utilities/use-toggle.js');
var types = require('../../types.js');
var context = require('../../utilities/listbox/context.js');
var Checkbox$1 = require('./Checkbox.scss.js');
var Choice = require('../Choice/Choice.js');
var InlineError = require('../InlineError/InlineError.js');
var hooks = require('../../utilities/unique-id/hooks.js');
var Icon = require('../Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox({
  ariaControls,
  ariaDescribedBy: ariaDescribedByProp,
  label,
  labelHidden,
  checked = false,
  helpText,
  disabled,
  id: idProp,
  name,
  value,
  error,
  onChange,
  onFocus,
  onBlur
}, ref) {
  const inputNode = React.useRef(null);
  const id = hooks.useUniqueId('Checkbox', idProp);
  const {
    value: mouseOver,
    setTrue: handleMouseOver,
    setFalse: handleMouseOut
  } = useToggle.useToggle(false);
  const [keyFocused, setKeyFocused] = React.useState(false);
  const isWithinListbox = React.useContext(context.WithinListboxContext);
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputNode.current) {
        inputNode.current.focus();
      }
    }
  }));

  const handleBlur = () => {
    onBlur && onBlur();
    setKeyFocused(false);
  };

  const handleKeyUp = event => {
    const {
      keyCode
    } = event;

    if (keyCode === types.Key.Space || keyCode === types.Key.Tab) {
      !keyFocused && setKeyFocused(true);
    }
  };

  const handleOnClick = () => {
    if (onChange == null || inputNode.current == null || disabled) {
      return;
    }

    onChange(inputNode.current.checked, id);
    inputNode.current.focus();
  };

  const describedBy = [];

  if (error && typeof error !== 'boolean') {
    describedBy.push(InlineError.errorTextID(id));
  }

  if (helpText) {
    describedBy.push(Choice.helpTextID(id));
  }

  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }

  const ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
  const wrapperClassName = css.classNames(Checkbox$1["default"].Checkbox, error && Checkbox$1["default"].error);
  const backdropClassName = css.classNames(Checkbox$1["default"].Backdrop, mouseOver && Checkbox$1["default"].hover);
  const isIndeterminate = checked === 'indeterminate';
  const isChecked = !isIndeterminate && Boolean(checked);
  const indeterminateAttributes = isIndeterminate ? {
    indeterminate: 'true',
    'aria-checked': 'mixed'
  } : {
    'aria-checked': isChecked
  };
  const iconSource = isIndeterminate ? polarisIcons.MinusMinor : polarisIcons.TickSmallMinor;
  const inputClassName = css.classNames(Checkbox$1["default"].Input, isIndeterminate && Checkbox$1["default"]['Input-indeterminate'], keyFocused && Checkbox$1["default"].keyFocused);
  return /*#__PURE__*/React__default["default"].createElement(Choice.Choice, {
    id: id,
    label: label,
    labelHidden: labelHidden,
    helpText: helpText,
    error: error,
    disabled: disabled,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: wrapperClassName
  }, /*#__PURE__*/React__default["default"].createElement("input", Object.assign({
    ref: inputNode,
    id: id,
    name: name,
    value: value,
    type: "checkbox",
    checked: isChecked,
    disabled: disabled,
    className: inputClassName,
    onBlur: handleBlur,
    onChange: noop,
    onClick: handleOnClick,
    onFocus: onFocus,
    onKeyUp: handleKeyUp,
    "aria-invalid": error != null,
    "aria-controls": ariaControls,
    "aria-describedby": ariaDescribedBy,
    role: isWithinListbox ? 'presentation' : 'checkbox'
  }, indeterminateAttributes)), /*#__PURE__*/React__default["default"].createElement("span", {
    className: backdropClassName,
    onClick: stopPropagation,
    onKeyUp: stopPropagation
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: Checkbox$1["default"].Icon
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: iconSource
  }))));
});

function noop() {}

function stopPropagation(event) {
  event.stopPropagation();
}

exports.Checkbox = Checkbox;
