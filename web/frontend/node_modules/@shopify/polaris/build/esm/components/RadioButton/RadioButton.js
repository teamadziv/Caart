import React, { useRef, useState } from 'react';
import { useToggle } from '../../utilities/use-toggle.js';
import { classNames } from '../../utilities/css.js';
import styles from './RadioButton.scss.js';
import { useUniqueId } from '../../utilities/unique-id/hooks.js';
import { Choice, helpTextID } from '../Choice/Choice.js';

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
  const id = useUniqueId('RadioButton', idProp);
  const name = nameProp || id;
  const inputNode = useRef(null);
  const [keyFocused, setKeyFocused] = useState(false);
  const {
    value: mouseOver,
    setTrue: handleMouseOver,
    setFalse: handleMouseOut
  } = useToggle(false);

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
    describedBy.push(helpTextID(id));
  }

  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }

  const ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
  const inputClassName = classNames(styles.Input, keyFocused && styles.keyFocused);
  const backdropClassName = classNames(styles.Backdrop, mouseOver && styles.hover);
  return /*#__PURE__*/React.createElement(Choice, {
    label: label,
    labelHidden: labelHidden,
    disabled: disabled,
    id: id,
    helpText: helpText,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.RadioButton
  }, /*#__PURE__*/React.createElement("input", {
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
  }), /*#__PURE__*/React.createElement("span", {
    className: backdropClassName
  })));
}

export { RadioButton };
