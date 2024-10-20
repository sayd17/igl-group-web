import axiosApi from "../axios-common.js";

const route = "team-member";

const getAll = (query = "") => {
  return axiosApi.get(`/${route}${query}`);
};

const getTeamMembersByTeamId = (data) => {
  return axiosApi.post(`/team-members-by-team-id`, data);
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

const TeamMemberService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  getTeamMembersByTeamId,
};

export default TeamMemberService;
