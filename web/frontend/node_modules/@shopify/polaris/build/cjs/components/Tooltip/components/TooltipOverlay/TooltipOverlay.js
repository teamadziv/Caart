'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var shared = require('../../../shared.js');
var TooltipOverlay$1 = require('./TooltipOverlay.scss.js');
var hooks = require('../../../../utilities/i18n/hooks.js');
var PositionedOverlay = require('../../../PositionedOverlay/PositionedOverlay.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TooltipOverlay({
  active,
  activator,
  preferredPosition = 'below',
  preventInteraction,
  id,
  children,
  accessibilityLabel
}) {
  const i18n = hooks.useI18n();
  const markup = active ? /*#__PURE__*/React__default["default"].createElement(PositionedOverlay.PositionedOverlay, {
    active: active,
    activator: activator,
    preferredPosition: preferredPosition,
    preventInteraction: preventInteraction,
    render: renderTooltip
  }) : null;
  return markup;

  function renderTooltip(overlayDetails) {
    const {
      measuring,
      desiredHeight,
      positioning
    } = overlayDetails;
    const containerClassName = css.classNames(TooltipOverlay$1["default"].TooltipOverlay, measuring && TooltipOverlay$1["default"].measuring, positioning === 'above' && TooltipOverlay$1["default"].positionedAbove);
    const contentStyles = measuring ? undefined : {
      minHeight: desiredHeight
    };
    return /*#__PURE__*/React__default["default"].createElement("div", Object.assign({
      className: containerClassName
    }, shared.layer.props), /*#__PURE__*/React__default["default"].createElement("div", {
      id: id,
      role: "tooltip",
      className: TooltipOverlay$1["default"].Content,
      style: contentStyles,
      "aria-label": accessibilityLabel ? i18n.translate('Polaris.TooltipOverlay.accessibilityLabel', {
        label: accessibilityLabel
      }) : undefined
    }, children));
  }
}

exports.TooltipOverlay = TooltipOverlay;
