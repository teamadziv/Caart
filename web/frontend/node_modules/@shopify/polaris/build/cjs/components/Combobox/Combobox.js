'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Combobox$1 = require('./Combobox.scss.js');
var context = require('../../utilities/combobox/context.js');
var TextField = require('./components/TextField/TextField.js');
var Popover = require('../Popover/Popover.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Combobox({
  activator,
  allowMultiple,
  children,
  preferredPosition = 'below',
  willLoadMoreOptions,
  height,
  onScrolledToBottom,
  onClose
}) {
  const [popoverActive, setPopoverActive] = React.useState(false);
  const [activeOptionId, setActiveOptionId] = React.useState();
  const [textFieldLabelId, setTextFieldLabelId] = React.useState();
  const [listboxId, setListboxId] = React.useState();
  const [textFieldFocused, setTextFieldFocused] = React.useState(false);
  const shouldOpen = Boolean(!popoverActive && React.Children.count(children) > 0);
  const ref = React.useRef(null);
  const handleClose = React.useCallback(() => {
    setPopoverActive(false);
    onClose === null || onClose === void 0 ? void 0 : onClose();
    setActiveOptionId(undefined);
  }, [onClose]);
  const handleOpen = React.useCallback(() => {
    setPopoverActive(true);
    setActiveOptionId(undefined);
  }, []);
  const onOptionSelected = React.useCallback(() => {
    var _ref$current;

    if (!allowMultiple) {
      handleClose();
      setActiveOptionId(undefined);
      return;
    }

    (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.forceUpdatePosition();
  }, [allowMultiple, handleClose]);
  const handleFocus = React.useCallback(() => {
    if (shouldOpen) {
      handleOpen();
    }
  }, [shouldOpen, handleOpen]);
  const handleChange = React.useCallback(() => {
    if (shouldOpen) {
      handleOpen();
    }
  }, [shouldOpen, handleOpen]);
  const handleBlur = React.useCallback(() => {
    if (popoverActive) {
      handleClose();
    }
  }, [popoverActive, handleClose]);
  const textFieldContextValue = React.useMemo(() => ({
    activeOptionId,
    expanded: popoverActive,
    listboxId,
    setTextFieldFocused,
    setTextFieldLabelId,
    onTextFieldFocus: handleFocus,
    onTextFieldChange: handleChange,
    onTextFieldBlur: handleBlur
  }), [activeOptionId, popoverActive, listboxId, setTextFieldFocused, setTextFieldLabelId, handleFocus, handleChange, handleBlur]);
  const listboxOptionContextValue = React.useMemo(() => ({
    allowMultiple
  }), [allowMultiple]);
  const listboxContextValue = React.useMemo(() => ({
    listboxId,
    textFieldLabelId,
    textFieldFocused,
    willLoadMoreOptions,
    onOptionSelected,
    setActiveOptionId,
    setListboxId,
    onKeyToBottom: onScrolledToBottom
  }), [listboxId, textFieldLabelId, textFieldFocused, willLoadMoreOptions, onOptionSelected, setActiveOptionId, setListboxId, onScrolledToBottom]);
  return /*#__PURE__*/React__default["default"].createElement(Popover.Popover, {
    ref: ref,
    active: popoverActive,
    activator: /*#__PURE__*/React__default["default"].createElement(context.ComboboxTextFieldContext.Provider, {
      value: textFieldContextValue
    }, activator),
    autofocusTarget: "none",
    preventFocusOnClose: true,
    fullWidth: true,
    preferInputActivator: false,
    preferredPosition: preferredPosition,
    onClose: handleClose
  }, React.Children.count(children) > 0 ? /*#__PURE__*/React__default["default"].createElement(Popover.Popover.Pane, {
    onScrolledToBottom: onScrolledToBottom,
    height: height
  }, /*#__PURE__*/React__default["default"].createElement(context.ComboboxListboxContext.Provider, {
    value: listboxContextValue
  }, /*#__PURE__*/React__default["default"].createElement(context.ComboboxListboxOptionContext.Provider, {
    value: listboxOptionContextValue
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: Combobox$1["default"].Listbox
  }, children)))) : null);
}
Combobox.TextField = TextField.TextField;

exports.Combobox = Combobox;
