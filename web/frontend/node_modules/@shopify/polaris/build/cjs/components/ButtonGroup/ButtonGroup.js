'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var components = require('../../utilities/components.js');
var ButtonGroup$1 = require('./ButtonGroup.scss.js');
var Item = require('./components/Item/Item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ButtonGroup({
  children,
  spacing,
  segmented,
  fullWidth,
  connectedTop
}) {
  const className = css.classNames(ButtonGroup$1["default"].ButtonGroup, spacing && ButtonGroup$1["default"][spacing], segmented && ButtonGroup$1["default"].segmented, fullWidth && ButtonGroup$1["default"].fullWidth);
  const contents = components.elementChildren(children).map((child, index) => /*#__PURE__*/React__default["default"].createElement(Item.Item, {
    button: child,
    key: index
  }));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    "data-buttongroup-segmented": segmented,
    "data-buttongroup-connected-top": connectedTop,
    "data-buttongroup-full-width": fullWidth
  }, contents);
}

exports.ButtonGroup = ButtonGroup;
