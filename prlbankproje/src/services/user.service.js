import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://prlbank.com/api/";

const getUserDetails = () => {
  return axios.get(API_URL + "account", { headers: authHeader() });
};

export default {
  getUserDetails,
};
