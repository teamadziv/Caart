import React from 'react';
import { VisuallyHidden } from '../../../VisuallyHidden/VisuallyHidden.js';

function TagsWrapper({
  children,
  hidden
}) {
  if (hidden) {
    return /*#__PURE__*/React.createElement(VisuallyHidden, null, children);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
}

export { TagsWrapper };
