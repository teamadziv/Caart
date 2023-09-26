import React from 'react';
import { useIsAfterInitialMount } from '../../utilities/use-is-after-initial-mount.js';

function AfterInitialMount({
  children,
  fallback = null
}) {
  const isMounted = useIsAfterInitialMount();
  const content = isMounted ? children : fallback;
  return /*#__PURE__*/React.createElement(React.Fragment, null, content);
}

export { AfterInitialMount };
