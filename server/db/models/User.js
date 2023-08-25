const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    subscription: {
      type: Date,
      required: true,
    },
    passNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    tel: {
      type: Number,
      required: true,
      unique: true,
    },
    plan: {
      months: Number,
      cost: Number,
    },
    role: {
      type: String,
      required: true,
    },
    subscriptionExp: {
      type: Date,
      required: true,
    },
    card: {
      type: Object,
      required: true,
    },
    gym: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
      default: null,
    },
  },
  { strict: true, timestamps: true, versionKey: false }
);

const User = model("User", userSchema);

module.exports = User;
