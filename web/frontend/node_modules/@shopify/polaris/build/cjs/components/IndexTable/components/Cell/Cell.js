'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var IndexTable = require('../../IndexTable.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Cell = /*#__PURE__*/React.memo(function Cell({
  children,
  className,
  flush
}) {
  const cellClassName = css.classNames(className, IndexTable["default"].TableCell, flush && IndexTable["default"]['TableCell-flush']);
  return /*#__PURE__*/React__default["default"].createElement("td", {
    className: cellClassName
  }, children);
});

exports.Cell = Cell;
