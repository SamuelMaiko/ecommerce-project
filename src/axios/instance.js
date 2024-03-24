import axios from "axios";
import { getCookie } from "../Cookies/Cookie";

const csrftoken = getCookie("csrftoken");

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": csrftoken,
    // "X-CSRFToken": getCSRFToken(),
    Authorization: `Token ${getCookie("access_token")}`,
  },
});

export default instance;
