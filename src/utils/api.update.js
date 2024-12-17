import axios from "axios";
import { apiHost } from "./host";

export const updateUser = (id, data) => {
  return axios.put(`${apiHost}/api/v1/user/${id}`, data);
};
