import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "/api/toy"
    : "//localhost:3030/api/toy/";

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
};

// async function add(review) {
//   const addedReview = await httpService.post(`review`, review);

//   // review.byUser = userService.getLoggedinUser()
//   // review.aboutUser = await userService.getById(review.aboutUserId)
//   // const addedReview = storageService.post('review', review)

//   return addedReview;
// }

function query() {
  return axios.get(BASE_URL).then((toys) => toys.data);
}

function remove(toyId) {
  return axios.delete(BASE_URL + toyId);
}

function save(toy) {
  if (toy._id) return axios.put(BASE_URL + toy._id, toy);
  else {
    return axios.post(BASE_URL, toy);
  }
}

function getById(toyId) {
  return axios.get(BASE_URL + toyId).then((res) => res.data);
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
