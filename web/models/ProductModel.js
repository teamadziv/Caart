import mongoose from "mongoose";

// Define the schema for the product data
const productSchema = new mongoose.Schema({
  shop: String,
  body_html: String,
  created_at: Date,
  handle: String,
  id: Number,
  images: [
    {
      id: Number,
      product_id: Number,
      position: Number,
      created_at: Date,
      updated_at: Date,
      width: Number,
      height: Number,
      src: String,
      variant_ids: [Number]
    }
  ],
  options: {
    id: Number,
    product_id: Number,
    name: String,
    position: Number,
    values: [String]
  },
  product_type: String,
  published_at: Date,
  published_scope: String,
  status: String,
  tags: String,
  template_suffix: String,
  title: String,
  updated_at: Date,
  variants: [
    {
      barcode: String,
      compare_at_price: Number,
      created_at: Date,
      fulfillment_service: String,
      grams: Number,
      weight: Number,
      weight_unit: String,
      id: Number,
      inventory_item_id: Number,
      inventory_management: String,
      inventory_policy: String,
      inventory_quantity: Number,
      option1: String,
      position: Number,
      price: Number,
      product_id: Number,
      requires_shipping: Boolean,
      sku: String,
      taxable: Boolean,
      title: String,
      updated_at: Date
    }
  ],
  vendor: String
});

// Create the Mongoose model
const Product = mongoose.model('Product', productSchema);

export default Product;


