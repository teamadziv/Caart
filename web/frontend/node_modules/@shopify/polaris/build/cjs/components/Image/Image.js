'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Image({
  alt,
  sourceSet,
  source,
  crossOrigin,
  onLoad,
  className,
  ...rest
}) {
  const finalSourceSet = sourceSet ? sourceSet.map(({
    source: subSource,
    descriptor
  }) => `${subSource} ${descriptor}`).join(',') : null;
  const handleLoad = React.useCallback(() => {
    if (onLoad) onLoad();
  }, [onLoad]);
  return /*#__PURE__*/React__default["default"].createElement("img", Object.assign({
    alt: alt,
    src: source,
    crossOrigin: crossOrigin,
    className: className,
    onLoad: handleLoad
  }, finalSourceSet ? {
    srcSet: finalSourceSet
  } : {}, rest));
}

exports.Image = Image;
