const { Schema, model, ObjectId } = require("mongoose");

const Projects = new Schema({
  client: { type: ObjectId, required: true },
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
});

module.exports = model("Projects", Projects);
