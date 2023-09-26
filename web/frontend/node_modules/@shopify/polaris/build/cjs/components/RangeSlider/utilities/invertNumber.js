'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function invertNumber(number) {
  if (Math.sign(number) === 1) {
    return -Math.abs(number);
  } else if (Math.sign(number) === -1) {
    return Math.abs(number);
  } else {
    return 0;
  }
}

exports.invertNumber = invertNumber;
