import React, { forwardRef, useRef, useState, useContext, useImperativeHandle } from 'react';
import { MinusMinor, TickSmallMinor } from '@shopify/polaris-icons';
import { classNames } from '../../utilities/css.js';
import { useToggle } from '../../utilities/use-toggle.js';
import { Key } from '../../types.js';
import { WithinListboxContext } from '../../utilities/listbox/context.js';
import styles from './Checkbox.scss.js';
import { Choice, helpTextID } from '../Choice/Choice.js';
import { errorTextID } from '../InlineError/InlineError.js';
import { useUniqueId } from '../../utilities/unique-id/hooks.js';
import { Icon } from '../Icon/Icon.js';

const Checkbox = /*#__PURE__*/forwardRef(function Checkbox({
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
  const inputNode = useRef(null);
  const id = useUniqueId('Checkbox', idProp);
  const {
    value: mouseOver,
    setTrue: handleMouseOver,
    setFalse: handleMouseOut
  } = useToggle(false);
  const [keyFocused, setKeyFocused] = useState(false);
  const isWithinListbox = useContext(WithinListboxContext);
  useImperativeHandle(ref, () => ({
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

    if (keyCode === Key.Space || keyCode === Key.Tab) {
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
    describedBy.push(errorTextID(id));
  }

  if (helpText) {
    describedBy.push(helpTextID(id));
  }

  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }

  const ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
  const wrapperClassName = classNames(styles.Checkbox, error && styles.error);
  const backdropClassName = classNames(styles.Backdrop, mouseOver && styles.hover);
  const isIndeterminate = checked === 'indeterminate';
  const isChecked = !isIndeterminate && Boolean(checked);
  const indeterminateAttributes = isIndeterminate ? {
    indeterminate: 'true',
    'aria-checked': 'mixed'
  } : {
    'aria-checked': isChecked
  };
  const iconSource = isIndeterminate ? MinusMinor : TickSmallMinor;
  const inputClassName = classNames(styles.Input, isIndeterminate && styles['Input-indeterminate'], keyFocused && styles.keyFocused);
  return /*#__PURE__*/React.createElement(Choice, {
    id: id,
    label: label,
    labelHidden: labelHidden,
    helpText: helpText,
    error: error,
    disabled: disabled,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, /*#__PURE__*/React.createElement("span", {
    className: wrapperClassName
  }, /*#__PURE__*/React.createElement("input", Object.assign({
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
  }, indeterminateAttributes)), /*#__PURE__*/React.createElement("span", {
    className: backdropClassName,
    onClick: stopPropagation,
    onKeyUp: stopPropagation
  }), /*#__PURE__*/React.createElement("span", {
    className: styles.Icon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: iconSource
  }))));
});

function noop() {}

function stopPropagation(event) {
  event.stopPropagation();
}

export { Checkbox };
