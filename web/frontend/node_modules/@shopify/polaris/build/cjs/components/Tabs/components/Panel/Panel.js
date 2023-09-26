'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var Tabs = require('../../Tabs.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Panel({
  hidden,
  id,
  tabID,
  children
}) {
  const className = css.classNames(Tabs["default"].Panel, hidden && Tabs["default"]['Panel-hidden']);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    id: id,
    role: "tabpanel",
    "aria-labelledby": tabID,
    tabIndex: -1
  }, children);
}

exports.Panel = Panel;
