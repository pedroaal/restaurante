import mongoose, {Schema, model, models} from 'mongoose';

const MODEL_NAME = 'User';

const schema = new Schema(
  // columnas de la tabla
  {
    ci: {
      type: String,
      // required: false,
      // match: /[/d]/,
      index: {
        unique: true,
        sparse: true
      }
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      // required: true,
      trim: true,
      maxlength: 7
    },
    movil: {
      type: String,
      // required: true,
      trim: true,
      maxlength: 10
    },
    address: {
      type: String,
      // required: true,
      trim: true,
    },
    genre: {
      type: Boolean,
      // required: true,
    },
    birthday: {
      type: Date,
      // required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: 0,
    },
    // role_id: {
    //   type: Schema.ObjectId,
    //   required: true,
    // },
    // store_id: {
    //   type: Schema.ObjectId,
    //   // required: true,
    // },
    status: {
      type: Boolean,
      required: true,
      default: 1,
    },
  },
  // created_at, updated_at
  {
    timestamps: true,
  },
);

schema.method('getName', function(){
  return this.firstName;
});

schema.method('getCompleteName', function(){
  return this.firstName + ' ' + this.lastName;
});


export default models[MODEL_NAME] || model(MODEL_NAME, schema, 'users');