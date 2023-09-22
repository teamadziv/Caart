// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import mongoose from "mongoose";  
import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";
import SessionModel from "./models/SessionModel.js";
import CartModel from "./models/CartModel.js";
import * as crypto from "crypto";
import { ShopDetails } from "./helper/ShopDetail.js";
import ModuleModel from "./models/ModulesModel.js";
import StickyCartSetting from "./models/StickyCartSetting.js";
import SettingsData from "./models/SettingDataModel.js"
import cors from "cors";
import ProductModel from "./models/ProductModel.js";

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);
main().then(() => {
  console.log('database connected')
}).catch(err => console.log(err));

async function main() {
  //await mongoose.connect('mongodb+srv://usman:usman12345@reforesta.8g3abfe.mongodb.net/?retryWrites=true&w=majority');
   await mongoose.connect('mongodb://127.0.0.1:27017/caart');

}
const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();
app.use(cors({
  origin: '*', 
 }));

 app.get("/api/settings/cartweb/:shop/:isfullcart",cors(), async (_req, res) => {
  const { shop, isfullcart } = _req.params;

  try {
    const cartSettings = await CartModel.findOne({
      shop: shop,
      isFullCart: isfullcart
    });

    if (!cartSettings) {
      return res.status(404).json({ success: false, message: "Cart setting not found" });
    }

    res.status(200).json({ success: true, data: cartSettings });
  } catch (error) {
    console.error("Error retrieving cart setting:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/api/settings/upsell/:shop/:product/:cart",cors(), async (_req, res) => {
  //cart = 0 for full 1 for drawwer
  const { shop, product, cart } = _req.params;
  const regex = /(\d+)/; 
  let isFullCart = false;
  if(cart>0)
    isFullCart = true;


      const triggerObjectId = mongoose.Types.ObjectId(product.replace(/[^\w\s]/gi, ''));

// Fetch the data using aggregation
CartModel.aggregate([
  {
    $match: {
      shop: shop,
      isFullCart: isFullCart,
      "upsells.upsell_products.trigger": triggerObjectId
    }
  },
  {
    $unwind: "$upsells.upsell_products"
  },
  {
    $match: {
      "upsells.upsell_products.trigger": triggerObjectId
    }
  },
  {
    $lookup: {
      from: "products", // Your products collection name
      localField: "upsells.upsell_products.trigger",
      foreignField: "id", // Assuming "id" in ProductModel is corresponding to "trigger" in CartModel
      as: "triggerProduct"
    }
  },
  {
    $lookup: {
      from: "products", // Your products collection name
      localField: "upsells.upsell_products.upsell_product",
      foreignField: "id", // Assuming "id" in ProductModel is corresponding to "upsell_product" in CartModel
      as: "upsellProduct"
    }
  },
  {
    $group: {
      _id: "$triggerProduct",
      upsellProducts: { $push: { $arrayElemAt: ["$upsellProduct", 0] } }
    }
  },
  {
    $project: {
      triggerProduct: { $arrayElemAt: ["$_id", 0] },
      upsellProducts: 1,
      _id: 0
    }
  }
]).then(result => {
  console.log(result);
  res.status(200).json({ success: true, data: result }); // Array of matched trigger and associated upsell products
}).catch(error => {
  console.log(error);
  return res.status(404).json({ success: false, message: error });
});
  
    
  
}
);

app.get("/api/discounts/list/:shop", async (_req, res) => {
  let status = 200;
  let error = null;
  const { shop } = _req.params;
  const  session = await SessionModel.findOne({
      shop: shop
    });
      try {
        const resp = await shopify.api.rest.PriceRule.all({
          session: session,
        });
        if (resp.length > 0) {
          // const priceRule = resp[0]; // Assuming there is only one price rule in the array
          // const gid = priceRule.id; // Access the `admin_graphql_api_id` property to get the `gid` value
          // console.log(gid);
          // const discount_codes = await shopify.api.rest.DiscountCode.all({
          //   session: session,
          //   price_rule_id: gid,
          // });
          res.status(status).send({ success: status === 200, resp });
        }
      } catch (e) {
        console.log(`Failed to process products/create: ${e.message}`);
      }
  res.status(status).send({ success: status === 200, error });
});

app.get("/api/discounts/list/:shop/:pricerule", async (_req, res) => {
  let status = 200;
  let error = null;
  const { shop,pricerule } = _req.params;
    const  session = await SessionModel.findOne({
      shop: shop
    });
  try {
    const resp = await shopify.api.rest.PriceRule.find({
      session: session,
      id: pricerule, // Use the pricerule parameter here
    });
    if (resp.length > 0) {
      const priceRule = resp[0]; // Assuming there is only one price rule in the array
      const gid = priceRule.admin_graphql_api_id; // Access the `admin_graphql_api_id` property to get the `gid` value
      console.log(gid);
      const discount_codes = await shopify.api.rest.DiscountCode.all({
        session: session,
        price_rule_id: gid,
      });
      res.status(status).send({ success: true, discount_codes }); // Simplify the success response
    } else {
      res.status(404).send({ success: false, error: "Price rule not found" }); // Respond with 404 if the price rule is not found
    }
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    res.status(500).send({ success: false, error: "Failed to process the request" }); // Respond with 500 if there's an error
  }
});
app.get("/api/settings/sticky/:shop",cors(), async (_req, res) => {
  const { shop } = _req.params;

  try {
    const stickyCartSetting = await StickyCartSetting.findOne({
      shop: shop
    });

    if (!stickyCartSetting) {
      return res.status(404).json({ success: false, message: "Cart setting not found" });
    }

    res.status(200).json({ success: true, data: stickyCartSetting });
  } catch (error) {
    console.error("Error retrieving cart setting:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

app.post("/api/settings/cart", async (_req,res) => {
  const session = await res.locals.shopify.session;
  const { isFullCart, cart_header, announcement, progress_bar, cart_items, order_notes, discount_codes, checkout_btns, trust_badge, upsells } = _req.body;
console.log(session.shop);
  try {
    // Check if a record exists with the new isFullCart value
    const existingRecord = await CartModel.findOne({ shop: session.shop, isFullCart: isFullCart });

    let data;

    if (existingRecord) {
      // Update the existing record
      data = await CartModel.findOneAndUpdate(
        { shop: session.shop, isFullCart: isFullCart },
        {
          cart_header: cart_header,
          announcement: announcement,
          progress_bar: progress_bar,
          cart_items: cart_items,
          order_notes: order_notes,
          discount_codes: discount_codes,
          checkout_btns: checkout_btns,
          trust_badge: trust_badge,
          upsells: upsells
        },
        { new: true }
      );
    } else {
      // Insert a new record
      console.log("i'm from new")
      data = await CartModel.create({
        shop: session.shop,
        isFullCart: isFullCart,
        cart_header: cart_header,
        announcement: announcement,
        progress_bar: progress_bar,
        cart_items: cart_items,
        order_notes: order_notes,
        discount_codes: discount_codes,
        checkout_btns: checkout_btns,
        trust_badge: trust_badge,
        upsells: upsells
      });
    }

    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Error inserting/updating cart settings:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
})
app.get("/api/settings/cart/:isfullcart", async (_req,res) => {
  const session = await res.locals.shopify.session;
  const { isfullcart } = _req.params;
      const SessionInDB = await SessionModel.findOne({ accessToken: session.accessToken })
    if (SessionInDB != null) {
      await SessionModel.findOneAndUpdate({ accessToken: session.accessToken }, { session })
    } else {
      //data;
      const sess = new SessionModel(session).save();
      // await sess.save();
    }
  try {
    const cartSettings = await CartModel.findOne({
      shop: session.shop,
      isFullCart: isfullcart
    });

    if (!cartSettings) {
      return res.status(404).json({ success: false, message: "Cart setting not found" });
    }

    res.status(200).json({ success: true, data: cartSettings });
  } catch (error) {
    console.error("Error retrieving cart setting:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
})

app.post("/api/settings/modules", async (_req,res) => {
  const session = await res.locals.shopify.session;
  const SessionInDB = await SessionModel.findOne({ accessToken: session.accessToken })
    if (SessionInDB != null) {
      await SessionModel.findOneAndUpdate({ accessToken: session.accessToken }, { session })
    } else {
      //data;
      const sess = new SessionModel(session).save();
      // await sess.save();
    }
  let hasKey = _req.body.hasOwnProperty('progress_bar'); 
  //if (hasKey) {
    console.log("req" , hasKey);
  //}
  const data = await ModuleModel.findOneAndUpdate(
    {shop:session.shop},
    {
      shop:session.shop,
      progress_bar:_req.body.includes('progress_bar'),
      cart_items:_req.body.includes('cart_items'),
      product_recommendations:_req.body.includes('product_recommendations'),
      discount:_req.body.includes('discount'),
      product_upsell:_req.body.includes('product_upsell'),
      checkout_button:_req.body.includes('checkout_button')
    },
    { upsert: true, new: true }
  );
})
app.get('/api/stickycartsetting', async (req, res) => {
  const shop = await res.locals.shopify.session.shop;

  try {
    const setting = await StickyCartSetting.findOne({ shop });
  
    if (!setting) {
      return res.status(404).json({ error: 'Sticky cart setting not found for the specified shop' });
    }
  
    res.status(200).json({ success: true, data: setting });
  } catch (error) {
    console.error('Error retrieving sticky cart setting:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/stickycartsetting',async (req, res) => {
  const shop = await res.locals.shopify.session.shop;
  const { icon_option, bg_color, icon_color, qty_bg_color, qty_text_color, sticky_cart_position, device_settings, button_action, show_section } = req.body.sticky_cart_setting;
console.log(req.body);
  // Create or update the sticky cart setting for the specified shop
  try {
    const setting = await StickyCartSetting.findOneAndUpdate(
      { shop },
      {
        icon_option,
        bg_color,
        icon_color,
        qty_bg_color,
        qty_text_color,
        sticky_cart_position,
        device_settings,
        button_action,
        show_section,
      },
      {
        new: true, // Return the updated document
        upsert: true, // Create a new document if it doesn't exist
        useFindAndModify: false, // To use the findOneAndUpdate method instead of deprecated findOneAndModify
      }
    );

    res.status(200).json({ success: true, data: setting });
  } catch (error) {
    console.error('Error updating sticky cart setting:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// GET endpoint to fetch all settingsData
app.get('/api/settingsData', async (req, res) => {
  const shop = await res.locals.shopify.session.shop;
  try {
    const setting = await SettingsData.findOne({ shop }).lean();
    if (!setting) {
      return res.status(404).json({ error: 'Setting not found for the specified shop' });
    }

    res.status(200).json({ success: true, data: setting });
  } catch (error) {
    console.error('Error retrieving Setting:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST endpoint to create a new settingsData document
app.post('/api/settingsData',async (req, res) => {
  const shop = await res.locals.shopify.session.shop;
  const { enable_carts, review_app, cart_limit, apply_discount, html_position, cart_html, cart_css } = req.body;
console.log(req.body);
  const newSettingsData = SettingsData.findOneAndUpdate(
    { shop },
    {
      enable_carts,
      review_app,
      cart_limit,
      apply_discount,
      html_position,
      cart_html,
      cart_css,
    },
    { new: true, upsert: true }
  )
    .then(() => {
      res.status(201).json({ message: 'SettingsData created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
app.get("/api/settings/modules", async (_req,res) => {
  const session = await res.locals.shopify.session;
  const data = await ModuleModel.find(
    {shop:session.shop}
  );
  res.status(200).json({ "success": 200, data });
})
app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});

app.get("/api/discounts/list", async (_req, res) => {
  let status = 200;
  let error = null;
  const  session = res.locals.shopify.session;
      try {
        const resp = await shopify.api.rest.PriceRule.all({
          session: session,
        });
        if (resp.length > 0) {
          // const priceRule = resp[0]; // Assuming there is only one price rule in the array
          // const gid = priceRule.id; // Access the `admin_graphql_api_id` property to get the `gid` value
          // console.log(gid);
          // const discount_codes = await shopify.api.rest.DiscountCode.all({
          //   session: session,
          //   price_rule_id: gid,
          // });
          res.status(status).send({ success: status === 200, resp });
        }
      } catch (e) {
        console.log(`Failed to process products/create: ${e.message}`);
      }
  res.status(status).send({ success: status === 200, error });
});

app.get("/api/discounts/list/:pricerule", async (_req, res) => {
  let status = 200;
  let error = null;
  const session = res.locals.shopify.session;
  const { pricerule } = _req.params;
  try {
    const resp = await shopify.api.rest.PriceRule.find({
      session: session,
      id: pricerule, // Use the pricerule parameter here
    });
    if (resp.length > 0) {
      const priceRule = resp[0]; // Assuming there is only one price rule in the array
      const gid = priceRule.admin_graphql_api_id; // Access the `admin_graphql_api_id` property to get the `gid` value
      console.log(gid);
      const discount_codes = await shopify.api.rest.DiscountCode.all({
        session: session,
        price_rule_id: gid,
      });
      res.status(status).send({ success: true, discount_codes }); // Simplify the success response
    } else {
      res.status(404).send({ success: false, error: "Price rule not found" }); // Respond with 404 if the price rule is not found
    }
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    res.status(500).send({ success: false, error: "Failed to process the request" }); // Respond with 500 if there's an error
  }
});

app.get("/api/products/import", async (_req, res) => {
  let status = 200;
  let error = null;
  const session = res.locals.shopify.session;

  try {
    const resp = await shopify.api.rest.Product.all({
      session: session
    });
    
    const importResults = []; // To collect import results

    for (const productData of resp) {
      const productId = productData.id;

      const existingProduct = await ProductModel.findOne({ id: productId , shop: session.shop });

      if (!existingProduct) {
        const newProduct = new ProductModel({
          shop: session.shop ,
          ...productData
          
        });

        await newProduct.save();
        await newProduct.save();
        importResults.push({ success: true, error: null, productId });
      } else {
        importResults.push({ success: false, error: "Product already exists", productId });
      }
    }
    
    res.status(200).json(importResults); // Send the import results after the loop

  } catch (e) {
    console.log(`Failed to process products/import: ${e.message}`);
    res.status(500).json({ success: false, error: "Failed to process the request" });
  }
});



app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

app.listen(PORT);
