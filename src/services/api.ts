import axios from "axios";
import { AppRoute } from "../const";
import browserHistory from "../browser-history";

const BACKEND_URL = `http://c08f0020c9d0.ngrok.io`;
const REQUEST_TIMEOUT = 5000;

let headers: any = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
  console.log(headers);
}

console.log(headers);

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
  headers: headers,
});

const HttpCode = {
  UNAUTHORIZED: 401,
};

const onSuccess = (response: any) => response;

const onFail = (err: any) => {
  const { response } = err;

  if (response.status === HttpCode.UNAUTHORIZED) {
    browserHistory.push(AppRoute.LOGIN);
    throw err;
  }

  throw err;
};

axiosInstance.interceptors.response.use(onSuccess, onFail);
