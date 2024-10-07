import axiosApi from "../axios-common";

const post = (url, data) => {
  return axiosApi.post(url, data);
};

const LoginService = {
  post,
};

export default LoginService;
