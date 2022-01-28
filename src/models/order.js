import mongoose, { Schema } from 'mongoose';
import { schema as productSchema } from '@/models/product';

const MODEL_NAME = 'Order';

const cart_product = new Schema({
  quantity: Number,
  price: Number,
  product: productSchema,
})

const schema = new Schema(
  // columnas de la tabla
  {
    store_id: {
      type: Schema.ObjectId,
      required: true,
    },
    table: {
      type: Number,
      required: true,
    },
    coupon: {
      type: String,
      required: false,
    },
    total: {
      type: Number,
      required: true,
    },
    cart: {
      type: [cart_product],
      required: true,
    },
    finish: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  // created_at, updated_at
  {
    timestamps: true,
  }
);

const orderModel = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema, 'orders')
export default orderModel;