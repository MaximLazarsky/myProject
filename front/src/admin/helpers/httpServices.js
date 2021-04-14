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