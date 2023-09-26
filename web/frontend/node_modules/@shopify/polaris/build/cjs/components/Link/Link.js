'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var bannerContext = require('../../utilities/banner-context.js');
var css = require('../../utilities/css.js');
var Link$1 = require('./Link.scss.js');
var UnstyledLink = require('../UnstyledLink/UnstyledLink.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Link({
  url,
  children,
  onClick,
  external,
  id,
  monochrome,
  removeUnderline,
  accessibilityLabel,
  dataPrimaryLink
}) {
  return /*#__PURE__*/React__default["default"].createElement(bannerContext.BannerContext.Consumer, null, BannerContext => {
    const shouldBeMonochrome = monochrome || BannerContext;
    const className = css.classNames(Link$1["default"].Link, shouldBeMonochrome && Link$1["default"].monochrome, removeUnderline && Link$1["default"].removeUnderline);
    return url ? /*#__PURE__*/React__default["default"].createElement(UnstyledLink.UnstyledLink, {
      onClick: onClick,
      className: className,
      url: url,
      external: external,
      id: id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children) : /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: onClick,
      className: className,
      id: id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children);
  });
}

exports.Link = Link;
