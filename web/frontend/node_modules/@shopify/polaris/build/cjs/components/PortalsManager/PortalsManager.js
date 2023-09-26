'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var context = require('../../utilities/portals/context.js');
var PortalsContainer = require('./components/PortalsContainer/PortalsContainer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function PortalsManager({
  children,
  container
}) {
  const [portalContainerElement, setPortalContainerElement] = React.useState(null);
  const currentContainer = container !== null && container !== void 0 ? container : portalContainerElement;
  const contextValue = React.useMemo(() => ({
    container: currentContainer
  }), [currentContainer]);
  return /*#__PURE__*/React__default["default"].createElement(context.PortalsManagerContext.Provider, {
    value: contextValue
  }, children, container ? null : /*#__PURE__*/React__default["default"].createElement(PortalsContainer.PortalsContainer, {
    ref: setPortalContainerElement
  }));
}

exports.PortalsManager = PortalsManager;
