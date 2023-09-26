'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var target = require('./target.js');

const useIsomorphicLayoutEffect = target.isServer ? React.useEffect : React.useLayoutEffect;

exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
