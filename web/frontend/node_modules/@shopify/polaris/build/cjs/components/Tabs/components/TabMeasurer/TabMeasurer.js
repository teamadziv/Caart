'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../../../utilities/css.js');
var useComponentDidMount = require('../../../../utilities/use-component-did-mount.js');
var Tabs = require('../../Tabs.scss.js');
var Tab = require('../Tab/Tab.js');
var EventListener = require('../../../EventListener/EventListener.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TabMeasurer = /*#__PURE__*/React.memo(function TabMeasurer({
  selected,
  tabs,
  activator,
  tabToFocus,
  siblingTabHasFocus,
  handleMeasurement: handleMeasurementProp
}) {
  const containerNode = React.useRef(null);
  const animationFrame = React.useRef(null);
  const handleMeasurement = React.useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(() => {
      if (!containerNode.current) {
        return;
      }

      const containerWidth = containerNode.current.offsetWidth;
      const hiddenTabNodes = containerNode.current.children;
      const hiddenTabNodesArray = Array.from(hiddenTabNodes);
      const hiddenTabWidths = hiddenTabNodesArray.map(node => {
        return Math.ceil(node.getBoundingClientRect().width);
      });
      const disclosureWidth = hiddenTabWidths.pop() || 0;
      handleMeasurementProp({
        containerWidth,
        disclosureWidth,
        hiddenTabWidths
      });
    });
  }, [handleMeasurementProp]);
  React.useEffect(() => {
    handleMeasurement();
  }, [handleMeasurement, tabs]);
  useComponentDidMount.useComponentDidMount(() => {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(handleMeasurement, 0);
    }
  });
  const tabsMarkup = tabs.map((tab, index) => {
    return /*#__PURE__*/React__default["default"].createElement(Tab.Tab, {
      measuring: true,
      key: `${index}${tab.id}Hidden`,
      id: `${tab.id}Measurer`,
      siblingTabHasFocus: siblingTabHasFocus,
      focused: index === tabToFocus,
      selected: index === selected,
      onClick: noop,
      url: tab.url
    }, tab.content);
  });
  const classname = css.classNames(Tabs["default"].Tabs, Tabs["default"].TabMeasurer);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classname,
    ref: containerNode
  }, /*#__PURE__*/React__default["default"].createElement(EventListener.EventListener, {
    event: "resize",
    handler: handleMeasurement
  }), tabsMarkup, activator);
});

function noop() {}

exports.TabMeasurer = TabMeasurer;
