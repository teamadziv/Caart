import React from 'react';
import styles from './Header.scss.js';
import { useSection } from '../Section/hooks.js';

function Header({
  children
}) {
  const sectionId = useSection() || '';
  const content = typeof children === 'string' ? /*#__PURE__*/React.createElement("div", {
    className: styles.Header
  }, children) : children;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    id: sectionId
  }, content);
}

export { Header };
