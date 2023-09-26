import React from 'react';
import styles from './VisuallyHidden.scss.js';

function VisuallyHidden({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: styles.VisuallyHidden
  }, children);
}

export { VisuallyHidden };
