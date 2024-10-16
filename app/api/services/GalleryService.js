import axiosApi from "../axios-common.js";

const route = "gallery";

const getAll = (query = "") => {
  return axiosApi.get(`/${route}${query}`);
};

const get = (id, query) => {
  return axiosApi.get(`/${route}/${id}${query}`);
};

const create = (data) => {
  return axiosApi.post(`/${route}`, data);
};

const update = (id, data) => {
  return axiosApi.put(`/${route}/${id}`, data);
};

const remove = (id) => {
  return axiosApi.delete(`/${route}/${id}`);
};

const GalleryService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default GalleryService;
