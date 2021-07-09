import axios from "axios";

const API_URL = "https://prlbank.com/api/";

const register = (
  firstName,
  lastName,
  email,
  mobilePhoneNumber,
  ssn,
  address,
  login,
  password,
  langKey
) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    email,
    mobilePhoneNumber,
    ssn,
    address,
    login,
    password,
    langKey,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "authenticate", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.id_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
