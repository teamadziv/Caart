'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var Cell$1 = require('./Cell.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Cell({
  area: gridArea,
  column,
  columnSpan,
  row,
  children
}) {
  const className = css.classNames(Cell$1["default"].Cell, (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.xs) && Cell$1["default"][`Cell-${columnSpan.xs}-column-xs`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.sm) && Cell$1["default"][`Cell-${columnSpan.sm}-column-sm`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.md) && Cell$1["default"][`Cell-${columnSpan.md}-column-md`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.lg) && Cell$1["default"][`Cell-${columnSpan.lg}-column-lg`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.xl) && Cell$1["default"][`Cell-${columnSpan.xl}-column-xl`]);
  const style = {
    gridArea,
    '--pc-column-xs': column === null || column === void 0 ? void 0 : column.xs,
    '--pc-column-sm': column === null || column === void 0 ? void 0 : column.sm,
    '--pc-column-md': column === null || column === void 0 ? void 0 : column.md,
    '--pc-column-lg': column === null || column === void 0 ? void 0 : column.lg,
    '--pc-column-xl': column === null || column === void 0 ? void 0 : column.xl,
    '--pc-row-xs': row === null || row === void 0 ? void 0 : row.xs,
    '--pc-row-sm': row === null || row === void 0 ? void 0 : row.sm,
    '--pc-row-md': row === null || row === void 0 ? void 0 : row.md,
    '--pc-row-lg': row === null || row === void 0 ? void 0 : row.lg,
    '--pc-row-xl': row === null || row === void 0 ? void 0 : row.xl
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    style: style
  }, children);
}

exports.Cell = Cell;
