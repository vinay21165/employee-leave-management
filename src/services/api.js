import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081"
});

export const loginUser = (data) => API.post("/login", data);
export const submitLeave = (data) => API.post("/leave", data);