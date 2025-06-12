import axios from "axios";

const baseUrl = 'http://localhost:9091';

export const getEmployee = () => {
  return axios.get(`${baseUrl}/employee`);
};

export const UpdateEmployee = (id, data) => {
  return axios.put(`${baseUrl}/updateemployee/${id}`, data);
};