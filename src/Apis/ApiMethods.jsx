import axios from "axios";

export const getApiWithoutToken = (path) => {
  return axios.get(path, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
