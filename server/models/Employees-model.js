const { Schema, model } = require("mongoose");

const Employees = new Schema({
  employeeName: { type: String },
  employeeSurname: { type: String },
  employeePosition: { type: String, },
  skills: { type: String },
  expiriense: { type: String },
  dateStartWorking: { type: String },
  info: { type: String },
  avatar: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: "Projects" }] || [],
});

module.exports = model("Employees", Employees);
