'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var Layout = require('../../Layout.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Section({
  children,
  secondary,
  fullWidth,
  oneHalf,
  oneThird
}) {
  const className = css.classNames(Layout["default"].Section, secondary && Layout["default"]['Section-secondary'], fullWidth && Layout["default"]['Section-fullWidth'], oneHalf && Layout["default"]['Section-oneHalf'], oneThird && Layout["default"]['Section-oneThird']);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, children);
}

exports.Section = Section;
