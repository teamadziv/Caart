'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var css = require('../../utilities/css.js');
var focus = require('../../utilities/focus.js');
var useDisableInteraction = require('../../utilities/use-disable-interaction.js');
var Button$1 = require('./Button.scss.js');
var Spinner = require('../Spinner/Spinner.js');
var Popover = require('../Popover/Popover.js');
var ActionList = require('../ActionList/ActionList.js');
var UnstyledButton = require('../UnstyledButton/UnstyledButton.js');
var hooks = require('../../utilities/i18n/hooks.js');
var Icon = require('../Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DEFAULT_SIZE = 'medium';
function Button({
  id,
  children,
  url,
  disabled,
  external,
  download,
  submit,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  onPointerDown,
  icon,
  primary,
  outline,
  destructive,
  disclosure,
  plain,
  monochrome,
  removeUnderline,
  size = DEFAULT_SIZE,
  textAlign,
  fullWidth,
  connectedDisclosure,
  dataPrimaryLink
}) {
  const i18n = hooks.useI18n();
  const isDisabled = disabled || loading;
  const className = css.classNames(Button$1["default"].Button, primary && Button$1["default"].primary, outline && Button$1["default"].outline, destructive && Button$1["default"].destructive, isDisabled && Button$1["default"].disabled, loading && Button$1["default"].loading, plain && Button$1["default"].plain, pressed && !disabled && !url && Button$1["default"].pressed, monochrome && Button$1["default"].monochrome, size && size !== DEFAULT_SIZE && Button$1["default"][css.variationName('size', size)], textAlign && Button$1["default"][css.variationName('textAlign', textAlign)], fullWidth && Button$1["default"].fullWidth, icon && children == null && Button$1["default"].iconOnly, connectedDisclosure && Button$1["default"].connectedDisclosure, removeUnderline && Button$1["default"].removeUnderline);
  const disclosureMarkup = disclosure ? /*#__PURE__*/React__default["default"].createElement("span", {
    className: Button$1["default"].Icon
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: css.classNames(Button$1["default"].DisclosureIcon, loading && Button$1["default"].hidden)
  }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: loading ? 'placeholder' : getDisclosureIconSource(disclosure)
  }))) : null;
  const iconSource = isIconSource(icon) ? /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
    source: loading ? 'placeholder' : icon
  }) : icon;
  const iconMarkup = iconSource ? /*#__PURE__*/React__default["default"].createElement("span", {
    className: css.classNames(Button$1["default"].Icon, loading && Button$1["default"].hidden)
  }, iconSource) : null;
  const childMarkup = children ? /*#__PURE__*/React__default["default"].createElement("span", {
    className: css.classNames(Button$1["default"].Text, removeUnderline && Button$1["default"].removeUnderline) // Fixes Safari bug that doesn't re-render button text to correct color
    ,
    key: disabled ? 'text-disabled' : 'text'
  }, children) : null;
  const spinnerSVGMarkup = loading ? /*#__PURE__*/React__default["default"].createElement("span", {
    className: Button$1["default"].Spinner
  }, /*#__PURE__*/React__default["default"].createElement(Spinner.Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate('Polaris.Button.spinnerAccessibilityLabel')
  })) : null;
  const [disclosureActive, setDisclosureActive] = React.useState(false);
  const toggleDisclosureActive = React.useCallback(() => {
    setDisclosureActive(disclosureActive => !disclosureActive);
  }, []);
  const handleClick = useDisableInteraction.useDisableClick(disabled, toggleDisclosureActive);
  let connectedDisclosureMarkup;

  if (connectedDisclosure) {
    const connectedDisclosureClassName = css.classNames(Button$1["default"].Button, primary && Button$1["default"].primary, outline && Button$1["default"].outline, size && size !== DEFAULT_SIZE && Button$1["default"][css.variationName('size', size)], textAlign && Button$1["default"][css.variationName('textAlign', textAlign)], destructive && Button$1["default"].destructive, connectedDisclosure.disabled && Button$1["default"].disabled, Button$1["default"].iconOnly, Button$1["default"].ConnectedDisclosure, monochrome && Button$1["default"].monochrome);
    const defaultLabel = i18n.translate('Polaris.Button.connectedDisclosureAccessibilityLabel');
    const {
      disabled,
      accessibilityLabel: disclosureLabel = defaultLabel
    } = connectedDisclosure;
    const connectedDisclosureActivator = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      className: connectedDisclosureClassName,
      "aria-disabled": disabled,
      "aria-label": disclosureLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-checked": ariaChecked,
      onClick: handleClick,
      onMouseUp: focus.handleMouseUpByBlurring,
      tabIndex: disabled ? -1 : undefined
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Button$1["default"].Icon
    }, /*#__PURE__*/React__default["default"].createElement(Icon.Icon, {
      source: polarisIcons.CaretDownMinor
    })));
    connectedDisclosureMarkup = /*#__PURE__*/React__default["default"].createElement(Popover.Popover, {
      active: disclosureActive,
      onClose: toggleDisclosureActive,
      activator: connectedDisclosureActivator,
      preferredAlignment: "right"
    }, /*#__PURE__*/React__default["default"].createElement(ActionList.ActionList, {
      items: connectedDisclosure.actions,
      onActionAnyItem: toggleDisclosureActive
    }));
  }

  const commonProps = {
    id,
    className,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: focus.handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
    'data-primary-link': dataPrimaryLink
  };
  const linkProps = {
    url,
    external,
    download
  };
  const actionProps = {
    submit,
    disabled: isDisabled,
    loading,
    ariaControls,
    ariaExpanded,
    ariaChecked,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onPointerDown
  };
  const buttonMarkup = /*#__PURE__*/React__default["default"].createElement(UnstyledButton.UnstyledButton, Object.assign({}, commonProps, linkProps, actionProps), /*#__PURE__*/React__default["default"].createElement("span", {
    className: Button$1["default"].Content
  }, spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup));
  return connectedDisclosureMarkup ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: Button$1["default"].ConnectedDisclosureWrapper
  }, buttonMarkup, connectedDisclosureMarkup) : buttonMarkup;
}

function isIconSource(x) {
  return typeof x === 'string' || typeof x === 'object' && x.body || typeof x === 'function';
}

function getDisclosureIconSource(disclosure) {
  if (disclosure === 'select') {
    return polarisIcons.SelectMinor;
  }

  return disclosure === 'up' ? polarisIcons.CaretUpMinor : polarisIcons.CaretDownMinor;
}

exports.Button = Button;
