'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

async function redirectToAuth({
  req,
  res,
  api,
  config,
  isOnline = false
}) {
  const shop = api.utils.sanitizeShop(req.query.shop);
  if (shop) {
    if (req.query.embedded === '1') {
      await clientSideRedirect(api, config, shop, req, res);
    } else {
      await serverSideRedirect(api, config, shop, req, res, isOnline);
    }
  } else {
    await config.logger.error('No shop provided to redirect to auth');
    res.status(500);
    res.send('No shop provided');
  }
}
async function clientSideRedirect(api, config, shop, req, res) {
  const host = api.utils.sanitizeHost(req.query.host);
  if (!host) {
    res.status(500);
    res.send('No host provided');
    return;
  }
  const redirectUriParams = new URLSearchParams({
    shop,
    host
  }).toString();
  const appHost = `${api.config.hostScheme}://${api.config.hostName}`;
  const queryParams = new URLSearchParams({
    ...req.query,
    shop,
    redirectUri: `${appHost}${config.auth.path}?${redirectUriParams}`
  }).toString();
  await config.logger.debug(`Redirecting to auth while embedded, going to ${config.exitIframePath}`, {
    shop
  });
  res.redirect(`${config.exitIframePath}?${queryParams}`);
}
async function serverSideRedirect(api, config, shop, req, res, isOnline) {
  await config.logger.debug(`Redirecting to auth at ${config.auth.path}, with callback ${config.auth.callbackPath}`, {
    shop,
    isOnline
  });
  await api.auth.begin({
    callbackPath: config.auth.callbackPath,
    shop,
    isOnline,
    rawRequest: req,
    rawResponse: res
  });
}

exports.redirectToAuth = redirectToAuth;
