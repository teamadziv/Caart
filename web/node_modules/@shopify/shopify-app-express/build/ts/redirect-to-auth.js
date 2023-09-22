"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToAuth = void 0;
var tslib_1 = require("tslib");
function redirectToAuth(_a) {
    var req = _a.req, res = _a.res, api = _a.api, config = _a.config, _b = _a.isOnline, isOnline = _b === void 0 ? false : _b;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var shop;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    shop = api.utils.sanitizeShop(req.query.shop);
                    if (!shop) return [3 /*break*/, 5];
                    if (!(req.query.embedded === '1')) return [3 /*break*/, 2];
                    return [4 /*yield*/, clientSideRedirect(api, config, shop, req, res)];
                case 1:
                    _c.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, serverSideRedirect(api, config, shop, req, res, isOnline)];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, config.logger.error('No shop provided to redirect to auth')];
                case 6:
                    _c.sent();
                    res.status(500);
                    res.send('No shop provided');
                    _c.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.redirectToAuth = redirectToAuth;
function clientSideRedirect(api, config, shop, req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var host, redirectUriParams, appHost, queryParams;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    host = api.utils.sanitizeHost(req.query.host);
                    if (!host) {
                        res.status(500);
                        res.send('No host provided');
                        return [2 /*return*/];
                    }
                    redirectUriParams = new URLSearchParams({ shop: shop, host: host }).toString();
                    appHost = "".concat(api.config.hostScheme, "://").concat(api.config.hostName);
                    queryParams = new URLSearchParams(tslib_1.__assign(tslib_1.__assign({}, req.query), { shop: shop, redirectUri: "".concat(appHost).concat(config.auth.path, "?").concat(redirectUriParams) })).toString();
                    return [4 /*yield*/, config.logger.debug("Redirecting to auth while embedded, going to ".concat(config.exitIframePath), { shop: shop })];
                case 1:
                    _a.sent();
                    res.redirect("".concat(config.exitIframePath, "?").concat(queryParams));
                    return [2 /*return*/];
            }
        });
    });
}
function serverSideRedirect(api, config, shop, req, res, isOnline) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, config.logger.debug("Redirecting to auth at ".concat(config.auth.path, ", with callback ").concat(config.auth.callbackPath), { shop: shop, isOnline: isOnline })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, api.auth.begin({
                            callbackPath: config.auth.callbackPath,
                            shop: shop,
                            isOnline: isOnline,
                            rawRequest: req,
                            rawResponse: res,
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=redirect-to-auth.js.map