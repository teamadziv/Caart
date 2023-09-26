'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useToggle = require('../../utilities/use-toggle.js');
var css = require('../../utilities/css.js');
var RadioButton$1 = require('./RadioButton.scss.js');
var hooks = require('../../utilities/unique-id/hooks.js');
var Choice = require('../Choice/Choice.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function RadioButton({
  ariaDescribedBy: ariaDescribedByProp,
  label,
  labelHidden,
  helpText,
  checked,
  disabled,
  onChange,
  onFocus,
  onBlur,
  id: idProp,
  name: nameProp,
  value
}) {
  const id = hooks.useUniqueId('RadioButton', idProp);
  const name = nameProp || id;
  const inputNode = React.useRef(null);
  const [keyFocused, setKeyFocused] = React.useState(false);
  const {
    value: mouseOver,
    setTrue: handleMouseOver,
    setFalse: handleMouseOut
  } = useToggle.useToggle(false);

  const handleKeyUp = () => {
    !keyFocused && setKeyFocused(true);
  };

  const handleBlur = () => {
    onBlur && onBlur();
    setKeyFocused(false);
  };

  function handleChange({
    currentTarget
  }) {
    onChange && onChange(currentTarget.checked, id);
  }

  const describedBy = [];

  if (helpText) {
    describedBy.push(Choice.helpTextID(id));
  }

  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }

  const ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
  const inputClassName = css.classNames(RadioButton$1["default"].Input, keyFocused && RadioButton$1["default"].keyFocused);
  const backdropClassName = css.classNames(RadioButton$1["default"].Backdrop, mouseOver && RadioButton$1["default"].hover);
  return /*#__PURE__*/React__default["default"].createElement(Choice.Choice, {
    label: label,
    labelHidden: labelHidden,
    disabled: disabled,
    id: id,
    helpText: helpText,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: RadioButton$1["default"].RadioButton
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    id: id,
    name: name,
    value: value,
    type: "radio",
    checked: checked,
    disabled: disabled,
    className: inputClassName,
    onChange: handleChange,
    onFocus: onFocus,
    onKeyUp: handleKeyUp,
    onBlur: handleBlur,
    "aria-describedby": ariaDescribedBy,
    ref: inputNode
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: backdropClassName
  })));
}

exports.RadioButton = RadioButton;
