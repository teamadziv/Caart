'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var focus = require('../../utilities/focus.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Focus = /*#__PURE__*/React.memo(function Focus({
  children,
  disabled,
  root
}) {
  React.useEffect(() => {
    if (disabled || !root) {
      return;
    }

    const node = isRef(root) ? root.current : root;

    if (!node || node.querySelector('[autofocus]')) {
      return;
    }

    focus.focusFirstFocusableNode(node, false);
  }, [disabled, root]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children);
});

function isRef(ref) {
  return ref.current !== undefined;
}

exports.Focus = Focus;
