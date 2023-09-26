'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../../../utilities/css.js');
var Title$1 = require('./Title.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Title({
  title,
  subtitle,
  titleMetadata,
  compactTitle
}) {
  const className = css.classNames(Title$1["default"].Title, subtitle && Title$1["default"].TitleWithSubtitle);
  const titleMarkup = title ? /*#__PURE__*/React__default["default"].createElement("h1", {
    className: className
  }, title) : null;
  const titleMetadataMarkup = titleMetadata ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: Title$1["default"].TitleMetadata
  }, titleMetadata) : null;
  const wrappedTitleMarkup = titleMetadata ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: Title$1["default"].TitleWithMetadataWrapper
  }, titleMarkup, titleMetadataMarkup) : titleMarkup;
  const subtitleMarkup = subtitle ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: css.classNames(Title$1["default"].SubTitle, compactTitle && Title$1["default"].SubtitleCompact)
  }, /*#__PURE__*/React__default["default"].createElement("p", null, subtitle)) : null;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, wrappedTitleMarkup, subtitleMarkup);
}

exports.Title = Title;
