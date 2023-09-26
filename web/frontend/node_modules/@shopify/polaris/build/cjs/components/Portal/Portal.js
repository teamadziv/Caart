'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');
var hooks = require('../../utilities/portals/hooks.js');
var hooks$1 = require('../../utilities/unique-id/hooks.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Portal({
  children,
  idPrefix = '',
  onPortalCreated = noop
}) {
  const {
    container
  } = hooks.usePortalsManager();
  const uniqueId = hooks$1.useUniqueId('portal');
  const portalId = idPrefix !== '' ? `${idPrefix}-${uniqueId}` : uniqueId;
  React.useEffect(() => {
    onPortalCreated();
  }, [onPortalCreated]);
  return container ? /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
    "data-portal-id": portalId
  }, children), container) : null;
}

function noop() {}

exports.Portal = Portal;
