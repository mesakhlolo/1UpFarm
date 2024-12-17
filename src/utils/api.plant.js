import axios from "axios";
import { apiHost } from "./host";

const header = () => {
    const token = sessionStorage.getItem("token");
    return {
        headers: { Authorization: `Bearer ${token}` }
    };
}

export const getPlants = () => {
    return axios.get(`${apiHost}/api/v1/plant`, header());
}