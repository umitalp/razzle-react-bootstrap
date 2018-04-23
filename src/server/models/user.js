import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  surname: String,
  address: String,
  city: String,
  country: String,
  updated: { type: Date, default: Date.now }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model("User", userSchema);
