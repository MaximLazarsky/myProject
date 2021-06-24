const Clients = require("../models/Clients-model");
const { validationResult } = require("express-validator");
const Admin = require("../models/Admin-model");

const addClient = async (req, res) => {
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) return res.json({ message: "not valid email" });

    const { clientName, clientSurname, clientEmail, projects } = req.body;

    const checkClient = await Clients.findOne({ clientEmail });
    if (checkClient)
      return res.json({ checkClient, message: "client already exist" });

    const client = new Clients({
      clientName,
      clientSurname,
      clientEmail,
      projects: projects || [],
    });

    await client.save();

    const admin = await Admin.findById(req.user._id);
    admin.clients.push(client._id);
    await admin.save();

    return res.json({ client, message: "client was added" });
  } catch (e) {
    console.log(e);
    res.json({ e: e, message: "something wrong" });
  }
};

const getClients = async (req, res) => {
  try {
    const clientsList = await Clients.find();

    return res.json({ clientsList });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const deleteClient = async (req, res) => {
  try {
    await Clients.findByIdAndDelete(req.params.id);

    return res.json({ message: "Client was deleted" });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const updateClient = async (req, res) => {
  try {
    const { clientName, clientSurname, clientEmail, projects } = req.body;
    const { id } = req.params;

    const err = validationResult(req);
    if (!err.isEmpty()) return res.json({ message: "not valid email" });

    const client = await Clients.findByIdAndUpdate(
      { _id: id },
      {
        clientName,
        clientSurname,
        clientEmail,
        projects: projects || [],
      },
      { new: true }
    );
    return res.json({ client, message: "Client was updated" });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

module.exports = {
  addClient,
  getClients,
  deleteClient,
  updateClient,
};
