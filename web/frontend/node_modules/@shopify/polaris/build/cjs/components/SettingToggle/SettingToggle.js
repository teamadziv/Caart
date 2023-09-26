'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('../Button/utils.js');
var Card = require('../Card/Card.js');
var SettingAction = require('../SettingAction/SettingAction.js');
var uniqueIdFactory = require('../../utilities/unique-id/unique-id-factory.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getUniqueSettingToggleId = uniqueIdFactory.globalIdGeneratorFactory('SettingToggle');
function SettingToggle({
  enabled,
  action,
  children
}) {
  const id = React.useMemo(getUniqueSettingToggleId, []);
  const actionMarkup = action ? utils.buttonFrom(action, {
    primary: !enabled,
    role: 'switch',
    id,
    ariaChecked: enabled ? 'true' : 'false'
  }) : null;
  return /*#__PURE__*/React__default["default"].createElement(Card.Card, {
    sectioned: true
  }, /*#__PURE__*/React__default["default"].createElement(SettingAction.SettingAction, {
    action: actionMarkup
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id
  }, children)));
}

exports.SettingToggle = SettingToggle;
