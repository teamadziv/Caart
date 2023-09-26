'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var selectors = require('./selectors.js');
var context = require('./context.js');
var Section$1 = require('./Section.scss.js');
var hooks = require('../../../../utilities/unique-id/hooks.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Section({
  children,
  divider = true,
  title
}) {
  const sectionId = hooks.useUniqueId('ListboxSection');
  return /*#__PURE__*/React__default["default"].createElement(context.SectionContext.Provider, {
    value: sectionId
  }, /*#__PURE__*/React__default["default"].createElement("li", Object.assign({
    role: "presentation"
  }, selectors.listboxSectionDataSelector.props), title, /*#__PURE__*/React__default["default"].createElement("ul", {
    role: "group",
    "aria-labelledby": sectionId,
    className: css.classNames(Section$1["default"].SectionGroup, !divider && Section$1["default"].noDivider)
  }, children)));
}

exports.Section = Section;
