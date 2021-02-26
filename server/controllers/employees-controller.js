const EmployeesModel = require("../models/Employees-model");

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
    const employee = new EmployeesModel({
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
    const employeesList = await EmployeesModel.find();

    const employeesInfoList = employeesList.map((employee) => ({
      id: employee._id,
      employeeName: employee.employeeName,
      employeeSurname: employee.employeeSurname,
      employeePosition: employee.employeePosition,
      skills: employee.skills,
      expiriense: employee.expiriense,
      dateStartWorking: employee.dateStartWorking,
      info: employee.info,
      avatar: employee.avatar,
    }));

    return res.json({ employeesInfoList });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await EmployeesModel.findByIdAndDelete(req.params.id);

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

    const employee = await EmployeesModel.findByIdAndUpdate(
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
