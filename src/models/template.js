import mongoose, {Schema} from 'mongoose';

const MODEL_NAME = 'Model';

const schema = new Schema(
  // columnas de la tabla
  {
    clm: {
      type: String,
      required: true,
    },
  },
  // created_at, updated_at
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema, 'model_plural');