import axios from "axios";

export const fetchLoginAdmin = async (adminEmail, password) => {
  const response = await axios.post("http://localhost:5000/api/admin", {
    adminEmail,
    password,
  });
  return response;
};

export const fetchGetData = async () => {
  const response = await axios.get("http://localhost:5000/api/admin", {
    headers: { Authorization: localStorage.getItem("Authorization") },
  });
  return response;
};

export const fetchAddClient = async (name, surname, email) => {
  const response = await axios.post("http://localhost:5000/api/clients", 
  {
    clientName: name,
    clientSurname: surname,
    clientEmail: email
  },
  {
    headers: { Authorization: localStorage.getItem("Authorization") },
  })
  return response;
}

export const fetchDeleteClient = async (clientId) => {
  const response = await axios.delete(`http://localhost:5000/api/clients/${clientId}`, 
  {
    headers: { Authorization: localStorage.getItem("Authorization") }
  })
    return response;
}

export const fetchUpdateClient = async (clientId, name, surname, email) => {
  const response = await axios.put(`http://localhost:5000/api/clients/${clientId}`, 
  {
    clientName: name,
    clientSurname: surname,
    clientEmail: email
  },
  {
    headers: { Authorization: localStorage.getItem("Authorization") }
  })
    return response;
}

export const fetchAddEmployee = async (avatar, name, surname, position, skills, expiriense, dateStartWorking, info) => {
  const response = await axios.post("http://localhost:5000/api/employees", 
  {
    avatar: avatar,
    employeeName: name,
    employeeSurname: surname,
    employeePosition: position,
    skills: skills,
    expiriense: expiriense,
    dateStartWorking: dateStartWorking,
    info: info
  },
  {
    headers: { Authorization: localStorage.getItem("Authorization") },
  })
  return response;
}

export const fetchDeleteEmployee = async (employeeId) => {
  const response = await axios.delete(`http://localhost:5000/api/employees/${employeeId}`, 
  {
    headers: { Authorization: localStorage.getItem("Authorization") }
  })
    return response;
}

export const fetchUpdateEmployee = async (employeeId, name, surname, position, skills, expiriense, dateStartWorking, info) => {
  const response = await axios.put(`http://localhost:5000/api/employees/${employeeId}`, 
  {
      employeeName: name,
      employeeSurname: surname,
      employeePosition: position,
      skills: skills,
      expiriense: expiriense,
      dateStartWorking: dateStartWorking,
      info: info
  },
  {
    headers: { Authorization: localStorage.getItem("Authorization") },
  })
  return response;
}

export const fetchAddImg = async (formData) => {
    try {
    const res = await axios.post("http://localhost:5000/api/file", 
      formData,
    {
      headers: { Authorization: localStorage.getItem("Authorization") },
    })
    return res;
  } catch (err) {
    if (err.response.status === 500) {
      console.log('There was a problem with the server')
    } else {
      console.log(err.response.data.msg)
    }
  }
}