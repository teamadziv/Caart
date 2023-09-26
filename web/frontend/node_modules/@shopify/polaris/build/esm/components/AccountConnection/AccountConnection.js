import React from 'react';
import styles from './AccountConnection.scss.js';
import { Card } from '../Card/Card.js';
import { SettingAction } from '../SettingAction/SettingAction.js';
import { Avatar } from '../Avatar/Avatar.js';
import { buttonFrom } from '../Button/utils.js';
import { Stack } from '../Stack/Stack.js';
import { TextStyle } from '../TextStyle/TextStyle.js';

function AccountConnection({
  connected = false,
  action,
  avatarUrl,
  accountName = '',
  title,
  details,
  termsOfService
}) {
  const initials = accountName ? accountName.split(/\s+/).map(name => name[0]).join('') : undefined;
  const avatarMarkup = connected ? /*#__PURE__*/React.createElement(Avatar, {
    accessibilityLabel: "",
    name: accountName,
    initials: initials,
    source: avatarUrl
  }) : null;
  let titleMarkup = null;

  if (title) {
    titleMarkup = /*#__PURE__*/React.createElement("div", null, title);
  } else if (accountName) {
    titleMarkup = /*#__PURE__*/React.createElement("div", null, accountName);
  }

  const detailsMarkup = details ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextStyle, {
    variation: "subdued"
  }, details)) : null;
  const termsOfServiceMarkup = termsOfService ? /*#__PURE__*/React.createElement("div", {
    className: styles.TermsOfService
  }, termsOfService) : null;
  const actionElement = action ? buttonFrom(action, {
    primary: !connected
  }) : null;
  return /*#__PURE__*/React.createElement(Card, {
    sectioned: true
  }, /*#__PURE__*/React.createElement(SettingAction, {
    action: actionElement
  }, /*#__PURE__*/React.createElement(Stack, null, avatarMarkup, /*#__PURE__*/React.createElement(Stack.Item, {
    fill: true
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Content
  }, titleMarkup, detailsMarkup)))), termsOfServiceMarkup);
}

export { AccountConnection };
