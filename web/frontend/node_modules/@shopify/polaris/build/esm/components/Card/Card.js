import React from 'react';
import { classNames } from '../../utilities/css.js';
import { useToggle } from '../../utilities/use-toggle.js';
import { WithinContentContext } from '../../utilities/within-content-context.js';
import styles from './Card.scss.js';
import { buttonFrom } from '../Button/utils.js';
import { Button } from '../Button/Button.js';
import { Header } from './components/Header/Header.js';
import { Section } from './components/Section/Section.js';
import { Subsection } from './components/Subsection/Subsection.js';
import { useI18n } from '../../utilities/i18n/hooks.js';
import { Popover } from '../Popover/Popover.js';
import { ActionList } from '../ActionList/ActionList.js';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup.js';

// TypeScript can't generate types that correctly infer the typing of
// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.
const Card = function Card({
  children,
  hideOnPrint,
  title,
  subdued,
  sectioned,
  actions,
  primaryFooterAction,
  secondaryFooterActions,
  secondaryFooterActionsDisclosureText,
  footerActionAlignment = 'right'
}) {
  const i18n = useI18n();
  const {
    value: secondaryActionsPopoverOpen,
    toggle: toggleSecondaryActionsPopoverOpen
  } = useToggle(false);
  const className = classNames(styles.Card, subdued && styles.subdued, hideOnPrint && styles.hideOnPrint);
  const headerMarkup = title || actions ? /*#__PURE__*/React.createElement(Header, {
    actions: actions,
    title: title
  }) : null;
  const content = sectioned ? /*#__PURE__*/React.createElement(Section, null, children) : children;
  const primaryFooterActionMarkup = primaryFooterAction ? buttonFrom(primaryFooterAction, {
    primary: true
  }) : null;
  let secondaryFooterActionsMarkup = null;

  if (secondaryFooterActions && secondaryFooterActions.length) {
    if (secondaryFooterActions.length === 1) {
      secondaryFooterActionsMarkup = buttonFrom(secondaryFooterActions[0]);
    } else {
      secondaryFooterActionsMarkup = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Popover, {
        active: secondaryActionsPopoverOpen,
        activator: /*#__PURE__*/React.createElement(Button, {
          disclosure: true,
          onClick: toggleSecondaryActionsPopoverOpen
        }, secondaryFooterActionsDisclosureText || i18n.translate('Polaris.Common.more')),
        onClose: toggleSecondaryActionsPopoverOpen
      }, /*#__PURE__*/React.createElement(ActionList, {
        items: secondaryFooterActions
      })));
    }
  }

  const footerMarkup = primaryFooterActionMarkup || secondaryFooterActionsMarkup ? /*#__PURE__*/React.createElement("div", {
    className: classNames(styles.Footer, footerActionAlignment === 'left' && styles.LeftJustified)
  }, footerActionAlignment === 'right' ? /*#__PURE__*/React.createElement(ButtonGroup, null, secondaryFooterActionsMarkup, primaryFooterActionMarkup) : /*#__PURE__*/React.createElement(ButtonGroup, null, primaryFooterActionMarkup, secondaryFooterActionsMarkup)) : null;
  return /*#__PURE__*/React.createElement(WithinContentContext.Provider, {
    value: true
  }, /*#__PURE__*/React.createElement("div", {
    className: className
  }, headerMarkup, content, footerMarkup));
};
Card.Header = Header;
Card.Section = Section;
Card.Subsection = Subsection;

export { Card };
