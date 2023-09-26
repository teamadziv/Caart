'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var errors = require('../errors.js');
var context = require('./context.js');

/**
 * Returns a unique id that remains consistent across multiple re-renders of the
 * same hook
 * @param prefix Defines a prefix for the ID. You probably want to set this to
 *   the name of the component you're calling `useUniqueId` in.
 * @param overrideId Defines a fixed value to use instead of generating a unique
 *   ID. Useful for components that allow consumers to specify their own ID.
 */

function useUniqueId(prefix = '', overrideId = '') {
  const idFactory = React.useContext(context.UniqueIdFactoryContext); // By using a ref to store the uniqueId for each invocation of the hook and
  // checking that it is not already populated we ensure that we don’t generate
  // a new ID on every re-render of a component.

  const uniqueIdRef = React.useRef(null);

  if (!idFactory) {
    throw new errors.MissingAppProviderError('No UniqueIdFactory was provided.');
  } // If an override was specified, then use that instead of using a unique ID
  // Hooks can’t be called conditionally so this has to go after all use* calls


  if (overrideId) {
    return overrideId;
  } // If a unique id has not yet been generated, then get a new one


  if (!uniqueIdRef.current) {
    uniqueIdRef.current = idFactory.nextId(prefix);
  }

  return uniqueIdRef.current;
}

exports.useUniqueId = useUniqueId;
