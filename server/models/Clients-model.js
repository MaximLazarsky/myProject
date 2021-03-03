const { Schema, model } = require("mongoose");

const Clients = new Schema({
  clientName: { type: String, required: true },
  clientSurname: { type: String, required: true },
  clientEmail: { type: String, required: true },
  projects: [{ type: Schema.Types.ObjectId, ref: "Projects" }],
});

module.exports = model("Clients", Clients);
