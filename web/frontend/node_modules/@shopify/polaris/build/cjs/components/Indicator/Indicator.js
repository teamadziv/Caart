'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var Indicator$1 = require('./Indicator.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Indicator({
  pulse = true
}) {
  const className = css.classNames(Indicator$1["default"].Indicator, pulse && Indicator$1["default"].pulseIndicator);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: className
  });
}

exports.Indicator = Indicator;
