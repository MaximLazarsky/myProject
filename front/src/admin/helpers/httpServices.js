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

export const fetchAddClient = async (name, surneme, email) => {
  const response = await axios.post("http://localhost:5000/api/", 
  {
    clientName: name,
    clientSurname: surneme,
    clientEmail: email
  },
  {
    headers: { Authorization: localStorage.getItem("Authorization") },
  })
  return response;
}