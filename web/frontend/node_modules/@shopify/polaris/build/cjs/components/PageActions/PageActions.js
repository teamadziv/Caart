'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var isInterface = require('../../utilities/is-interface.js');
var isReactElement = require('../../utilities/is-react-element.js');
var PageActions$1 = require('./PageActions.scss.js');
var utils = require('../Button/utils.js');
var ButtonGroup = require('../ButtonGroup/ButtonGroup.js');
var Stack = require('../Stack/Stack.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function PageActions({
  primaryAction,
  secondaryActions
}) {
  let primaryActionMarkup = null;

  if (isReactElement.isReactElement(primaryAction)) {
    primaryActionMarkup = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, primaryAction);
  } else if (primaryAction) {
    primaryActionMarkup = utils.buttonsFrom(primaryAction, {
      primary: true
    });
  }

  let secondaryActionsMarkup = null;

  if (isInterface.isInterface(secondaryActions) && secondaryActions.length > 0) {
    secondaryActionsMarkup = /*#__PURE__*/React__default["default"].createElement(ButtonGroup.ButtonGroup, null, utils.buttonsFrom(secondaryActions));
  } else if (isReactElement.isReactElement(secondaryActions)) {
    secondaryActionsMarkup = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, secondaryActions);
  }

  const distribution = secondaryActionsMarkup ? 'equalSpacing' : 'trailing';
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: PageActions$1["default"].PageActions
  }, /*#__PURE__*/React__default["default"].createElement(Stack.Stack, {
    distribution: distribution,
    spacing: "tight"
  }, secondaryActionsMarkup, primaryActionMarkup));
}

exports.PageActions = PageActions;
