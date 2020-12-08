const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  stripeId: {
    tupe: String,
    required: true,
  },
  subscriptionId: {
    type: String,
    required: false,
  },
  subscribedDate: {
    type: Date,
    required: false,
  },
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
  },
  customer: {
    type: CustomerSchema,
    default: null,
  },
});

module.exports = mongoose.model("User", UserSchema);
