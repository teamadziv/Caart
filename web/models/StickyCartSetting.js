import mongoose from "mongoose";

const StickyCartSettingSchema = new mongoose.Schema({
  shop:{
    type: String,
    required: true
},
  icon_option: {
    type: String,
    required: true,
  },
  bg_color: {
    type: String,
    required: true,
  },
  icon_color: {
    type: String,
    required: true,
  },
  qty_bg_color: {
    type: String,
    required: true,
  },
  qty_text_color: {
    type: String,
    required: true,
  },
  sticky_cart_position: {
    type: String,
    required: true,
  },
  device_settings: {
    type: String,
    required: true,
  },
  button_action: {
    type: String,
    required: true,
  },
  show_section: {
    type: Boolean,
    required: true,
  },
});

const StickyCartSetting = mongoose.model('StickyCartSetting', StickyCartSettingSchema);

export default StickyCartSetting;