import axios from "axios";

import { utilService } from "./utilService.js";

export const authService = {
  login,
  logout,
};

const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "/api/auth"
    : "//localhost:3030/api/auth";

async function login(credentials) {
  const res = await axios.post(`${BASE_URL}/login`, credentials);
  const user = res.data;
  utilService.saveToStorage("loggedinUser", user);
  return user;
}

async function logout() {
  utilService.removeFromStorage("loggedinUser");
  return Promise.resolve();
  // TODO: should manage logged in user in session in the server
  // const res = await axios.post(`${BASE_URL}/logout`);
  // const user = res.data;
  // utilService.saveToStorage("loggedinUser", user);
  // return user;
}
