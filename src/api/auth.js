import axios from "axios";
import { BASE_URL } from "../configs/constants";
const checkToken = (token) => {
  axios.defaults.headers.authorization = token;
  return new Promise((resolve, reject) => {
    if (!token) {
      return reject("Token not found");
    } else {
      axios
        .post(BASE_URL + "/auth/login/check-token")
        .then((response) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    }
  });
};
export { checkToken };