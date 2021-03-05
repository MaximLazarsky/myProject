import axios from "axios";

export const fetchLoginAdmin = async (adminEmail, password) => {
  const response = await axios.post("http://localhost:5000/api/admin", {
    adminEmail,
    password,
  });
  return response;
};
