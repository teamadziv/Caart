'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var context = require('../../../../utilities/listbox/context.js');
var Action$1 = require('./Action.scss.js');
var Option = require('../Option/Option.js');
var TextOption = require('../TextOption/TextOption.js');
var Icon = require('../../../Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Action(props) {
  const {
    selected,
    disabled,
    children,
    icon,
    divider
  } = props;
  const iconMarkup = icon && /*#__PURE__*/React__default["default"].createElement("div", {
    className: Action$1["default"].Icon
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    color: "subdued",
    source: icon
  }));
  const className = css.classNames(Action$1["default"].Action, divider && Action$1["default"].ActionDivider);
  return /*#__PURE__*/React__default["default"].createElement(context.ActionContext.Provider, {
    value: true
  }, /*#__PURE__*/React__default["default"].createElement(Option.Option, props, /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default["default"].createElement(TextOption.TextOption, {
    selected: selected,
    disabled: disabled
  }, iconMarkup, children))));
}

exports.Action = Action;
