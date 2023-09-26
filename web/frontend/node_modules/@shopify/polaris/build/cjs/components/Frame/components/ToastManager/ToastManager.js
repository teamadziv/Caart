'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var css = require('../../../../utilities/css.js');
var useDeepEffect = require('../../../../utilities/use-deep-effect.js');
var useDeepCallback = require('../../../../utilities/use-deep-callback.js');
var ToastManager$1 = require('./ToastManager.scss.js');
var Toast = require('../Toast/Toast.js');
var Portal = require('../../../Portal/Portal.js');
var EventListener = require('../../../EventListener/EventListener.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ToastManager = /*#__PURE__*/React.memo(function ToastManager({
  toastMessages
}) {
  const toastNodes = [];
  const updateToasts = useDeepCallback.useDeepCallback(() => {
    let targetInPos = 0;
    toastMessages.forEach((_, index) => {
      const currentToast = toastNodes[index];
      if (!currentToast.current) return;
      targetInPos += currentToast.current.clientHeight;
      currentToast.current.style.setProperty('--pc-toast-manager-translate-y-in', `-${targetInPos}px`);
      currentToast.current.style.setProperty('--pc-toast-manager-translate-y-out', `${-targetInPos + 150}px`);
    });
  }, [toastMessages, toastNodes]);
  useDeepEffect.useDeepEffect(() => {
    updateToasts();
  }, [toastMessages]);
  const toastsMarkup = toastMessages.map((toast, index) => {
    const toastNode = /*#__PURE__*/React.createRef();
    toastNodes[index] = toastNode;
    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.CSSTransition, {
      nodeRef: toastNodes[index],
      key: toast.id,
      timeout: {
        enter: 0,
        exit: 400
      },
      classNames: toastClasses
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      ref: toastNode
    }, /*#__PURE__*/React__default["default"].createElement(Toast.Toast, toast)));
  });
  return /*#__PURE__*/React__default["default"].createElement(Portal.Portal, null, /*#__PURE__*/React__default["default"].createElement(EventListener.EventListener, {
    event: "resize",
    handler: updateToasts
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ToastManager$1["default"].ToastManager,
    "aria-live": "assertive"
  }, /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.TransitionGroup, {
    component: null
  }, toastsMarkup)));
});
const toastClasses = {
  enter: css.classNames(ToastManager$1["default"].ToastWrapper, ToastManager$1["default"]['ToastWrapper-enter']),
  enterDone: css.classNames(ToastManager$1["default"].ToastWrapper, ToastManager$1["default"]['ToastWrapper-enter-done']),
  exit: css.classNames(ToastManager$1["default"].ToastWrapper, ToastManager$1["default"]['ToastWrapper-exit'])
};

exports.ToastManager = ToastManager;
