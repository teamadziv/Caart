import React from 'react';
import styles from './Heading.scss.js';

function Heading({
  element: Element = 'h2',
  children,
  id
}) {
  return /*#__PURE__*/React.createElement(Element, {
    className: styles.Heading,
    id: id
  }, children);
}

export { Heading };
