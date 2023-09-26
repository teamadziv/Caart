import React from 'react';
import { CancelSmallMinor } from '@shopify/polaris-icons';
import { classNames } from '../../utilities/css.js';
import styles from './CalloutCard.scss.js';
import { TextContainer } from '../TextContainer/TextContainer.js';
import { buttonFrom } from '../Button/utils.js';
import { Button } from '../Button/Button.js';
import { Card } from '../Card/Card.js';
import { Heading } from '../Heading/Heading.js';
import { Image } from '../Image/Image.js';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup.js';

function CalloutCard({
  title,
  children,
  illustration,
  primaryAction,
  secondaryAction,
  onDismiss
}) {
  const primaryActionMarkup = buttonFrom(primaryAction);
  const secondaryActionMarkup = secondaryAction ? buttonFrom(secondaryAction, {
    plain: true
  }) : null;
  const buttonMarkup = secondaryActionMarkup ? /*#__PURE__*/React.createElement(ButtonGroup, null, primaryActionMarkup, secondaryActionMarkup) : primaryActionMarkup;
  const dismissButton = onDismiss ? /*#__PURE__*/React.createElement("div", {
    className: styles.Dismiss
  }, /*#__PURE__*/React.createElement(Button, {
    plain: true,
    icon: CancelSmallMinor,
    onClick: onDismiss,
    accessibilityLabel: "Dismiss card"
  })) : null;
  const imageClassName = classNames(styles.Image, onDismiss && styles.DismissImage);
  const containerClassName = classNames(styles.Container, onDismiss && styles.hasDismiss);
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: containerClassName
  }, dismissButton, /*#__PURE__*/React.createElement(Card.Section, null, /*#__PURE__*/React.createElement("div", {
    className: styles.CalloutCard
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Content
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Title
  }, /*#__PURE__*/React.createElement(Heading, null, title)), /*#__PURE__*/React.createElement(TextContainer, null, children), /*#__PURE__*/React.createElement("div", {
    className: styles.Buttons
  }, buttonMarkup)), /*#__PURE__*/React.createElement(Image, {
    alt: "",
    className: imageClassName,
    source: illustration
  })))));
}

export { CalloutCard };
