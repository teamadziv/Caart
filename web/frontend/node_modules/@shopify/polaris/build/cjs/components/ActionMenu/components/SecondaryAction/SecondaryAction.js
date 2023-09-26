'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var SecondaryAction$1 = require('./SecondaryAction.scss.js');
var Tooltip = require('../../../Tooltip/Tooltip.js');
var Button = require('../../../Button/Button.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SecondaryAction({
  children,
  destructive,
  helpText,
  onAction,
  getOffsetWidth,
  ...rest
}) {
  const secondaryActionsRef = React.useRef(null);
  React.useEffect(() => {
    var _secondaryActionsRef$;

    if (!getOffsetWidth || !secondaryActionsRef.current) return;
    getOffsetWidth((_secondaryActionsRef$ = secondaryActionsRef.current) === null || _secondaryActionsRef$ === void 0 ? void 0 : _secondaryActionsRef$.offsetWidth);
  }, [getOffsetWidth]);
  const buttonMarkup = /*#__PURE__*/React__default["default"].createElement(Button.Button, Object.assign({
    onClick: onAction
  }, rest), children);
  const actionMarkup = helpText ? /*#__PURE__*/React__default["default"].createElement(Tooltip.Tooltip, {
    content: helpText
  }, buttonMarkup) : buttonMarkup;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: css.classNames(SecondaryAction$1["default"].SecondaryAction, destructive && SecondaryAction$1["default"].destructive),
    ref: secondaryActionsRef
  }, actionMarkup);
}

exports.SecondaryAction = SecondaryAction;
