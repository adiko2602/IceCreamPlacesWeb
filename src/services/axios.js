import axios from "axios";

const baseUrl =
  "https://ice-cream-places-api-git-old-dev-refactor-ice-cream-places-icp.vercel.app/";

export const useAxios = () => {
  return axios.create({
    baseURL: baseUrl,
  });
};
