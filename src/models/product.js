import mongoose, { Schema } from 'mongoose';

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
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    // slug: {
    //   type: String,
    //   required: true,
    // },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    iva: {
      type: Number,
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

schema.method('getIva', () => {
  return this.iva_id;
});

const productModel = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema, 'products')
export { productModel as default, schema }