import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'Category';

const schema = new Schema(
  // columnas de la tabla
  {
    store_id: {
      type: Schema.ObjectId,
      // required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sort: {
      type: Number,
      required: true,
      default: 0
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  // created_at, updated_at
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema, 'categories');