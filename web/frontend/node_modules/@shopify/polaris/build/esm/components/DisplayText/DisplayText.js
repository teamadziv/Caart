import React from 'react';
import { classNames, variationName } from '../../utilities/css.js';
import styles from './DisplayText.scss.js';

function DisplayText({
  element: Element = 'p',
  children,
  size = 'medium'
}) {
  const className = classNames(styles.DisplayText, size && styles[variationName('size', size)]);
  return /*#__PURE__*/React.createElement(Element, {
    className: className
  }, children);
}

export { DisplayText };
