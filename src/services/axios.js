import axios from "axios";

const baseUrl = "https://ice-cream-places-api.vercel.app/";

export const useAxios = () => {
  return axios.create({
    baseURL: baseUrl,
  });
};
