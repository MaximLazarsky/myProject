const Projects = require("../models/Projects-model");
const Clients = require("../models/Clients-model");
const Admin = require("../models/Admin-model");
const Employees = require("../models/Employees-model");

const addProject = async (req, res) => {
  try {
    
    const {
      client,
      projectName,
      task,
      skills,
      discription,
      dateStartWorking,
      dateStopWorking,
      imgs,
      linkProdaction,
      isActive,
      isSuccess,
      earned,
      platform,
      employee,
    } = req.body;
    
    const project = await new Projects({
      client,
      projectName,
      task,
      skills,
      discription,
      dateStartWorking,
      dateStopWorking,
      imgs,
      linkProdaction,
      isActive: isActive,
      isSuccess: isSuccess,
      earned: earned || null,
      platform,
      employee,
    });

    await project.save();
    
    const targetClient = await Clients.findById({ _id: client });
    await targetClient.projects.push(project._id);
    await targetClient.save();

    const targetEmployee = await Employees.findById({ _id: employee });
    targetEmployee.projects.push(project._id);
    await targetEmployee.save();

    const admin = await Admin.findById(req.user._id);
    admin.projects.push(project._id);
    await admin.save();

    return res.json({ project, message: "project was added" });
  } catch (e) {
    console.log(e);
    res.json({ e: e, message: "something wrong" });
  }
};

const updateProject = async (req, res) => {
  try {
    const {
      projectName,
      task,
      skills,
      discription,
      dateStartWorking,
      dateStopWorking,
      imgs,
      linkProdaction,
      isActive,
      isSuccess,
      earned,
      platform,
    } = req.body;
    const { id } = req.params;

    const project = await Projects.findByIdAndUpdate(
      { _id: id },
      {
        projectName,
        task,
        skills,
        discription,
        dateStartWorking,
        dateStopWorking,
        imgs,
        linkProdaction,
        isActive,
        isSuccess,
        earned,
        platform,
      },
      { new: true }
      
    );
    

    
    return res.json({ project, message: "Project was updated" });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const getProjectsAdmin = async (req, res) => {
  try {
    const projectsList = await Projects.find();
    return res.json({ projectsList });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const getProjects = async (req, res) => {
  try {
    const projectsList = await Projects.find({
      isActive: false,
      isSuccess: true,
    });
    const projects = projectsList.map((project) => ({
      projectName: project.projectName,
      task: project.task,
      skills: project.skills,
      discription: project.discription,
      dateStartWorking: project.dateStartWorking,
      dateStopWorking: project.dateStopWorking,
      imgs: project.imgs,
      linkProdaction: project.linkProdaction,
    }));

    return res.json({ projects });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Projects.findByIdAndDelete(req.params.id);
    const targetClient = await Clients.findById({ _id: project.client });
    await targetClient.projects.splice(
      targetClient.projects.indexOf(req.params.id),
      1
    );
    await targetClient.save();
    return res.json({ message: "Project was deleted" });
  } catch (e) {
    console.log(e);
    res.json({ message: "something wrong" });
  }
};

module.exports = {
  addProject,
  updateProject,
  getProjectsAdmin,
  getProjects,
  deleteProject,
};
