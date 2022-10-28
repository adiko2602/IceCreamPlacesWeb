import axios from "axios";

const api = "http://localhost:5014";
const apiShop = `${api}/shop/`;

export const getShop = async (id) => {
  let res = await axios.get(`${apiShop}${id}`);
  return res;
};

export const getShops = async () => {
  let res = await axios.get(apiShop);
  return res;
};

export const addShop = async (name, address, flavors) => {
  let body = {
    name: name,
    address: address,
    flavors: flavors,
  };

  let res = await axios.post(`${apiShop}/add`, body);
  return res;
};
