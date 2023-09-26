'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var Section$1 = require('./Section.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Section({
  children,
  flush = false,
  subdued = false,
  titleHidden = false
}) {
  const className = css.classNames(Section$1["default"].Section, flush && Section$1["default"].flush, subdued && Section$1["default"].subdued, titleHidden && Section$1["default"].titleHidden);
  return /*#__PURE__*/React__default["default"].createElement("section", {
    className: className
  }, children);
}

exports.Section = Section;
