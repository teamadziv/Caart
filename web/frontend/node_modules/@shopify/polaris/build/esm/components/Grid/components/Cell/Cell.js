import React from 'react';
import { classNames } from '../../../../utilities/css.js';
import styles from './Cell.scss.js';

function Cell({
  area: gridArea,
  column,
  columnSpan,
  row,
  children
}) {
  const className = classNames(styles.Cell, (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.xs) && styles[`Cell-${columnSpan.xs}-column-xs`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.sm) && styles[`Cell-${columnSpan.sm}-column-sm`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.md) && styles[`Cell-${columnSpan.md}-column-md`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.lg) && styles[`Cell-${columnSpan.lg}-column-lg`], (columnSpan === null || columnSpan === void 0 ? void 0 : columnSpan.xl) && styles[`Cell-${columnSpan.xl}-column-xl`]);
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
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, children);
}

export { Cell };
