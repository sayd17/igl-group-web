import axios from "axios";
import { useStateContext } from "../context/contextProvider";

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// axiosApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem("ACCESS_TOKEN");
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    // if (response.status === 401) {
    //   localStorage.removeItem("ACCESS_TOKEN");
    //   // window.location.reload();
    // } else if (response.status === 404) {
    //   //Show not found
    // }

    throw error;
  }
);

export default axiosApi;
