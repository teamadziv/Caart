import React from 'react';
import styles from '../../../../Navigation.scss.js';
import { useUniqueId } from '../../../../../../utilities/unique-id/hooks.js';
import { Collapsible } from '../../../../../Collapsible/Collapsible.js';

function Secondary({
  id,
  children,
  expanded
}) {
  const uid = useUniqueId('SecondaryNavigation');
  return /*#__PURE__*/React.createElement(Collapsible, {
    id: id || uid,
    open: expanded,
    transition: {
      duration: '0ms',
      timingFunction: 'linear'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: styles.List
  }, children));
}

export { Secondary };
