'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var errors = require('../errors.js');
var context = require('./context.js');
var hooks = require('../unique-id/hooks.js');

function useFocusManager({
  trapping
}) {
  const focusManager = React.useContext(context.FocusManagerContext);
  const id = hooks.useUniqueId();

  if (!focusManager) {
    throw new errors.MissingAppProviderError('No FocusManager was provided.');
  }

  const {
    trapFocusList,
    add: addFocusItem,
    remove: removeFocusItem
  } = focusManager;
  const canSafelyFocus = trapFocusList[0] === id;
  const value = React.useMemo(() => ({
    canSafelyFocus
  }), [canSafelyFocus]);
  React.useEffect(() => {
    if (!trapping) return;
    addFocusItem(id);
    return () => {
      removeFocusItem(id);
    };
  }, [addFocusItem, id, removeFocusItem, trapping]);
  return value;
}

exports.useFocusManager = useFocusManager;
