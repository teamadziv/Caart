import React, { useState } from 'react';
import { TickSmallMinor } from '@shopify/polaris-icons';
import { classNames } from '../../../../utilities/css.js';
import styles from './Checkbox.scss.js';
import { useUniqueId } from '../../../../utilities/unique-id/hooks.js';
import { Icon } from '../../../Icon/Icon.js';

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
  const id = useUniqueId('Checkbox', idProp);
  const [keyFocused, setKeyFocused] = useState(false);
  const className = classNames(styles.Checkbox, active && styles.active);

  const handleBlur = () => {
    setKeyFocused(false);
  };

  const handleKeyUp = () => {
    !keyFocused && setKeyFocused(true);
  };

  const inputClassName = classNames(styles.Input, keyFocused && styles.keyFocused);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("input", {
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
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.Backdrop
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.Icon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: TickSmallMinor
  })));
}

export { Checkbox };
