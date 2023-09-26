import React from 'react';
import { ArrowLeftMinor } from '@shopify/polaris-icons';
import { handleMouseUpByBlurring } from '../../utilities/focus.js';
import styles from './Breadcrumbs.scss.js';
import { Icon } from '../Icon/Icon.js';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.js';
import { UnstyledLink } from '../UnstyledLink/UnstyledLink.js';

function Breadcrumbs({
  breadcrumbs
}) {
  const breadcrumb = breadcrumbs[breadcrumbs.length - 1];

  if (breadcrumb == null) {
    return null;
  }

  const {
    content
  } = breadcrumb;
  const contentMarkup = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: styles.Icon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: ArrowLeftMinor
  })), /*#__PURE__*/React.createElement(VisuallyHidden, null, content));
  const breadcrumbMarkup = 'url' in breadcrumb ? /*#__PURE__*/React.createElement(UnstyledLink, {
    key: content,
    url: breadcrumb.url,
    className: styles.Breadcrumb,
    onMouseUp: handleMouseUpByBlurring,
    "aria-label": breadcrumb.accessibilityLabel
  }, contentMarkup) : /*#__PURE__*/React.createElement("button", {
    key: content,
    className: styles.Breadcrumb,
    onClick: breadcrumb.onAction,
    onMouseUp: handleMouseUpByBlurring,
    type: "button",
    "aria-label": breadcrumb.accessibilityLabel
  }, contentMarkup);
  return /*#__PURE__*/React.createElement("nav", {
    role: "navigation"
  }, breadcrumbMarkup);
}

export { Breadcrumbs };
