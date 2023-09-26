'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var shared = require('../shared.js');
var hooks = require('../../utilities/link/hooks.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// that the interface defining the props is defined in this file, not imported
// from elsewhere. This silly workaround ensures that the Props Explorer table
// is generated correctly.

// Wrapping forwardRef in a memo gets a name set since
// https://github.com/facebook/react/issues/16722
// but eslint-plugin-react doesn't know that just yet
// eslint-disable-next-line react/display-name
const UnstyledLink = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function UnstyledLink(props, _ref) {
  const LinkComponent = hooks.useLink();

  if (LinkComponent) {
    return /*#__PURE__*/React__default["default"].createElement(LinkComponent, Object.assign({}, shared.unstyled.props, props));
  }

  const {
    external,
    url,
    ...rest
  } = props;
  const target = external ? '_blank' : undefined;
  const rel = external ? 'noopener noreferrer' : undefined;
  return /*#__PURE__*/React__default["default"].createElement("a", Object.assign({
    target: target
  }, rest, {
    href: url,
    rel: rel
  }, shared.unstyled.props));
}));

exports.UnstyledLink = UnstyledLink;
