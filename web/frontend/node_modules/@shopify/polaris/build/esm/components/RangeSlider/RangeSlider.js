import React from 'react';
import { DualThumb } from './components/DualThumb/DualThumb.js';
import { SingleThumb } from './components/SingleThumb/SingleThumb.js';
import { useUniqueId } from '../../utilities/unique-id/hooks.js';

function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  value,
  ...rest
}) {
  const id = useUniqueId('RangeSlider');
  const sharedProps = {
    id,
    min,
    max,
    step,
    ...rest
  };
  return isDualThumb(value) ? /*#__PURE__*/React.createElement(DualThumb, Object.assign({
    value: value
  }, sharedProps)) : /*#__PURE__*/React.createElement(SingleThumb, Object.assign({
    value: value
  }, sharedProps));
}

function isDualThumb(value) {
  return Array.isArray(value);
}

export { RangeSlider };
