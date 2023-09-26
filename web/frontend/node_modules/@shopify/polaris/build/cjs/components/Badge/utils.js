'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = require('./types.js');

function getDefaultAccessibilityLabel(i18n, progress, status) {
  let progressLabel = '';
  let statusLabel = '';

  if (!progress && !status) {
    return '';
  }

  switch (progress) {
    case types.ProgressValue.Incomplete:
      progressLabel = i18n.translate('Polaris.Badge.PROGRESS_LABELS.incomplete');
      break;

    case types.ProgressValue.PartiallyComplete:
      progressLabel = i18n.translate('Polaris.Badge.PROGRESS_LABELS.partiallyComplete');
      break;

    case types.ProgressValue.Complete:
      progressLabel = i18n.translate('Polaris.Badge.PROGRESS_LABELS.complete');
      break;
  }

  switch (status) {
    case types.StatusValue.Info:
      statusLabel = i18n.translate('Polaris.Badge.STATUS_LABELS.info');
      break;

    case types.StatusValue.Success:
      statusLabel = i18n.translate('Polaris.Badge.STATUS_LABELS.success');
      break;

    case types.StatusValue.Warning:
      statusLabel = i18n.translate('Polaris.Badge.STATUS_LABELS.warning');
      break;

    case types.StatusValue.Critical:
      statusLabel = i18n.translate('Polaris.Badge.STATUS_LABELS.critical');
      break;

    case types.StatusValue.Attention:
      statusLabel = i18n.translate('Polaris.Badge.STATUS_LABELS.attention');
      break;

    case types.StatusValue.New:
      statusLabel = i18n.translate('Polaris.Badge.STATUS_LABELS.new');
      break;
  }

  if (!status && progress) {
    return progressLabel;
  } else if (status && !progress) {
    return statusLabel;
  } else {
    return i18n.translate('Polaris.Badge.progressAndStatus', {
      progressLabel,
      statusLabel
    });
  }
}

exports.getDefaultAccessibilityLabel = getDefaultAccessibilityLabel;
