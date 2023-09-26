'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var context = require('../../context.js');
var hooks = require('../../../../utilities/unique-id/hooks.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ScrollTo() {
  const anchorNode = React.useRef(null);
  const scrollToPosition = React.useContext(context.ScrollableContext);
  React.useEffect(() => {
    if (!scrollToPosition || !anchorNode.current) {
      return;
    }

    scrollToPosition(anchorNode.current.offsetTop);
  }, [scrollToPosition]);
  const id = hooks.useUniqueId(`ScrollTo`); // eslint-disable-next-line jsx-a11y/anchor-is-valid

  return /*#__PURE__*/React__default["default"].createElement("a", {
    id: id,
    ref: anchorNode
  });
}

exports.ScrollTo = ScrollTo;
