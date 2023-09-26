import React, { useState, useCallback } from 'react';
import { isSection } from '../../utilities/options.js';
import { arraysAreEqual } from '../../utilities/arrays.js';
import { useDeepEffect } from '../../utilities/use-deep-effect.js';
import styles from './OptionList.scss.js';
import { Option } from './components/Option/Option.js';
import { useUniqueId } from '../../utilities/unique-id/hooks.js';

function OptionList({
  options,
  sections,
  title,
  selected,
  allowMultiple,
  role,
  optionRole,
  verticalAlign,
  onChange,
  id: idProp
}) {
  const [normalizedOptions, setNormalizedOptions] = useState(createNormalizedOptions(options, sections, title));
  const id = useUniqueId('OptionList', idProp);
  useDeepEffect(() => {
    setNormalizedOptions(createNormalizedOptions(options || [], sections || [], title));
  }, [options, sections, title], optionArraysAreEqual);
  const handleClick = useCallback((sectionIndex, optionIndex) => {
    const selectedValue = normalizedOptions[sectionIndex].options[optionIndex].value;
    const foundIndex = selected.indexOf(selectedValue);

    if (allowMultiple) {
      const newSelection = foundIndex === -1 ? [selectedValue, ...selected] : [...selected.slice(0, foundIndex), ...selected.slice(foundIndex + 1, selected.length)];
      onChange(newSelection);
      return;
    }

    onChange([selectedValue]);
  }, [normalizedOptions, selected, allowMultiple, onChange]);
  const optionsExist = normalizedOptions.length > 0;
  const optionsMarkup = optionsExist ? normalizedOptions.map(({
    title,
    options
  }, sectionIndex) => {
    const titleMarkup = title ? /*#__PURE__*/React.createElement("p", {
      className: styles.Title
    }, title) : null;
    const optionsMarkup = options && options.map((option, optionIndex) => {
      const isSelected = selected.includes(option.value);
      const optionId = option.id || `${id}-${sectionIndex}-${optionIndex}`;
      return /*#__PURE__*/React.createElement(Option, Object.assign({
        key: optionId
      }, option, {
        id: optionId,
        section: sectionIndex,
        index: optionIndex,
        onClick: handleClick,
        select: isSelected,
        allowMultiple: allowMultiple,
        verticalAlign: verticalAlign,
        role: optionRole
      }));
    });
    return /*#__PURE__*/React.createElement("li", {
      key: title || `noTitle-${sectionIndex}`
    }, titleMarkup, /*#__PURE__*/React.createElement("ul", {
      className: styles.Options,
      id: `${id}-${sectionIndex}`,
      role: role
    }, optionsMarkup));
  }) : null;
  return /*#__PURE__*/React.createElement("ul", {
    className: styles.OptionList,
    role: role
  }, optionsMarkup);
}

function createNormalizedOptions(options, sections, title) {
  if (options == null) {
    const section = {
      options: [],
      title
    };
    return sections == null ? [] : [section, ...sections];
  }

  if (sections == null) {
    return [{
      title,
      options
    }];
  }

  return [{
    title,
    options
  }, ...sections];
}

function optionArraysAreEqual(firstArray, secondArray) {
  if (isSection(firstArray) && isSection(secondArray)) {
    return arraysAreEqual(firstArray, secondArray, testSectionsPropEquality);
  }

  return arraysAreEqual(firstArray, secondArray);
}

function testSectionsPropEquality(previousSection, currentSection) {
  const {
    options: previousOptions
  } = previousSection;
  const {
    options: currentOptions
  } = currentSection;
  const optionsAreEqual = arraysAreEqual(previousOptions, currentOptions);
  const titlesAreEqual = previousSection.title === currentSection.title;
  return optionsAreEqual && titlesAreEqual;
}

export { OptionList };
