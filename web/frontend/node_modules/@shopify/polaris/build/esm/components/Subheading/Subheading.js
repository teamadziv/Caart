import React from 'react';
import styles from './Subheading.scss.js';

function Subheading({
  element: Element = 'h3',
  children
}) {
  const ariaLabel = typeof children === 'string' ? children : undefined;
  return /*#__PURE__*/React.createElement(Element, {
    "aria-label": ariaLabel,
    className: styles.Subheading
  }, children);
}

export { Subheading };
