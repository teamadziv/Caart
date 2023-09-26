'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Card = require('../../Card.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Subsection({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Card["default"].Subsection
  }, children);
}

exports.Subsection = Subsection;
