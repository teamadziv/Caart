'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var SearchDismissOverlay$1 = require('./SearchDismissOverlay.scss.js');
var ScrollLock = require('../../../ScrollLock/ScrollLock.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SearchDismissOverlay({
  onDismiss,
  visible
}) {
  const node = React.useRef(null);
  const handleDismiss = React.useCallback(({
    target
  }) => {
    if (target === node.current && onDismiss != null) {
      onDismiss();
    }
  }, [onDismiss]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, visible ? /*#__PURE__*/React__default["default"].createElement(ScrollLock.ScrollLock, null) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: node,
    className: css.classNames(SearchDismissOverlay$1["default"].SearchDismissOverlay, visible && SearchDismissOverlay$1["default"].visible),
    onClick: handleDismiss
  }));
}

exports.SearchDismissOverlay = SearchDismissOverlay;
