"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCallback = void 0;
var tslib_1 = require("tslib");
var shopify_api_1 = require("@shopify/shopify-api");
var redirect_to_auth_1 = require("../redirect-to-auth");
function authCallback(_a) {
    var req = _a.req, res = _a.res, api = _a.api, config = _a.config;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var callbackResponse, error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 10, , 13]);
                    return [4 /*yield*/, api.auth.callback({
                            rawRequest: req,
                            rawResponse: res,
                        })];
                case 1:
                    callbackResponse = _b.sent();
                    return [4 /*yield*/, config.logger.debug('Callback is valid, storing session', {
                            shop: callbackResponse.session.shop,
                            isOnline: callbackResponse.session.isOnline,
                        })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, config.sessionStorage.storeSession(callbackResponse.session)];
                case 3:
                    _b.sent();
                    if (!!callbackResponse.session.isOnline) return [3 /*break*/, 5];
                    return [4 /*yield*/, registerWebhooks(config, api, callbackResponse.session)];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    if (!(config.useOnlineTokens && !callbackResponse.session.isOnline)) return [3 /*break*/, 8];
                    return [4 /*yield*/, config.logger.debug('Completing offline token OAuth, redirecting to online token OAuth', { shop: callbackResponse.session.shop })];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, redirect_to_auth_1.redirectToAuth)({ req: req, res: res, api: api, config: config, isOnline: true })];
                case 7:
                    _b.sent();
                    return [2 /*return*/, false];
                case 8:
                    res.locals.shopify = tslib_1.__assign(tslib_1.__assign({}, res.locals.shopify), { session: callbackResponse.session });
                    return [4 /*yield*/, config.logger.debug('Completed OAuth callback', {
                            shop: callbackResponse.session.shop,
                            isOnline: callbackResponse.session.isOnline,
                        })];
                case 9:
                    _b.sent();
                    return [2 /*return*/, true];
                case 10:
                    error_1 = _b.sent();
                    return [4 /*yield*/, config.logger.error("Failed to complete OAuth with error: ".concat(error_1))];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, handleCallbackError(req, res, api, config, error_1)];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/, false];
            }
        });
    });
}
exports.authCallback = authCallback;
function registerWebhooks(config, api, session) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var responsesByTopic, _a, _b, _c, _i, topic, _d, _e, response, result, e_1_1;
        var e_1, _f;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, config.logger.debug('Registering webhooks', { shop: session.shop })];
                case 1:
                    _g.sent();
                    return [4 /*yield*/, api.webhooks.register({ session: session })];
                case 2:
                    responsesByTopic = _g.sent();
                    _a = responsesByTopic;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _g.label = 3;
                case 3:
                    if (!(_i < _b.length)) return [3 /*break*/, 14];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 13];
                    topic = _c;
                    if (!Object.prototype.hasOwnProperty.call(responsesByTopic, topic)) {
                        return [3 /*break*/, 13];
                    }
                    _g.label = 4;
                case 4:
                    _g.trys.push([4, 11, 12, 13]);
                    _d = (e_1 = void 0, tslib_1.__values(responsesByTopic[topic])), _e = _d.next();
                    _g.label = 5;
                case 5:
                    if (!!_e.done) return [3 /*break*/, 10];
                    response = _e.value;
                    if (!(!response.success && !shopify_api_1.gdprTopics.includes(topic))) return [3 /*break*/, 9];
                    result = response.result;
                    if (!result.errors) return [3 /*break*/, 7];
                    return [4 /*yield*/, config.logger.error("Failed to register ".concat(topic, " webhook: ").concat(result.errors[0].message), { shop: session.shop })];
                case 6:
                    _g.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, config.logger.error("Failed to register ".concat(topic, " webhook: ").concat(JSON.stringify(result.data)), { shop: session.shop })];
                case 8:
                    _g.sent();
                    _g.label = 9;
                case 9:
                    _e = _d.next();
                    return [3 /*break*/, 5];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_1_1 = _g.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 13:
                    _i++;
                    return [3 /*break*/, 3];
                case 14: return [2 /*return*/];
            }
        });
    });
}
function handleCallbackError(req, res, api, config, error) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = true;
                    switch (_a) {
                        case error instanceof shopify_api_1.InvalidOAuthError: return [3 /*break*/, 1];
                        case error instanceof shopify_api_1.CookieNotFound: return [3 /*break*/, 2];
                    }
                    return [3 /*break*/, 4];
                case 1:
                    res.status(400);
                    res.send(error.message);
                    return [3 /*break*/, 5];
                case 2: return [4 /*yield*/, (0, redirect_to_auth_1.redirectToAuth)({ req: req, res: res, api: api, config: config })];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    res.status(500);
                    res.send(error.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=auth-callback.js.map