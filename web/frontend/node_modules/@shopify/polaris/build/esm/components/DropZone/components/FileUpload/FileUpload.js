import React, { useContext } from 'react';
import { classNames } from '../../../../utilities/css.js';
import { capitalize } from '../../../../utilities/capitalize.js';
import { DropZoneContext } from '../../context.js';
import { createAllowMultipleKey } from '../../utils/index.js';
import styles from './FileUpload.scss.js';
import uploadArrow from '../../images/upload-arrow.svg.js';
import { Caption } from '../../../Caption/Caption.js';
import { useI18n } from '../../../../utilities/i18n/hooks.js';
import { Stack } from '../../../Stack/Stack.js';
import { TextStyle } from '../../../TextStyle/TextStyle.js';

function FileUpload(props) {
  const i18n = useI18n();
  const {
    size,
    measuring,
    type,
    disabled,
    allowMultiple
  } = useContext(DropZoneContext);
  const typeSuffix = capitalize(type);
  const allowMultipleKey = createAllowMultipleKey(allowMultiple);
  const {
    actionTitle = i18n.translate(`Polaris.DropZone.${allowMultipleKey}.actionTitle${typeSuffix}`),
    actionHint
  } = props;
  const actionClassNames = classNames(styles.Action, disabled && styles.disabled);
  const actionMarkup = /*#__PURE__*/React.createElement("div", {
    className: actionClassNames
  }, actionTitle);
  const fileUploadClassName = classNames(styles.FileUpload, measuring && styles.measuring, size === 'large' && styles.large, size === 'small' && styles.small);
  const actionHintMarkup = actionHint && /*#__PURE__*/React.createElement(Caption, null, /*#__PURE__*/React.createElement(TextStyle, {
    variation: "subdued"
  }, actionHint));
  let viewMarkup;

  switch (size) {
    case 'large':
      viewMarkup = /*#__PURE__*/React.createElement(Stack, {
        vertical: true,
        spacing: "tight"
      }, actionMarkup, actionHintMarkup);
      break;

    case 'medium':
      viewMarkup = /*#__PURE__*/React.createElement(Stack, {
        vertical: true,
        spacing: "tight"
      }, actionMarkup, actionHintMarkup);
      break;

    case 'small':
      viewMarkup = /*#__PURE__*/React.createElement("img", {
        width: "20",
        src: uploadArrow,
        alt: ""
      });
      break;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: fileUploadClassName
  }, viewMarkup);
}

export { FileUpload };
