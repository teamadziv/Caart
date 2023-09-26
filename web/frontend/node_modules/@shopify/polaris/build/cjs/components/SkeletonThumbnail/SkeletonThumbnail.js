'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var SkeletonThumbnail$1 = require('./SkeletonThumbnail.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SkeletonThumbnail({
  size = 'medium'
}) {
  const className = css.classNames(SkeletonThumbnail$1["default"].SkeletonThumbnail, size && SkeletonThumbnail$1["default"][css.variationName('size', size)]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  });
}

exports.SkeletonThumbnail = SkeletonThumbnail;
