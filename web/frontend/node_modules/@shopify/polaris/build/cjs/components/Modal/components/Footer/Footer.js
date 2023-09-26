'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Footer$1 = require('./Footer.scss.js');
var utils = require('../../../Button/utils.js');
var Stack = require('../../../Stack/Stack.js');
var ButtonGroup = require('../../../ButtonGroup/ButtonGroup.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Footer({
  primaryAction,
  secondaryActions,
  children
}) {
  const primaryActionButton = primaryAction && utils.buttonsFrom(primaryAction, {
    primary: true
  }) || null;
  const secondaryActionButtons = secondaryActions && utils.buttonsFrom(secondaryActions) || null;
  const actions = primaryActionButton || secondaryActionButtons ? /*#__PURE__*/React__default["default"].createElement(ButtonGroup.ButtonGroup, null, secondaryActionButtons, primaryActionButton) : null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Footer$1["default"].Footer
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: Footer$1["default"].FooterContent
  }, /*#__PURE__*/React__default["default"].createElement(Stack.Stack, {
    alignment: "center"
  }, /*#__PURE__*/React__default["default"].createElement(Stack.Stack.Item, {
    fill: true
  }, children), actions)));
}

exports.Footer = Footer;
