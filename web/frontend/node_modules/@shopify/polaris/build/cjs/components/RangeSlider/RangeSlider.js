'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DualThumb = require('./components/DualThumb/DualThumb.js');
var SingleThumb = require('./components/SingleThumb/SingleThumb.js');
var hooks = require('../../utilities/unique-id/hooks.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  value,
  ...rest
}) {
  const id = hooks.useUniqueId('RangeSlider');
  const sharedProps = {
    id,
    min,
    max,
    step,
    ...rest
  };
  return isDualThumb(value) ? /*#__PURE__*/React__default["default"].createElement(DualThumb.DualThumb, Object.assign({
    value: value
  }, sharedProps)) : /*#__PURE__*/React__default["default"].createElement(SingleThumb.SingleThumb, Object.assign({
    value: value
  }, sharedProps));
}

function isDualThumb(value) {
  return Array.isArray(value);
}

exports.RangeSlider = RangeSlider;
