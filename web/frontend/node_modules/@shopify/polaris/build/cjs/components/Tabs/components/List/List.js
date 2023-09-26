'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Tabs = require('../../Tabs.scss.js');
var Item = require('../Item/Item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function List({
  focusIndex,
  disclosureTabs,
  onClick = noop,
  onKeyPress = noop
}) {
  const tabs = disclosureTabs.map(({
    id,
    content,
    ...tabProps
  }, index) => {
    return /*#__PURE__*/React__default["default"].createElement(Item.Item, Object.assign({
      key: id
    }, tabProps, {
      id: id,
      focused: index === focusIndex,
      onClick: onClick.bind(null, id)
    }), content);
  });
  return /*#__PURE__*/React__default["default"].createElement("ul", {
    className: Tabs["default"].List,
    onKeyDown: handleKeyDown,
    onKeyUp: onKeyPress
  }, tabs);
}

function noop() {}

function handleKeyDown(event) {
  const {
    key
  } = event;

  if (key === 'ArrowLeft' || key === 'ArrowRight') {
    event.preventDefault();
    event.stopPropagation();
  }
}

exports.List = List;
