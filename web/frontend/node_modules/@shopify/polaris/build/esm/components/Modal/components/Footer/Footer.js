import React from 'react';
import styles from './Footer.scss.js';
import { buttonsFrom } from '../../../Button/utils.js';
import { Stack } from '../../../Stack/Stack.js';
import { ButtonGroup } from '../../../ButtonGroup/ButtonGroup.js';

function Footer({
  primaryAction,
  secondaryActions,
  children
}) {
  const primaryActionButton = primaryAction && buttonsFrom(primaryAction, {
    primary: true
  }) || null;
  const secondaryActionButtons = secondaryActions && buttonsFrom(secondaryActions) || null;
  const actions = primaryActionButton || secondaryActionButtons ? /*#__PURE__*/React.createElement(ButtonGroup, null, secondaryActionButtons, primaryActionButton) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Footer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.FooterContent
  }, /*#__PURE__*/React.createElement(Stack, {
    alignment: "center"
  }, /*#__PURE__*/React.createElement(Stack.Item, {
    fill: true
  }, children), actions)));
}

export { Footer };
