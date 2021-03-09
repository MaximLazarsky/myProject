const { Schema, model } = require("mongoose");

const Admin = new Schema({
  adminEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  employees: [{ type: Schema.Types.ObjectId, ref: "Employees" }],
  clients: [{ type: Schema.Types.ObjectId, ref: "Clients" }],
  projects: [{ type: Schema.Types.ObjectId, ref: "Projects" }],
});

module.exports = model("Admin", Admin);
