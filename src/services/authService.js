import axios from "axios";

const api = "http://localhost:5014";

export const register = async (email, password, owner) => {
  let body = {
    email: email,
    password: password,
    type: owner ? "owner" : "",
  };

  const res = await axios.post(`${api}/auth/register`, body);
  return res;
};

export const apiTest = async () => {
  await axios
    .get(`${api}/sample`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export const login = async (email, password) => {
  console.log(email, password);
  await axios
    .post(`${api}/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
