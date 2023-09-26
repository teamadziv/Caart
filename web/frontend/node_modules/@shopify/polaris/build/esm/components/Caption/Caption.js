import React from 'react';
import styles from './Caption.scss.js';

function Caption({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: styles.Caption
  }, children);
}

export { Caption };
