'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var isEqual = require('react-fast-compare');
var css = require('../../utilities/css.js');
var ResourceItem$1 = require('./ResourceItem.scss.js');
var types = require('../../utilities/resource-list/types.js');
var context = require('../../utilities/resource-list/context.js');
var hooks = require('../../utilities/i18n/hooks.js');
var Checkbox = require('../Checkbox/Checkbox.js');
var ButtonGroup = require('../ButtonGroup/ButtonGroup.js');
var utils = require('../Button/utils.js');
var Popover = require('../Popover/Popover.js');
var Button = require('../Button/Button.js');
var ActionList = require('../ActionList/ActionList.js');
var UnstyledLink = require('../UnstyledLink/UnstyledLink.js');
var uniqueIdFactory = require('../../utilities/unique-id/unique-id-factory.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

const getUniqueCheckboxID = uniqueIdFactory.globalIdGeneratorFactory('ResourceListItemCheckbox');
const getUniqueOverlayID = uniqueIdFactory.globalIdGeneratorFactory('ResourceListItemOverlay');

class BaseResourceItem extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      actionsMenuVisible: false,
      focused: false,
      focusedInner: false,
      selected: isSelected(this.props.id, this.props.context.selectedItems)
    };
    this.node = null;
    this.checkboxId = getUniqueCheckboxID();
    this.overlayId = getUniqueOverlayID();
    this.buttonOverlay = /*#__PURE__*/React.createRef();

    this.setNode = node => {
      this.node = node;
    };

    this.handleFocus = event => {
      if (event.target === this.buttonOverlay.current || this.node && event.target === this.node.querySelector(`#${this.overlayId}`)) {
        this.setState({
          focused: true,
          focusedInner: false
        });
      } else if (this.node && this.node.contains(event.target)) {
        this.setState({
          focused: true,
          focusedInner: true
        });
      }
    };

    this.handleBlur = ({
      relatedTarget
    }) => {
      if (this.node && relatedTarget instanceof Element && this.node.contains(relatedTarget)) {
        return;
      }

      this.setState({
        focused: false,
        focusedInner: false
      });
    };

    this.handleMouseOut = () => {
      this.state.focused && this.setState({
        focused: false,
        focusedInner: false
      });
    };

    this.handleLargerSelectionArea = event => {
      stopPropagation(event);
      this.handleSelection(!this.state.selected, event.nativeEvent.shiftKey);
    };

    this.handleSelection = (value, shiftKey) => {
      const {
        id,
        sortOrder,
        context: {
          onSelectionChange
        }
      } = this.props;

      if (id == null || onSelectionChange == null) {
        return;
      }

      this.setState({
        focused: value,
        focusedInner: value
      });
      onSelectionChange(value, id, sortOrder, shiftKey);
    };

    this.handleClick = event => {
      stopPropagation(event);
      const {
        id,
        onClick,
        url,
        context: {
          selectMode
        }
      } = this.props;
      const {
        ctrlKey,
        metaKey
      } = event.nativeEvent;
      const anchor = this.node && this.node.querySelector('a');

      if (selectMode) {
        this.handleLargerSelectionArea(event);
        return;
      }

      if (anchor === event.target) {
        return;
      }

      if (onClick) {
        onClick(id);
      }

      if (url && (ctrlKey || metaKey)) {
        window.open(url, '_blank');
        return;
      }

      if (url && anchor) {
        anchor.click();
      }
    };

    this.handleKeyUp = event => {
      const {
        onClick = noop,
        context: {
          selectMode
        }
      } = this.props;
      const {
        key
      } = event;

      if (key === 'Enter' && this.props.url && !selectMode) {
        onClick();
      }
    };

    this.handleActionsClick = () => {
      this.setState(({
        actionsMenuVisible
      }) => ({
        actionsMenuVisible: !actionsMenuVisible
      }));
    };

    this.handleCloseRequest = () => {
      this.setState({
        actionsMenuVisible: false
      });
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const selected = isSelected(nextProps.id, nextProps.context.selectedItems);

    if (prevState.selected === selected) {
      return null;
    }

    return {
      selected
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      children: nextChildren,
      context: {
        selectedItems: nextSelectedItems,
        ...restNextContext
      },
      ...restNextProps
    } = nextProps;
    const {
      children,
      context: {
        selectedItems,
        ...restContext
      },
      ...restProps
    } = this.props;
    const nextSelectMode = nextProps.context.selectMode;
    return !isEqual__default["default"](this.state, nextState) || this.props.context.selectMode !== nextSelectMode || !nextProps.context.selectMode && (!isEqual__default["default"](restProps, restNextProps) || !isEqual__default["default"](restContext, restNextContext));
  }

  render() {
    const {
      children,
      url,
      external,
      media,
      shortcutActions,
      ariaControls,
      ariaExpanded,
      persistActions = false,
      accessibilityLabel,
      name,
      context: {
        selectable,
        selectMode,
        loading,
        resourceName
      },
      i18n,
      verticalAlignment,
      dataHref
    } = this.props;
    const {
      actionsMenuVisible,
      focused,
      focusedInner,
      selected
    } = this.state;
    let ownedMarkup = null;
    let handleMarkup = null;
    const mediaMarkup = media ? /*#__PURE__*/React__default["default"].createElement("div", {
      className: ResourceItem$1["default"].Media
    }, media) : null;

    if (selectable) {
      const checkboxAccessibilityLabel = name || accessibilityLabel || i18n.translate('Polaris.Common.checkbox');
      handleMarkup = /*#__PURE__*/React__default["default"].createElement("div", {
        className: ResourceItem$1["default"].Handle,
        onClick: this.handleLargerSelectionArea
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        onClick: stopPropagation,
        className: ResourceItem$1["default"].CheckboxWrapper
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        onChange: this.handleLargerSelectionArea
      }, /*#__PURE__*/React__default["default"].createElement(Checkbox.Checkbox, {
        id: this.checkboxId,
        label: checkboxAccessibilityLabel,
        labelHidden: true,
        checked: selected,
        disabled: loading
      }))));
    }

    if (media || selectable) {
      ownedMarkup = /*#__PURE__*/React__default["default"].createElement("div", {
        className: css.classNames(ResourceItem$1["default"].Owned, !mediaMarkup && ResourceItem$1["default"].OwnedNoMedia)
      }, handleMarkup, mediaMarkup);
    }

    const className = css.classNames(ResourceItem$1["default"].ResourceItem, focused && ResourceItem$1["default"].focused, selectable && ResourceItem$1["default"].selectable, selected && ResourceItem$1["default"].selected, selectMode && ResourceItem$1["default"].selectMode, persistActions && ResourceItem$1["default"].persistActions, focusedInner && ResourceItem$1["default"].focusedInner);
    const listItemClassName = css.classNames(ResourceItem$1["default"].ListItem, focused && !focusedInner && ResourceItem$1["default"].focused);
    let actionsMarkup = null;
    let disclosureMarkup = null;

    if (shortcutActions && !loading) {
      if (persistActions) {
        actionsMarkup = /*#__PURE__*/React__default["default"].createElement("div", {
          className: ResourceItem$1["default"].Actions,
          onClick: stopPropagation
        }, /*#__PURE__*/React__default["default"].createElement(ButtonGroup.ButtonGroup, null, utils.buttonsFrom(shortcutActions, {
          plain: true
        })));
        const disclosureAccessibilityLabel = name ? i18n.translate('Polaris.ResourceList.Item.actionsDropdownLabel', {
          accessibilityLabel: name
        }) : i18n.translate('Polaris.ResourceList.Item.actionsDropdown');
        disclosureMarkup = /*#__PURE__*/React__default["default"].createElement("div", {
          className: ResourceItem$1["default"].Disclosure,
          onClick: stopPropagation
        }, /*#__PURE__*/React__default["default"].createElement(Popover.Popover, {
          activator: /*#__PURE__*/React__default["default"].createElement(Button.Button, {
            accessibilityLabel: disclosureAccessibilityLabel,
            onClick: this.handleActionsClick,
            plain: true,
            icon: polarisIcons.HorizontalDotsMinor
          }),
          onClose: this.handleCloseRequest,
          active: actionsMenuVisible
        }, /*#__PURE__*/React__default["default"].createElement(ActionList.ActionList, {
          items: shortcutActions
        })));
      } else {
        actionsMarkup = /*#__PURE__*/React__default["default"].createElement("div", {
          className: ResourceItem$1["default"].Actions,
          onClick: stopPropagation
        }, /*#__PURE__*/React__default["default"].createElement(ButtonGroup.ButtonGroup, {
          segmented: true
        }, utils.buttonsFrom(shortcutActions, {
          size: 'slim'
        })));
      }
    }

    const content = children ? /*#__PURE__*/React__default["default"].createElement("div", {
      className: ResourceItem$1["default"].Content
    }, children) : null;
    const containerClassName = css.classNames(ResourceItem$1["default"].Container, verticalAlignment && ResourceItem$1["default"][css.variationName('alignment', verticalAlignment)]);
    const containerMarkup = /*#__PURE__*/React__default["default"].createElement("div", {
      className: containerClassName,
      id: this.props.id
    }, ownedMarkup, content, actionsMarkup, disclosureMarkup);
    const tabIndex = loading ? -1 : 0;
    const ariaLabel = accessibilityLabel || i18n.translate('Polaris.ResourceList.Item.viewItem', {
      itemName: name || resourceName && resourceName.singular || ''
    });
    const accessibleMarkup = url ? /*#__PURE__*/React__default["default"].createElement(UnstyledLink.UnstyledLink, {
      "aria-describedby": this.props.id,
      "aria-label": ariaLabel,
      className: ResourceItem$1["default"].Link,
      url: url,
      external: external,
      tabIndex: tabIndex,
      id: this.overlayId
    }) : /*#__PURE__*/React__default["default"].createElement("button", {
      className: ResourceItem$1["default"].Button,
      "aria-label": ariaLabel,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      onClick: this.handleClick,
      tabIndex: tabIndex,
      ref: this.buttonOverlay
    });
    return /*#__PURE__*/React__default["default"].createElement("li", {
      className: listItemClassName,
      "data-href": dataHref
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: ResourceItem$1["default"].ItemWrapper
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      ref: this.setNode,
      className: className,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyUp: this.handleKeyUp,
      onMouseOut: this.handleMouseOut,
      "data-href": url
    }, accessibleMarkup, containerMarkup)));
  }

}

function noop() {}

function stopPropagation(event) {
  event.stopPropagation();
}

function isSelected(id, selectedItems) {
  return Boolean(selectedItems && (Array.isArray(selectedItems) && selectedItems.includes(id) || selectedItems === types.SELECT_ALL_ITEMS));
}

function ResourceItem(props) {
  return /*#__PURE__*/React__default["default"].createElement(BaseResourceItem, Object.assign({}, props, {
    context: React.useContext(context.ResourceListContext),
    i18n: hooks.useI18n()
  }));
}

exports.ResourceItem = ResourceItem;
