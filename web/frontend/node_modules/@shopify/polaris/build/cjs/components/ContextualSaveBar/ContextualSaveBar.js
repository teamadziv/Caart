'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('../../utilities/frame/hooks.js');

// that the interface defining the props is defined in this file, not imported
// from elsewhere. This silly workaround ensures that the Props Explorer table
// is generated correctly.

const ContextualSaveBar = /*#__PURE__*/React.memo(function ContextualSaveBar({
  message,
  saveAction,
  discardAction,
  alignContentFlush,
  fullWidth,
  contextControl,
  secondaryMenu
}) {
  const {
    setContextualSaveBar,
    removeContextualSaveBar
  } = hooks.useFrame();
  React.useEffect(() => {
    setContextualSaveBar({
      message,
      saveAction,
      discardAction,
      alignContentFlush,
      fullWidth,
      contextControl,
      secondaryMenu
    });
  }, [message, saveAction, discardAction, alignContentFlush, setContextualSaveBar, fullWidth, contextControl, secondaryMenu]);
  React.useEffect(() => {
    return removeContextualSaveBar;
  }, [removeContextualSaveBar]);
  return null;
});

exports.ContextualSaveBar = ContextualSaveBar;
