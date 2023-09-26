'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var TextField = require('../../TextField.scss.js');
var Icon = require('../../../Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Spinner = /*#__PURE__*/React__default["default"].forwardRef(function Spinner({
  onChange,
  onClick,
  onMouseDown,
  onMouseUp
}, ref) {
  function handleStep(step) {
    return () => onChange(step);
  }

  function handleMouseDown(onChange) {
    return event => {
      if (event.button !== 0) return;
      onMouseDown(onChange);
    };
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: TextField["default"].Spinner,
    onClick: onClick,
    "aria-hidden": true,
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    role: "button",
    className: TextField["default"].Segment,
    tabIndex: -1,
    onClick: handleStep(1),
    onMouseDown: handleMouseDown(handleStep(1)),
    onMouseUp: onMouseUp
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: TextField["default"].SpinnerIcon
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: polarisIcons.CaretUpMinor
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    role: "button",
    className: TextField["default"].Segment,
    tabIndex: -1,
    onClick: handleStep(-1),
    onMouseDown: handleMouseDown(handleStep(-1)),
    onMouseUp: onMouseUp
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: TextField["default"].SpinnerIcon
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: polarisIcons.CaretDownMinor
  }))));
});

exports.Spinner = Spinner;
