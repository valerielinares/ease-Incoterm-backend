const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  company: {type: String, required: true},
  position: {type : String, required: true},
  email: {
    type: String,
    required: true,
    unique: true,
    match:  /^.+@.+\..+$/
  },
  phoneNumber: {type: String, required: true},
  encryptedPassword: { type: String, required: true },
  role: {
    type: String,
    enum: [ "normal", "admin" ],
    default: "normal",
    required: true
  },
}, {
  timestamps: true
});

userSchema.virtual("isAdmin").get(function () {
  return this.role === "admin";
});

const User = mongoose.model("User", userSchema);

module.exports = User;