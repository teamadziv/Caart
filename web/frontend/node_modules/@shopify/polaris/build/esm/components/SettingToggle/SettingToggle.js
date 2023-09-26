import React, { useMemo } from 'react';
import { buttonFrom } from '../Button/utils.js';
import { Card } from '../Card/Card.js';
import { SettingAction } from '../SettingAction/SettingAction.js';
import { globalIdGeneratorFactory } from '../../utilities/unique-id/unique-id-factory.js';

const getUniqueSettingToggleId = globalIdGeneratorFactory('SettingToggle');
function SettingToggle({
  enabled,
  action,
  children
}) {
  const id = useMemo(getUniqueSettingToggleId, []);
  const actionMarkup = action ? buttonFrom(action, {
    primary: !enabled,
    role: 'switch',
    id,
    ariaChecked: enabled ? 'true' : 'false'
  }) : null;
  return /*#__PURE__*/React.createElement(Card, {
    sectioned: true
  }, /*#__PURE__*/React.createElement(SettingAction, {
    action: actionMarkup
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, children)));
}

export { SettingToggle };
