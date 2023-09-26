'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var DatePicker = require('../../DatePicker.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Weekday = /*#__PURE__*/React.memo(function Weekday({
  label,
  title,
  current
}) {
  const className = css.classNames(DatePicker["default"].Weekday, current && DatePicker["default"]['Weekday-current']);
  return /*#__PURE__*/React__default["default"].createElement("th", {
    "aria-label": label,
    scope: "col",
    className: className
  }, title);
});

exports.Weekday = Weekday;
