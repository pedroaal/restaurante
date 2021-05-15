import mongoose, {Schema} from 'mongoose';

const MODEL_NAME = 'Product';

const schema = new Schema(
  // columnas de la tabla
  {
    store_id: {
      type: Schema.ObjectId,
      // required: true,
    },
    category_id: {
      type: Schema.ObjectId,
      // required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    iva_id: {
      type: Schema.ObjectId,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    sort: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  // created_at, updated_at
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema, 'products');