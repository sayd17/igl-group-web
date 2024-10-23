import axiosApi from "../axios-common";

const route = "album";

const post = (url, data) => {
  return axiosApi.post(url, data);
};

const get = (id, query) => {
  return axiosApi.get(`/${route}/${id}${query}`);
};

const create = (data) => {
  return axiosApi.post("/${route}", data);
};

const update = (id, data) => {
  return axiosApi.put(`/${route}/${id}`, data);
};

const remove = (id) => {
  return axiosApi.delete(`/${route}/${id}`);
};

const getAll = (query = "") => {
  return axiosApi.get(`/${route}${query}`);
};

const AlbumService = {
  post,
  update,
  remove,
  getAll,
};

export default AlbumService;
