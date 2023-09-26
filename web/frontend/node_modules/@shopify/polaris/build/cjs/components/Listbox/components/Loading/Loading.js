'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Loading$1 = require('./Loading.scss.js');
var hooks = require('../../../../utilities/listbox/hooks.js');
var Spinner = require('../../../Spinner/Spinner.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Loading = /*#__PURE__*/React.memo(function LoadingOption({
  children,
  accessibilityLabel: label
}) {
  const {
    setLoading
  } = hooks.useListbox();
  React.useEffect(() => {
    setLoading(label);
    return () => {
      setLoading(undefined);
    };
  }, [label, setLoading]);
  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: Loading$1["default"].ListItem,
    role: "presentation"
  }, children ? children : /*#__PURE__*/React__default["default"].createElement("div", {
    className: Loading$1["default"].Loading
  }, /*#__PURE__*/React__default["default"].createElement(Spinner.Spinner, {
    size: "small",
    accessibilityLabel: label
  })));
});

exports.Loading = Loading;
