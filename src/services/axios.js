import axios from "axios";

export const baseUrl = "https://ice-cream-places-api.vercel.app";
// export const baseUrl = "http://localhost:5014";

export const useAxios = () => {
  return axios.create({
    baseURL: baseUrl,
  });
};
