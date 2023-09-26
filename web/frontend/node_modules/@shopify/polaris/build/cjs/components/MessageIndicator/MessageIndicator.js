'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MessageIndicator$1 = require('./MessageIndicator.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MessageIndicator({
  children,
  active
}) {
  const indicatorMarkup = active && /*#__PURE__*/React__default["default"].createElement("div", {
    className: MessageIndicator$1["default"].MessageIndicator
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: MessageIndicator$1["default"].MessageIndicatorWrapper
  }, indicatorMarkup, children);
}

exports.MessageIndicator = MessageIndicator;
