'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var focus = require('../../utilities/focus.js');
var types = require('../../types.js');
var css = require('../../utilities/css.js');
var ActionList$1 = require('./ActionList.scss.js');
var Section = require('./components/Section/Section.js');
var KeypressListener = require('../KeypressListener/KeypressListener.js');
var Item = require('./components/Item/Item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ActionList({
  items,
  sections = [],
  actionRole,
  onActionAnyItem
}) {
  let finalSections = [];
  const actionListRef = React.useRef(null);

  if (items) {
    finalSections = [{
      items
    }, ...sections];
  } else if (sections) {
    finalSections = sections;
  }

  const className = css.classNames(ActionList$1["default"].ActionList);
  const hasMultipleSections = finalSections.length > 1;
  const Element = hasMultipleSections ? 'ul' : 'div';
  const elementRole = hasMultipleSections && actionRole === 'menuitem' ? 'menu' : undefined;
  const elementTabIndex = hasMultipleSections && actionRole === 'menuitem' ? -1 : undefined;
  const sectionMarkup = finalSections.map((section, index) => {
    return section.items.length > 0 ? /*#__PURE__*/React__default["default"].createElement(Section.Section, {
      key: section.title || index,
      section: section,
      hasMultipleSections: hasMultipleSections,
      actionRole: actionRole,
      onActionAnyItem: onActionAnyItem
    }) : null;
  });

  const handleFocusPreviousItem = evt => {
    evt.preventDefault();

    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        focus.wrapFocusPreviousFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };

  const handleFocusNextItem = evt => {
    evt.preventDefault();

    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        focus.wrapFocusNextFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };

  const listeners = actionRole === 'menuitem' ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(KeypressListener.KeypressListener, {
    keyEvent: "keydown",
    keyCode: types.Key.DownArrow,
    handler: handleFocusNextItem
  }), /*#__PURE__*/React__default["default"].createElement(KeypressListener.KeypressListener, {
    keyEvent: "keydown",
    keyCode: types.Key.UpArrow,
    handler: handleFocusPreviousItem
  })) : null;
  return /*#__PURE__*/React__default["default"].createElement(Element, {
    ref: actionListRef,
    className: className,
    role: elementRole,
    tabIndex: elementTabIndex
  }, listeners, sectionMarkup);
}
ActionList.Item = Item.Item;

exports.ActionList = ActionList;
