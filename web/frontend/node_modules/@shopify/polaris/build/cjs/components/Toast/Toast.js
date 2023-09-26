'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useDeepEffect = require('../../utilities/use-deep-effect.js');
var hooks = require('../../utilities/unique-id/hooks.js');
var hooks$1 = require('../../utilities/frame/hooks.js');

// that the interface defining the props is defined in this file, not imported
// from elsewhere. This silly workaround ensures that the Props Explorer table
// is generated correctly.

const Toast = /*#__PURE__*/React.memo(function Toast(props) {
  const id = hooks.useUniqueId('Toast');
  const {
    showToast,
    hideToast
  } = hooks$1.useFrame();
  useDeepEffect.useDeepEffect(() => {
    showToast({
      id,
      ...props
    });
    return () => {
      hideToast({
        id
      });
    };
  }, [props]);
  return null;
});

exports.Toast = Toast;
