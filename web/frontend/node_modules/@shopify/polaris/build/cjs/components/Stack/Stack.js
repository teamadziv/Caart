'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var components = require('../../utilities/components.js');
var Stack$1 = require('./Stack.scss.js');
var Item = require('./components/Item/Item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Stack = /*#__PURE__*/React.memo(function Stack({
  children,
  vertical,
  spacing,
  distribution,
  alignment,
  wrap
}) {
  const className = css.classNames(Stack$1["default"].Stack, vertical && Stack$1["default"].vertical, spacing && Stack$1["default"][css.variationName('spacing', spacing)], distribution && Stack$1["default"][css.variationName('distribution', distribution)], alignment && Stack$1["default"][css.variationName('alignment', alignment)], wrap === false && Stack$1["default"].noWrap);
  const itemMarkup = components.elementChildren(children).map((child, index) => {
    const props = {
      key: index
    };
    return components.wrapWithComponent(child, Item.Item, props);
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, itemMarkup);
});
Stack.Item = Item.Item;

exports.Stack = Stack;
