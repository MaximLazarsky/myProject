const { Schema, model, ObjectId } = require("mongoose");

const Projects = new Schema({
  client: { type: Schema.Types.ObjectId, required: true, ref: "Clients" },
  projectName: { type: String, required: true },
  task: { type: String },
  skills: { type: String },
  discription: { type: String },
  dateStartWorking: { type: String, required: true },
  dateStopWorking: { type: String },
  imgs: [{ type: String }],
  linkProdaction: { type: String },
  isActive: { type: Boolean },
  isSuccess: { type: Boolean },
  earned: { type: String },
  platform: { type: String },
  employee: { type: Schema.Types.ObjectId, ref: "Employees" },
});

module.exports = model("Projects", Projects);
