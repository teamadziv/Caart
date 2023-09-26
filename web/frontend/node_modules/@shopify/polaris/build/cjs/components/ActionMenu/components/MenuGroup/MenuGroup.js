'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MenuGroup$1 = require('./MenuGroup.scss.js');
var SecondaryAction = require('../SecondaryAction/SecondaryAction.js');
var Popover = require('../../../Popover/Popover.js');
var ActionList = require('../../../ActionList/ActionList.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MenuGroup({
  accessibilityLabel,
  active,
  actions,
  details,
  title,
  icon,
  disabled,
  onClick,
  onClose,
  onOpen,
  getOffsetWidth,
  sections
}) {
  const handleClose = React.useCallback(() => {
    onClose(title);
  }, [onClose, title]);
  const handleOpen = React.useCallback(() => {
    onOpen(title);
  }, [onOpen, title]);
  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick(handleOpen);
    } else {
      handleOpen();
    }
  }, [onClick, handleOpen]);
  const handleOffsetWidth = React.useCallback(width => {
    if (!getOffsetWidth) return;
    getOffsetWidth(width);
  }, [getOffsetWidth]);
  const popoverActivator = /*#__PURE__*/React__default["default"].createElement(SecondaryAction.SecondaryAction, {
    disclosure: true,
    disabled: disabled,
    icon: icon,
    accessibilityLabel: accessibilityLabel,
    onClick: handleClick,
    getOffsetWidth: handleOffsetWidth
  }, title);
  return /*#__PURE__*/React__default["default"].createElement(Popover.Popover, {
    active: Boolean(active),
    activator: popoverActivator,
    preferredAlignment: "left",
    onClose: handleClose,
    hideOnPrint: true
  }, /*#__PURE__*/React__default["default"].createElement(ActionList.ActionList, {
    items: actions,
    sections: sections,
    onActionAnyItem: handleClose
  }), details && /*#__PURE__*/React__default["default"].createElement("div", {
    className: MenuGroup$1["default"].Details
  }, details));
}

exports.MenuGroup = MenuGroup;
