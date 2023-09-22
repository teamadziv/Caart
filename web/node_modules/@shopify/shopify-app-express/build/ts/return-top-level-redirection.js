"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnTopLevelRedirection = void 0;
var tslib_1 = require("tslib");
function returnTopLevelRedirection(_a) {
    var res = _a.res, config = _a.config, bearerPresent = _a.bearerPresent, redirectUrl = _a.redirectUrl;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!bearerPresent) return [3 /*break*/, 2];
                    return [4 /*yield*/, config.logger.debug("Redirecting to top level at ".concat(redirectUrl, " while embedded, returning headers"))];
                case 1:
                    _b.sent();
                    res.status(403);
                    res.header('X-Shopify-API-Request-Failure-Reauthorize', '1');
                    res.header('X-Shopify-API-Request-Failure-Reauthorize-Url', redirectUrl);
                    res.end();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, config.logger.debug("Redirecting to ".concat(redirectUrl, " while at the top level"))];
                case 3:
                    _b.sent();
                    res.redirect(redirectUrl);
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.returnTopLevelRedirection = returnTopLevelRedirection;
//# sourceMappingURL=return-top-level-redirection.js.map