import React from 'react';
import { CaretUpMinor, CaretDownMinor } from '@shopify/polaris-icons';
import styles from '../../TextField.scss.js';
import { Icon } from '../../../Icon/Icon.js';

const Spinner = /*#__PURE__*/React.forwardRef(function Spinner({
  onChange,
  onClick,
  onMouseDown,
  onMouseUp
}, ref) {
  function handleStep(step) {
    return () => onChange(step);
  }

  function handleMouseDown(onChange) {
    return event => {
      if (event.button !== 0) return;
      onMouseDown(onChange);
    };
  }

  return /*#__PURE__*/React.createElement("div", {
    className: styles.Spinner,
    onClick: onClick,
    "aria-hidden": true,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    role: "button",
    className: styles.Segment,
    tabIndex: -1,
    onClick: handleStep(1),
    onMouseDown: handleMouseDown(handleStep(1)),
    onMouseUp: onMouseUp
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.SpinnerIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: CaretUpMinor
  }))), /*#__PURE__*/React.createElement("div", {
    role: "button",
    className: styles.Segment,
    tabIndex: -1,
    onClick: handleStep(-1),
    onMouseDown: handleMouseDown(handleStep(-1)),
    onMouseUp: onMouseUp
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.SpinnerIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: CaretDownMinor
  }))));
});

export { Spinner };
