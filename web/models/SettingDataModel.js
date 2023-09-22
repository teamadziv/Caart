import mongoose from "mongoose";

const settingsDataSchema = new mongoose.Schema({
    shop:{
        type: String,
        required: true
    },
  enable_carts: {
    full_cart: {
      type: Boolean,
      default: false,
    },
    drawer_cart: {
      type: Boolean,
      default: false,
    },
    sticky_cart: {
      type: Boolean,
      default: false,
    },
  },
  review_app: {
    type: String,
    default: '',
  },
  cart_limit: {
    type: Number,
    default: 0,
  },
  apply_discount: {
    type: String,
    enum: ['both', 'item', 'cart'],
    default: 'both',
  },
  html_position: {
    type: String,
    default: '',
  },
  cart_html: {
    type: String,
    default: '',
  },
  cart_css: {
    type: String,
    default: '',
  },
});

const SettingsData = mongoose.model('SettingsData', settingsDataSchema);

export default SettingsData;
