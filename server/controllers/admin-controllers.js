const bcrypt = require("bcryptjs");
const config = require("config");
const Admin = require("../models/Admin-model");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

const addAdmin = async (req, res) => {
  try {
    const { adminEmail, password, employees, clients, projects } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      adminEmail,
      password: hashPassword,
      employees: employees || [],
      clients: clients || [],
      projects: projects || [],
    });

    await admin.save();
    return res.json({ admin });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { adminEmail, password } = req.body;

    const admin = await Admin.findOne({ adminEmail });

    if (!admin) {
      return res.status(401).json({ message: "Wrong email" });
    }

    const isPassValid = bcrypt.compareSync(password, admin.password);
    if (!isPassValid) {
      return res.status(401).json({ message: "Uncorrect password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      config.get("secretKey", { expiresIn: "1h" })
    );
    return res.json({
      token,
    });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const getData = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user._id)
      .populate({
        path: "employees",
        model: "Employees",
        populate: {
          path: "projects",
          model: "Projects",
          populate: { path: "client", model: "Clients" },
        },
      })
      .populate({
        path: "clients", 
        model: "Clients", 
        populate: { path: "projects", model: "Projects" }
      })
      .populate("projects");

    const adminData = {
      employees: admin.employees,
      clients: admin.clients,
      projects: admin.projects,
    };

    return res.json({
      adminData,
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
};

module.exports = { addAdmin, loginAdmin, getData };
