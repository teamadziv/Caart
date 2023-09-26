'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pluckDeep = require('./pluck-deep.js');

function getWidth(value = {}, defaultWidth = 0, key = 'width') {
  const width = typeof value === 'number' ? value : pluckDeep.pluckDeep(value, key);
  return width ? `${width}px` : `${defaultWidth}px`;
}

exports.getWidth = getWidth;
