import React from 'react';
import styles from '../../Card.scss.js';

function Subsection({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Subsection
  }, children);
}

export { Subsection };
