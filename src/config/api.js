import axios from "axios";

export const Api = {
  postStudents: (data, id) => axios.post(`/${id}.json`, data),
  getStudents: (id) => axios.get(`/${id}.json`),
  deleteStudents: (userId, id) => axios.delete(`/${userId}/${id}.json`),
  editStudents: (userId, id, data) => axios.patch(`/${userId}/${id}.json`, data),
}