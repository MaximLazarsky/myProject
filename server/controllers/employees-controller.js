const Employees = require("../models/Employees-model");

const addNewEmployee = async (req, res) => {
  try {
    const {
      employeeName,
      employeeSurname,
      employeePosition,
      skills,
      expiriense,
      dateStartWorking,
      info,
      avatar,
    } = req.body;
    const employee = new Employees({
      employeeName,
      employeeSurname,
      employeePosition,
      skills: skills || null,
      expiriense: expiriense || null,
      dateStartWorking,
      info: info || null,
      avatar: avatar || null,
      clients: [],
      projects: [],
    });

    await employee.save();
    return res.json({ employee, message: "employee was added" });
  } catch (e) {
    console.log(e);
    res.json({ e: e, message: "something wrong" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employeesList = await Employees.find();

    return res.json({ employeesList });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employees.findByIdAndDelete(req.params.id);

    return res.json({ message: "Employee was deleted" });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const {
      employeeName,
      employeeSurname,
      employeePosition,
      skills,
      expiriense,
      dateStartWorking,
      info,
      avatar,
      clients,
      projects,
    } = req.body;
    const { id } = req.params;

    const employee = await Employees.findByIdAndUpdate(
      { _id: id },
      {
        employeeName,
        employeeSurname,
        employeePosition,
        skills,
        expiriense,
        dateStartWorking,
        info,
        avatar,
        clients,
        projects,
      },
      { new: true }
    );
    return res.json({ employee, message: "Employee was updated" });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

module.exports = {
  addNewEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
};
