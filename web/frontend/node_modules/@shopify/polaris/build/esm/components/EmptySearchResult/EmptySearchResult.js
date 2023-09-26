import React from 'react';
import { DisplayText } from '../DisplayText/DisplayText.js';
import emptySearch from './illustrations/empty-search.svg.js';
import { useI18n } from '../../utilities/i18n/hooks.js';
import { Stack } from '../Stack/Stack.js';
import { TextStyle } from '../TextStyle/TextStyle.js';
import { Image } from '../Image/Image.js';

function EmptySearchResult({
  title,
  description,
  withIllustration
}) {
  const i18n = useI18n();
  const altText = i18n.translate('Polaris.EmptySearchResult.altText');
  const descriptionMarkup = description ? /*#__PURE__*/React.createElement("p", null, description) : null;
  const illustrationMarkup = withIllustration ? /*#__PURE__*/React.createElement(Image, {
    alt: altText,
    source: emptySearch,
    draggable: false
  }) : null;
  return /*#__PURE__*/React.createElement(Stack, {
    alignment: "center",
    vertical: true
  }, illustrationMarkup, /*#__PURE__*/React.createElement(DisplayText, {
    size: "small"
  }, title), /*#__PURE__*/React.createElement(TextStyle, {
    variation: "subdued"
  }, descriptionMarkup));
}

export { EmptySearchResult };
