'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.StatusValue = void 0;

(function (StatusValue) {
  StatusValue["Info"] = "info";
  StatusValue["Success"] = "success";
  StatusValue["Warning"] = "warning";
  StatusValue["Critical"] = "critical";
  StatusValue["Attention"] = "attention";
  StatusValue["New"] = "new";
})(exports.StatusValue || (exports.StatusValue = {}));

exports.ProgressValue = void 0;

(function (ProgressValue) {
  ProgressValue["Incomplete"] = "incomplete";
  ProgressValue["PartiallyComplete"] = "partiallyComplete";
  ProgressValue["Complete"] = "complete";
})(exports.ProgressValue || (exports.ProgressValue = {}));
