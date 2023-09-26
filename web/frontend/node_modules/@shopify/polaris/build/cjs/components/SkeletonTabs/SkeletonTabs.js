'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var SkeletonTabs$1 = require('./SkeletonTabs.scss.js');
var SkeletonBodyText = require('../SkeletonBodyText/SkeletonBodyText.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SkeletonTabs({
  count = 2
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: SkeletonTabs$1["default"].Tabs
  }, [...Array(count).keys()].map(key => {
    const tabWidthClassName = key % 2 === 0 ? SkeletonTabs$1["default"]['Tab-short'] : SkeletonTabs$1["default"]['Tab-long'];
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: key,
      className: css.classNames(SkeletonTabs$1["default"].Tab, tabWidthClassName)
    }, /*#__PURE__*/React__default["default"].createElement(SkeletonBodyText.SkeletonBodyText, {
      lines: 1
    }));
  }));
}

exports.SkeletonTabs = SkeletonTabs;
