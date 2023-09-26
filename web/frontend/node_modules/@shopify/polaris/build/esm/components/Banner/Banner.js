import React, { forwardRef, useContext, useRef, useState, useImperativeHandle } from 'react';
import { CancelSmallMinor, CircleInformationMajor, DiamondAlertMajor, CircleAlertMajor, CircleTickMajor } from '@shopify/polaris-icons';
import { classNames, variationName } from '../../utilities/css.js';
import { BannerContext } from '../../utilities/banner-context.js';
import { WithinContentContext } from '../../utilities/within-content-context.js';
import styles from './Banner.scss.js';
import { unstyledButtonFrom } from '../UnstyledButton/utils.js';
import { useUniqueId } from '../../utilities/unique-id/hooks.js';
import { useI18n } from '../../utilities/i18n/hooks.js';
import { Heading } from '../Heading/Heading.js';
import { Spinner } from '../Spinner/Spinner.js';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup.js';
import { Button } from '../Button/Button.js';
import { Icon } from '../Icon/Icon.js';
import { UnstyledLink } from '../UnstyledLink/UnstyledLink.js';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton.js';

const Banner = /*#__PURE__*/forwardRef(function Banner({
  icon,
  action,
  secondaryAction,
  title,
  children,
  status,
  onDismiss,
  stopAnnouncements
}, bannerRef) {
  const withinContentContainer = useContext(WithinContentContext);
  const id = useUniqueId('Banner');
  const i18n = useI18n();
  const {
    wrapperRef,
    handleKeyUp,
    handleBlur,
    handleMouseUp,
    shouldShowFocus
  } = useBannerFocus(bannerRef);
  const {
    defaultIcon,
    iconColor,
    ariaRoleType
  } = useBannerAttributes(status);
  const iconName = icon || defaultIcon;
  const className = classNames(styles.Banner, status && styles[variationName('status', status)], onDismiss && styles.hasDismiss, shouldShowFocus && styles.keyFocused, withinContentContainer ? styles.withinContentContainer : styles.withinPage);
  let headingMarkup = null;
  let headingID;

  if (title) {
    headingID = `${id}Heading`;
    headingMarkup = /*#__PURE__*/React.createElement("div", {
      className: styles.Heading,
      id: headingID
    }, /*#__PURE__*/React.createElement(Heading, {
      element: "p"
    }, title));
  }

  const spinnerMarkup = action !== null && action !== void 0 && action.loading ? /*#__PURE__*/React.createElement("button", {
    disabled: true,
    "aria-busy": true,
    className: classNames(styles.Button, styles.loading)
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.Spinner
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate('Polaris.Button.spinnerAccessibilityLabel')
  })), action.content) : null;
  const primaryActionMarkup = action ? /*#__PURE__*/React.createElement("div", {
    className: styles.PrimaryAction
  }, action.loading ? spinnerMarkup : unstyledButtonFrom(action, {
    className: styles.Button
  })) : null;
  const secondaryActionMarkup = secondaryAction ? /*#__PURE__*/React.createElement(SecondaryActionFrom, {
    action: secondaryAction
  }) : null;
  const actionMarkup = action || secondaryAction ? /*#__PURE__*/React.createElement("div", {
    className: styles.Actions
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, primaryActionMarkup, secondaryActionMarkup)) : null;
  let contentMarkup = null;
  let contentID;

  if (children || actionMarkup) {
    contentID = `${id}Content`;
    contentMarkup = /*#__PURE__*/React.createElement("div", {
      className: styles.Content,
      id: contentID
    }, children, actionMarkup);
  }

  const dismissButton = onDismiss && /*#__PURE__*/React.createElement("div", {
    className: styles.Dismiss
  }, /*#__PURE__*/React.createElement(Button, {
    plain: true,
    icon: CancelSmallMinor,
    onClick: onDismiss,
    accessibilityLabel: "Dismiss notification"
  }));
  return /*#__PURE__*/React.createElement(BannerContext.Provider, {
    value: true
  }, /*#__PURE__*/React.createElement("div", {
    className: className // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    ,
    tabIndex: 0,
    ref: wrapperRef,
    role: ariaRoleType,
    "aria-live": stopAnnouncements ? 'off' : 'polite',
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onBlur: handleBlur,
    "aria-labelledby": headingID,
    "aria-describedby": contentID
  }, dismissButton, /*#__PURE__*/React.createElement("div", {
    className: styles.Ribbon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: iconName,
    color: iconColor
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.ContentWrapper
  }, headingMarkup, contentMarkup)));
});

function SecondaryActionFrom({
  action
}) {
  if (action.url) {
    return /*#__PURE__*/React.createElement(UnstyledLink, {
      className: styles.SecondaryAction,
      url: action.url,
      external: action.external
    }, /*#__PURE__*/React.createElement("span", {
      className: styles.Text
    }, action.content));
  }

  return /*#__PURE__*/React.createElement(UnstyledButton, {
    className: styles.SecondaryAction,
    onClick: action.onAction
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.Text
  }, action.content));
}

function useBannerAttributes(status) {
  switch (status) {
    case 'success':
      return {
        defaultIcon: CircleTickMajor,
        iconColor: 'success',
        ariaRoleType: 'status'
      };

    case 'info':
      return {
        defaultIcon: CircleInformationMajor,
        iconColor: 'highlight',
        ariaRoleType: 'status'
      };

    case 'warning':
      return {
        defaultIcon: CircleAlertMajor,
        iconColor: 'warning',
        ariaRoleType: 'alert'
      };

    case 'critical':
      return {
        defaultIcon: DiamondAlertMajor,
        iconColor: 'critical',
        ariaRoleType: 'alert'
      };

    default:
      return {
        defaultIcon: CircleInformationMajor,
        iconColor: 'base',
        ariaRoleType: 'status'
      };
  }
}

function useBannerFocus(bannerRef) {
  const wrapperRef = useRef(null);
  const [shouldShowFocus, setShouldShowFocus] = useState(false);
  useImperativeHandle(bannerRef, () => ({
    focus: () => {
      var _wrapperRef$current;

      (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.focus();
      setShouldShowFocus(true);
    }
  }), []);

  const handleKeyUp = event => {
    if (event.target === wrapperRef.current) {
      setShouldShowFocus(true);
    }
  };

  const handleBlur = () => setShouldShowFocus(false);

  const handleMouseUp = event => {
    event.currentTarget.blur();
    setShouldShowFocus(false);
  };

  return {
    wrapperRef,
    handleKeyUp,
    handleBlur,
    handleMouseUp,
    shouldShowFocus
  };
}

export { Banner };
