'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var TextContainer$1 = require('./TextContainer.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TextContainer({
  spacing,
  children
}) {
  const className = css.classNames(TextContainer$1["default"].TextContainer, spacing && TextContainer$1["default"][css.variationName('spacing', spacing)]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, children);
}

exports.TextContainer = TextContainer;
