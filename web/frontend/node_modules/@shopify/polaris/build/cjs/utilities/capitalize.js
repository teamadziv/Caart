'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function capitalize(word = '') {
  const wordLower = word.toLowerCase();
  return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
}

exports.capitalize = capitalize;
