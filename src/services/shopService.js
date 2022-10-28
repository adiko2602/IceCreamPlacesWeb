import axios from "axios";

const api = "http://localhost:5014";
const apiShop = `${api}/shops/`;

export const getShop = async (id) => {
  let res = await axios.get(`${apiShop}${id}`);
  return res;
};

export const getShops = async () => {
  let res = await axios.get(apiShop);
  return res;
};

export const createShop = async (name, address, flavors) => {
  let body = {
    name: name,
    address: address,
    flavors: flavors,
  };

  console.log(body);
  let res = await axios.post(`${apiShop}`, body);
  return res;
};

export const updateShop = async () => {
  // return res;
};

export const deleteShop = async (id) => {
  let res = await axios.delete(`${apiShop}${id}`);
  return res;
};
