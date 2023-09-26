'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function variationName(name, value) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

exports.classNames = classNames;
exports.variationName = variationName;
