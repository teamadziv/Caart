'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var FullscreenBar$1 = require('./FullscreenBar.scss.js');
var hooks = require('../../utilities/i18n/hooks.js');
var Icon = require('../Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function FullscreenBar({
  onAction,
  children
}) {
  const i18n = hooks.useI18n();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: FullscreenBar$1["default"].FullscreenBar
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: FullscreenBar$1["default"].BackAction,
    onClick: onAction,
    "aria-label": i18n.translate('Polaris.FullscreenBar.accessibilityLabel')
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: polarisIcons.ExitMajor
  }), i18n.translate('Polaris.FullscreenBar.back')), children);
}

exports.FullscreenBar = FullscreenBar;
