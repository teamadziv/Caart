import React from 'react';
import { classNames } from '../../../../utilities/css.js';
import { layer } from '../../../shared.js';
import styles from './TooltipOverlay.scss.js';
import { useI18n } from '../../../../utilities/i18n/hooks.js';
import { PositionedOverlay } from '../../../PositionedOverlay/PositionedOverlay.js';

function TooltipOverlay({
  active,
  activator,
  preferredPosition = 'below',
  preventInteraction,
  id,
  children,
  accessibilityLabel
}) {
  const i18n = useI18n();
  const markup = active ? /*#__PURE__*/React.createElement(PositionedOverlay, {
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
    const containerClassName = classNames(styles.TooltipOverlay, measuring && styles.measuring, positioning === 'above' && styles.positionedAbove);
    const contentStyles = measuring ? undefined : {
      minHeight: desiredHeight
    };
    return /*#__PURE__*/React.createElement("div", Object.assign({
      className: containerClassName
    }, layer.props), /*#__PURE__*/React.createElement("div", {
      id: id,
      role: "tooltip",
      className: styles.Content,
      style: contentStyles,
      "aria-label": accessibilityLabel ? i18n.translate('Polaris.TooltipOverlay.accessibilityLabel', {
        label: accessibilityLabel
      }) : undefined
    }, children));
  }
}

export { TooltipOverlay };
