"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthenticatedSession = void 0;
var tslib_1 = require("tslib");
var shopify_api_1 = require("@shopify/shopify-api");
var redirect_to_auth_1 = require("../redirect-to-auth");
var return_top_level_redirection_1 = require("../return-top-level-redirection");
var has_valid_access_token_1 = require("./has-valid-access-token");
function validateAuthenticatedSession(_a) {
    var api = _a.api, config = _a.config;
    return function validateAuthenticatedSession() {
        var _this = this;
        return function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var sessionId, error_1, session, error_2, shop, bearerPresent, redirectUrl;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        config.logger.info('Running validateAuthenticatedSession');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, api.session.getCurrentId({
                                isOnline: config.useOnlineTokens,
                                rawRequest: req,
                                rawResponse: res,
                            })];
                    case 2:
                        sessionId = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        error_1 = _b.sent();
                        return [4 /*yield*/, config.logger.error("Error when loading session from storage: ".concat(error_1))];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, handleSessionError(req, res, error_1)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, undefined];
                    case 6:
                        if (!sessionId) return [3 /*break*/, 11];
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 11]);
                        return [4 /*yield*/, config.sessionStorage.loadSession(sessionId)];
                    case 8:
                        session = _b.sent();
                        return [3 /*break*/, 11];
                    case 9:
                        error_2 = _b.sent();
                        return [4 /*yield*/, config.logger.error("Error when loading session from storage: ".concat(error_2))];
                    case 10:
                        _b.sent();
                        res.status(500);
                        res.send(error_2.message);
                        return [2 /*return*/, undefined];
                    case 11:
                        shop = api.utils.sanitizeShop(req.query.shop) || (session === null || session === void 0 ? void 0 : session.shop);
                        if (session && shop && session.shop !== shop) {
                            config.logger.debug('Found a session for a different shop in the request', { currentShop: session.shop, requestShop: shop });
                            return [2 /*return*/, (0, redirect_to_auth_1.redirectToAuth)({ req: req, res: res, api: api, config: config })];
                        }
                        if (!session) return [3 /*break*/, 13];
                        config.logger.debug('Request session found and loaded', {
                            shop: session.shop,
                        });
                        if (!session.isActive(api.config.scopes)) return [3 /*break*/, 13];
                        config.logger.debug('Request session exists and is active', {
                            shop: session.shop,
                        });
                        return [4 /*yield*/, (0, has_valid_access_token_1.hasValidAccessToken)(api, session)];
                    case 12:
                        if (_b.sent()) {
                            config.logger.info('Request session has a valid access token', {
                                shop: session.shop,
                            });
                            res.locals.shopify = tslib_1.__assign(tslib_1.__assign({}, res.locals.shopify), { session: session });
                            return [2 /*return*/, next()];
                        }
                        _b.label = 13;
                    case 13:
                        bearerPresent = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.match(/Bearer (.*)/);
                        if (!bearerPresent) return [3 /*break*/, 15];
                        if (!!shop) return [3 /*break*/, 15];
                        return [4 /*yield*/, setShopFromSessionOrToken(api, session, bearerPresent[1])];
                    case 14:
                        shop = _b.sent();
                        _b.label = 15;
                    case 15:
                        redirectUrl = "".concat(config.auth.path, "?shop=").concat(shop);
                        config.logger.info("Session was not valid. Redirecting to ".concat(redirectUrl), { shop: shop });
                        return [2 /*return*/, (0, return_top_level_redirection_1.returnTopLevelRedirection)({
                                res: res,
                                config: config,
                                bearerPresent: Boolean(bearerPresent),
                                redirectUrl: redirectUrl,
                            })];
                }
            });
        }); };
    };
}
exports.validateAuthenticatedSession = validateAuthenticatedSession;
function handleSessionError(_req, res, error) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (true) {
                case error instanceof shopify_api_1.InvalidJwtError:
                    res.status(401);
                    res.send(error.message);
                    break;
                default:
                    res.status(500);
                    res.send(error.message);
                    break;
            }
            return [2 /*return*/];
        });
    });
}
function setShopFromSessionOrToken(api, session, token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var shop, payload;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) return [3 /*break*/, 1];
                    shop = session.shop;
                    return [3 /*break*/, 3];
                case 1:
                    if (!api.config.isEmbeddedApp) return [3 /*break*/, 3];
                    return [4 /*yield*/, api.session.decodeSessionToken(token)];
                case 2:
                    payload = _a.sent();
                    shop = payload.dest.replace('https://', '');
                    _a.label = 3;
                case 3: return [2 /*return*/, shop];
            }
        });
    });
}
//# sourceMappingURL=validate-authenticated-session.js.map