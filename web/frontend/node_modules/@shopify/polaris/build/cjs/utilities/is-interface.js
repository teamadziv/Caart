'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function isInterface(x) {
  return ! /*#__PURE__*/React.isValidElement(x) && x !== undefined;
}

exports.isInterface = isInterface;
