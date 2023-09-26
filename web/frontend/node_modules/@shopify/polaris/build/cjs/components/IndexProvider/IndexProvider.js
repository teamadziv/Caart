'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('../../utilities/index-provider/hooks.js');
var context = require('../../utilities/index-provider/context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IndexProvider({
  children,
  resourceName: passedResourceName,
  loading,
  onSelectionChange,
  selectedItemsCount = 0,
  itemCount,
  hasMoreItems,
  condensed,
  selectable: isSelectableIndex = true
}) {
  const {
    paginatedSelectAllText,
    bulkActionsLabel,
    bulkActionsAccessibilityLabel,
    resourceName,
    selectMode,
    bulkSelectState
  } = hooks.useBulkSelectionData({
    selectedItemsCount,
    itemCount,
    hasMoreItems,
    resourceName: passedResourceName
  });
  const handleSelectionChange = hooks.useHandleBulkSelection({
    onSelectionChange
  });
  const contextValue = React.useMemo(() => ({
    itemCount,
    selectMode: selectMode && isSelectableIndex,
    selectable: isSelectableIndex,
    resourceName,
    loading,
    paginatedSelectAllText,
    hasMoreItems,
    bulkActionsLabel,
    bulkActionsAccessibilityLabel,
    bulkSelectState,
    selectedItemsCount,
    condensed
  }), [itemCount, selectMode, isSelectableIndex, resourceName, loading, paginatedSelectAllText, hasMoreItems, bulkActionsLabel, bulkActionsAccessibilityLabel, bulkSelectState, selectedItemsCount, condensed]);
  const rowContextValue = React.useMemo(() => ({
    selectable: isSelectableIndex,
    selectMode: selectMode && isSelectableIndex,
    condensed
  }), [condensed, selectMode, isSelectableIndex]);
  return /*#__PURE__*/React__default["default"].createElement(context.IndexContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React__default["default"].createElement(context.IndexRowContext.Provider, {
    value: rowContextValue
  }, /*#__PURE__*/React__default["default"].createElement(context.IndexSelectionChangeContext.Provider, {
    value: handleSelectionChange
  }, children)));
}

exports.IndexProvider = IndexProvider;
