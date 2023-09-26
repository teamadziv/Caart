import React from 'react';
import { classNames } from '../../../../utilities/css.js';
import { listboxSectionDataSelector } from './selectors.js';
import { SectionContext } from './context.js';
import styles from './Section.scss.js';
import { useUniqueId } from '../../../../utilities/unique-id/hooks.js';

function Section({
  children,
  divider = true,
  title
}) {
  const sectionId = useUniqueId('ListboxSection');
  return /*#__PURE__*/React.createElement(SectionContext.Provider, {
    value: sectionId
  }, /*#__PURE__*/React.createElement("li", Object.assign({
    role: "presentation"
  }, listboxSectionDataSelector.props), title, /*#__PURE__*/React.createElement("ul", {
    role: "group",
    "aria-labelledby": sectionId,
    className: classNames(styles.SectionGroup, !divider && styles.noDivider)
  }, children)));
}

export { Section };
