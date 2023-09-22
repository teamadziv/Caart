import axios from 'axios';
export const ShopDetails = async (session) => {
    const ShopName = session?.shop
    const accessToken = session?.accessToken;
    const URL = `https://${ShopName}/admin/api/2022-10/shop.json`
    const shopifyHeader = (token) => ({
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        "Accept-Encoding": "gzip,deflate,compress",
        'X-Shopify-Access-Token': token,
    });
    const Shop = await axios.get(URL, { headers: shopifyHeader(accessToken) })
    return {name:Shop.data.shop.name, domain:Shop.data.shop.domain};
}
