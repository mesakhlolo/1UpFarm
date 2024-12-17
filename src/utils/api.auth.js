import axios from "axios";
import { apiHost } from "./host";

const header = () => {
  const token = sessionStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const userRegister = (data) => {
  return axios.post(`${apiHost}/api/v1/auth/register`, data);
};

export const userLogin = (data) => {
  return axios.post(`${apiHost}/api/v1/auth/login`, data);
};

export const getProfile = () => {
  return axios.get(`${apiHost}/api/v1/auth/me`, header());
};
