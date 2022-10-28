import axios from "axios";

const api = "http://localhost:5014";
const apiAuth = `${api}/auth/`;

export const register = async (email, password) => {
  let body = {
    email: email,
    password: password,
  };

  let res = await axios.post(`${apiAuth}register`, body);
  return res;
};

export const login = async (email, password) => {
  let body = {
    email: email,
    password: password,
  };

  let res = await axios.post(`${apiAuth}login`, body);
  return res;
};
