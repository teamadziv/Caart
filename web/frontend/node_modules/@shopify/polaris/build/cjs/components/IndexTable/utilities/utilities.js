'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getTableHeadingsBySelector(wrapperElement, selector) {
  return wrapperElement ? Array.from(wrapperElement.querySelectorAll(selector)) : [];
}

exports.getTableHeadingsBySelector = getTableHeadingsBySelector;
