import React, { isValidElement } from 'react';
import styles from '../../Card.scss.js';
import { ButtonGroup } from '../../../ButtonGroup/ButtonGroup.js';
import { buttonsFrom } from '../../../Button/utils.js';
import { Stack } from '../../../Stack/Stack.js';
import { Heading } from '../../../Heading/Heading.js';

function Header({
  children,
  title,
  actions
}) {
  const actionMarkup = actions ? /*#__PURE__*/React.createElement(ButtonGroup, null, buttonsFrom(actions, {
    plain: true
  })) : null;
  const titleMarkup = /*#__PURE__*/isValidElement(title) ? title : /*#__PURE__*/React.createElement(Heading, null, title);
  const headingMarkup = actionMarkup || children ? /*#__PURE__*/React.createElement(Stack, {
    alignment: "baseline"
  }, /*#__PURE__*/React.createElement(Stack.Item, {
    fill: true
  }, titleMarkup), actionMarkup, children) : titleMarkup;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Header
  }, headingMarkup);
}

export { Header };
