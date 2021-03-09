const { Schema, model } = require("mongoose");

const Clients = new Schema({
  clientName: { type: String, required: true },
  clientSurname: { type: String, required: true },
  clientEmail: { type: String, required: true },
});

module.exports = model("Clients", Clients);
