import axiosApi from "../axios-common.js";

const route = "team";

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

const removeAll = () => {
  return axiosApi.delete(`/${route}`);
};

const auhtenticate = (userId) => {
  const url = userId ? `/${route}/${userId}` : "/${route}";
  return axiosApi.get(url);
};

const TeamService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default TeamService;
