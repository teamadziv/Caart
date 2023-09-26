'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function clamp(number, min, max) {
  if (number < min) return min;
  if (number > max) return max;
  return number;
}

exports.clamp = clamp;
