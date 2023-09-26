import React from 'react';
import { classNames, variationName } from '../../utilities/css.js';
import styles from './TextStyle.scss.js';

var VariationValue;

(function (VariationValue) {
  VariationValue["Positive"] = "positive";
  VariationValue["Negative"] = "negative";
  VariationValue["Warning"] = "warning";
  VariationValue["Strong"] = "strong";
  VariationValue["Subdued"] = "subdued";
  VariationValue["Code"] = "code";
})(VariationValue || (VariationValue = {}));

function TextStyle({
  variation,
  children
}) {
  const className = classNames(variation && styles[variationName('variation', variation)], variation === VariationValue.Code && styles.code);
  const Element = variationElement(variation);
  return /*#__PURE__*/React.createElement(Element, {
    className: className
  }, children);
}

function variationElement(variation) {
  return variation === VariationValue.Code ? 'code' : 'span';
}

export { TextStyle };
