import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    shop:{
        type: String,
        required: true
    },
    isFullCart:{
      type:Boolean,
      required:true,
      default:0
    },
    cart_header: {
        heading: {
            type: String,
            required: true
          },
          color: {
            type: String,
            required: true
          },
          show_section: {
            type: Boolean,
            required: true
          } 
    },
    announcement: {
              heading: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            bg_color: {
                type: String,
                required: true
            },
            timer: {
                type: String,
                required: true
            },
            timer_type: {
                type: String,
                required: true
            },
            timer_end_text: {
                type: String,
                required: true
            },
            timer_action: {
                type: String,
                required: true
            },
            show_section: {
                type: Boolean,
                required: true
            }
    },
    progress_bar: {
            bar_background_color: {
              type: String,
              required: true
          },
          bar_foreground_color: {
              type: String,
              required: true
          },
          reward_basis: {
              type: String,
              required: true
          },
          text_after_completing: {
              type: String,
              required: true
          },
          show_section: {
              type: Boolean,
              required: true
          },
          total_tiers: {
              type: Number,
              required: true
          },
          first_tier_minimum_total: {
              type: Number,
              required: true
          },
          first_tier_reward_count: {
              type: Number,
              required: true
          },
          first_tier_description: {
              type: String,
              required: true
          },
          first_tier_reward_count_text: {
              type: String,
              required: true
          },
          first_tier_minimum_total_text: {
              type: String,
              required: true
          },
          show_first_tier_section: {
              type: Boolean,
              required: true
          },
          second_tier_minimum_total: {
              type: Number,
              required: true
          },
          second_tier_reward_count: {
              type: Number,
              required: true
          },
          second_tier_description: {
              type: String,
              required: true
          },
          second_tier_reward_count_text: {
              type: String,
              required: true
          },
          second_tier_minimum_total_text: {
              type: String,
              required: true
          },
          show_second_tier_section: {
              type: Boolean,
              required: true
          },
          third_tier_minimum_total: {
              type: Number,
              required: true
          },
          third_tier_reward_count: {
              type: Number,
              required: true
          },
          third_tier_description: {
              type: String,
              required: true
          },
          third_tier_reward_count_text: {
              type: String,
              required: true
          },
          third_tier_minimum_total_text: {
              type: String,
              required: true
          },
          show_third_tier_section: {
              type: Boolean,
              required: true
          }
    },
    cart_items: {
        inherit_font: {
            type: Boolean,
            required: true
          },
          show_strike_price: {
            type: Boolean,
            required: true
          },
          background_color: {
            type: String,
            required: true
          },
          text_color: {
            type: String,
            required: true
          },
          show_section: {
            type: Boolean,
            required: true
          }
    },
    order_notes: {
        notes_title: {
            type: String,
            required: true
          },
          notes_placeholder: {
            type: String,
            required: true
          },
          show_section: {
            type: Boolean,
            required: true
          }
    },
    discount_codes: {
        discount_placeholder: {
            type: String,
            required: true
          },
          discount_btn_text: {
            type: String,
            required: true
          },
          show_section: {
            type: Boolean,
            required: true
          }
    },
    checkout_btns: {
        checkout_btn_text: {
            type: String,
            required: true
          },
          checkout_btn_color: {
            type: String,
            required: true
          },
          checkout_btn_color_hover: {
            type: String,
            required: true
          },
          checkout_btn_text_color: {
            type: String,
            required: true
          },
          checkout_btn_text_color_hover: {
            type: String,
            required: true
          },
          continue_shopping_btn_text: {
            type: String,
            required: true
          },
          continue_shopping_btn_color: {
            type: String,
            required: true
          },
          continue_shopping_btn_color_hover: {
            type: String,
            required: true
          },
          continue_shopping_btn_text_color: {
            type: String,
            required: true
          },
          continue_shopping_btn_text_color_hover: {
            type: String,
            required: true
          },
          show_section: {
            type: Boolean,
            required: true
          }
    },
    trust_badge: {
        img: {
            type: String,
            required: true
          },
          position: {
            type: String,
            required: true
          },
          show_section: {
            type: Boolean,
            required: true
          }
    },
    upsells: {
        use_ai_recommend: {
            type: Boolean,
            required: true
          },
          show_upsell_in_cart: {
            type: Boolean,
            required: true
          },
          upsell_title: {
            type: String,
            required: true
          },
          upsell_position: {
            type: String,
            required: true
          },
          upsell_direction: {
            type: String,
            required: true
          },
          show_section: {
            type: Boolean,
            required: true
          },
          upsell_products:
          {
            id: {
              type: String,
              required: false
            },
            trigger: {
              type: String,
              required: false
            },
            upsell_product: {
              type: String,
              required: false
            }
          }
    },
    created_at:{
        type: Date, default: Date.now
    },
  });

const CartModel = mongoose.model("Cart", cartSchema);
export default CartModel;