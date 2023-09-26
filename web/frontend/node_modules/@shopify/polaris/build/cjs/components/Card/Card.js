'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var useToggle = require('../../utilities/use-toggle.js');
var withinContentContext = require('../../utilities/within-content-context.js');
var Card$1 = require('./Card.scss.js');
var utils = require('../Button/utils.js');
var Button = require('../Button/Button.js');
var Header = require('./components/Header/Header.js');
var Section = require('./components/Section/Section.js');
var Subsection = require('./components/Subsection/Subsection.js');
var hooks = require('../../utilities/i18n/hooks.js');
var Popover = require('../Popover/Popover.js');
var ActionList = require('../ActionList/ActionList.js');
var ButtonGroup = require('../ButtonGroup/ButtonGroup.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// TypeScript can't generate types that correctly infer the typing of
// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.
const Card = function Card({
  children,
  hideOnPrint,
  title,
  subdued,
  sectioned,
  actions,
  primaryFooterAction,
  secondaryFooterActions,
  secondaryFooterActionsDisclosureText,
  footerActionAlignment = 'right'
}) {
  const i18n = hooks.useI18n();
  const {
    value: secondaryActionsPopoverOpen,
    toggle: toggleSecondaryActionsPopoverOpen
  } = useToggle.useToggle(false);
  const className = css.classNames(Card$1["default"].Card, subdued && Card$1["default"].subdued, hideOnPrint && Card$1["default"].hideOnPrint);
  const headerMarkup = title || actions ? /*#__PURE__*/React__default["default"].createElement(Header.Header, {
    actions: actions,
    title: title
  }) : null;
  const content = sectioned ? /*#__PURE__*/React__default["default"].createElement(Section.Section, null, children) : children;
  const primaryFooterActionMarkup = primaryFooterAction ? utils.buttonFrom(primaryFooterAction, {
    primary: true
  }) : null;
  let secondaryFooterActionsMarkup = null;

  if (secondaryFooterActions && secondaryFooterActions.length) {
    if (secondaryFooterActions.length === 1) {
      secondaryFooterActionsMarkup = utils.buttonFrom(secondaryFooterActions[0]);
    } else {
      secondaryFooterActionsMarkup = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Popover.Popover, {
        active: secondaryActionsPopoverOpen,
        activator: /*#__PURE__*/React__default["default"].createElement(Button.Button, {
          disclosure: true,
          onClick: toggleSecondaryActionsPopoverOpen
        }, secondaryFooterActionsDisclosureText || i18n.translate('Polaris.Common.more')),
        onClose: toggleSecondaryActionsPopoverOpen
      }, /*#__PURE__*/React__default["default"].createElement(ActionList.ActionList, {
        items: secondaryFooterActions
      })));
    }
  }

  const footerMarkup = primaryFooterActionMarkup || secondaryFooterActionsMarkup ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: css.classNames(Card$1["default"].Footer, footerActionAlignment === 'left' && Card$1["default"].LeftJustified)
  }, footerActionAlignment === 'right' ? /*#__PURE__*/React__default["default"].createElement(ButtonGroup.ButtonGroup, null, secondaryFooterActionsMarkup, primaryFooterActionMarkup) : /*#__PURE__*/React__default["default"].createElement(ButtonGroup.ButtonGroup, null, primaryFooterActionMarkup, secondaryFooterActionsMarkup)) : null;
  return /*#__PURE__*/React__default["default"].createElement(withinContentContext.WithinContentContext.Provider, {
    value: true
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, headerMarkup, content, footerMarkup));
};
Card.Header = Header.Header;
Card.Section = Section.Section;
Card.Subsection = Subsection.Subsection;

exports.Card = Card;
