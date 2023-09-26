import React from 'react';
import styles from './Message.scss.js';
import { Link } from '../../../../../Link/Link.js';
import { Badge } from '../../../../../Badge/Badge.js';
import { Popover } from '../../../../../Popover/Popover.js';
import { Stack } from '../../../../../Stack/Stack.js';
import { TextContainer } from '../../../../../TextContainer/TextContainer.js';
import { Heading } from '../../../../../Heading/Heading.js';
import { Button } from '../../../../../Button/Button.js';

function Message({
  title,
  description,
  action,
  link,
  badge
}) {
  const badgeMarkup = badge && /*#__PURE__*/React.createElement(Badge, {
    status: badge.status
  }, badge.content);
  const {
    to,
    content: linkContent
  } = link;
  const {
    onClick,
    content: actionContent
  } = action;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Section
  }, /*#__PURE__*/React.createElement(Popover.Section, null, /*#__PURE__*/React.createElement(Stack, {
    vertical: true,
    spacing: "tight"
  }, /*#__PURE__*/React.createElement(TextContainer, null, /*#__PURE__*/React.createElement(Heading, null, title, badgeMarkup), /*#__PURE__*/React.createElement("p", null, description)), /*#__PURE__*/React.createElement(Link, {
    url: to
  }, linkContent), /*#__PURE__*/React.createElement(Button, {
    plain: true,
    onClick: onClick
  }, actionContent))));
}

export { Message };
