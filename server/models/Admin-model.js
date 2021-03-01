const { Schema, model } = require("mongoose");

const Admin = new Schema({
  adminEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model("Admin", Admin);
