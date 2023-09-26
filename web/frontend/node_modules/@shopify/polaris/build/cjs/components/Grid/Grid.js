'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Grid$1 = require('./Grid.scss.js');
var Cell = require('./components/Cell/Cell.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/** **Experimental!**
 * This component is in alpha. Use with caution.
 * 6 column default for xs, sm, and md breakpoints.
 * 12 columns for lg, and xl.
 */
const Grid = function Grid({
  gap,
  areas,
  children,
  columns
}) {
  const style = {
    '--pc-grid-gap-xs': gap === null || gap === void 0 ? void 0 : gap.xs,
    '--pc-grid-gap-sm': gap === null || gap === void 0 ? void 0 : gap.sm,
    '--pc-grid-gap-md': gap === null || gap === void 0 ? void 0 : gap.md,
    '--pc-grid-gap-lg': gap === null || gap === void 0 ? void 0 : gap.lg,
    '--pc-grid-gap-xl': gap === null || gap === void 0 ? void 0 : gap.xl,
    '--pc-grid-columns-xs': columns === null || columns === void 0 ? void 0 : columns.xs,
    '--pc-grid-columns-sm': columns === null || columns === void 0 ? void 0 : columns.sm,
    '--pc-grid-columns-md': columns === null || columns === void 0 ? void 0 : columns.md,
    '--pc-grid-columns-lg': columns === null || columns === void 0 ? void 0 : columns.lg,
    '--pc-grid-columns-xl': columns === null || columns === void 0 ? void 0 : columns.xl,
    '--pc-grid-areas-xs': formatAreas(areas === null || areas === void 0 ? void 0 : areas.xs),
    '--pc-grid-areas-sm': formatAreas(areas === null || areas === void 0 ? void 0 : areas.sm),
    '--pc-grid-areas-md': formatAreas(areas === null || areas === void 0 ? void 0 : areas.md),
    '--pc-grid-areas-lg': formatAreas(areas === null || areas === void 0 ? void 0 : areas.lg),
    '--pc-grid-areas-xl': formatAreas(areas === null || areas === void 0 ? void 0 : areas.xl)
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Grid$1["default"].Grid,
    style: style
  }, children);
};
function formatAreas(areas) {
  if (!areas) return;
  return `'${areas === null || areas === void 0 ? void 0 : areas.join(`' '`)}'`;
}
Grid.Cell = Cell.Cell;

exports.Grid = Grid;
exports.formatAreas = formatAreas;
