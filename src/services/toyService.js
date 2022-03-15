import { storageService } from "./storageService.js";
import { utilService } from "./utilService.js";
import axios from "axios";

const TOY_KEY = "toysDB";
const TOY_URL = "//localhost:3030/api/toy/";

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
};

function query() {
  return axios.get(TOY_URL).then((toys) => toys.data);
}

function remove(toyId) {
  return axios.delete(TOY_URL + toyId);
}

function save(toy) {
  if (toy._id) return axios.put(TOY_URL + toy._id, toy);
  else {
    return axios.post(TOY_URL, toy);
  }
}

function getById(toyId) {
  return axios.get(TOY_URL + toyId).then((res) => res.data);
}

function getEmptyToy() {
  return {
    _id: "",
    name: "",
    price: "",
    type: "",
    createdAt: "",
    inStock: true,
    labels: ["Doll", "Battery Powered", "Baby"],
  };
}
