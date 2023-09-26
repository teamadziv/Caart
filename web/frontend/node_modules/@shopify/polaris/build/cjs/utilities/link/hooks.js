'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var context = require('./context.js');

function useLink() {
  return React.useContext(context.LinkContext);
}

exports.useLink = useLink;
