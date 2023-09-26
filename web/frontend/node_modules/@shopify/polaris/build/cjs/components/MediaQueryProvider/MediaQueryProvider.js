'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var debounce = require('../../utilities/debounce.js');
var breakpoints = require('../../utilities/breakpoints.js');
var context = require('../../utilities/media-query/context.js');
var EventListener = require('../EventListener/EventListener.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const MediaQueryProvider = function MediaQueryProvider({
  children
}) {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = React.useState(breakpoints.navigationBarCollapsed().matches); // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleResize = React.useCallback(debounce.debounce(() => {
    if (isNavigationCollapsed !== breakpoints.navigationBarCollapsed().matches) {
      setIsNavigationCollapsed(!isNavigationCollapsed);
    }
  }, 40, {
    trailing: true,
    leading: true,
    maxWait: 40
  }), [isNavigationCollapsed]);
  React.useEffect(() => {
    setIsNavigationCollapsed(breakpoints.navigationBarCollapsed().matches);
  }, []);
  const context$1 = React.useMemo(() => ({
    isNavigationCollapsed
  }), [isNavigationCollapsed]);
  return /*#__PURE__*/React__default["default"].createElement(context.MediaQueryContext.Provider, {
    value: context$1
  }, /*#__PURE__*/React__default["default"].createElement(EventListener.EventListener, {
    event: "resize",
    handler: handleResize
  }), children);
};

exports.MediaQueryProvider = MediaQueryProvider;
