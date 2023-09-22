"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
var tslib_1 = require("tslib");
function process(_a) {
    var req = _a.req, res = _a.res, api = _a.api, config = _a.config;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 5]);
                    return [4 /*yield*/, api.webhooks.process({
                            rawBody: req.body,
                            rawRequest: req,
                            rawResponse: res,
                        })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, config.logger.info('Webhook processed, returned status code 200')];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _b.sent();
                    return [4 /*yield*/, config.logger.error("Failed to process webhook: ".concat(error_1))];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.process = process;
//# sourceMappingURL=process.js.map