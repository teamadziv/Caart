import React, { memo, useContext } from 'react';
import { classNames } from '../../../../utilities/css.js';
import { ComboboxListboxOptionContext } from '../../../../utilities/combobox/context.js';
import { ActionContext } from '../../../../utilities/listbox/context.js';
import styles from './TextOption.scss.js';
import { Checkbox } from '../../../Checkbox/Checkbox.js';

const TextOption = /*#__PURE__*/memo(function TextOption({
  children,
  selected,
  disabled
}) {
  const {
    allowMultiple
  } = useContext(ComboboxListboxOptionContext);
  const isAction = useContext(ActionContext);
  const textOptionClassName = classNames(styles.TextOption, selected && !allowMultiple && styles.selected, disabled && styles.disabled, allowMultiple && styles.allowMultiple, isAction && styles.isAction);
  return /*#__PURE__*/React.createElement("div", {
    className: textOptionClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Content
  }, allowMultiple && !isAction ? /*#__PURE__*/React.createElement("div", {
    className: styles.Checkbox
  }, /*#__PURE__*/React.createElement(Checkbox, {
    disabled: disabled,
    checked: selected,
    label: children
  })) : children));
});

export { TextOption };
