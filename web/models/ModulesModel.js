import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema({
    shop:{
        type: String,
        required: true
    },
    progress_bar: {
      type: Boolean,
      required: true
      },
    cart_items: {
        type: Boolean,
        required: true
        },  
    product_recommendations: {
          type: Boolean,
          required: true
          },
    discount: {
            type: Boolean,
            required: true
            },
    product_upsell: {
              type: Boolean,
              required: true
              },
    checkout_button: {
                type: Boolean,
                required: true
                },
    created_at:{
        type: Date, default: Date.now
    },
  });

const ModuleModel = mongoose.model("Modules", ModuleSchema);
export default ModuleModel;