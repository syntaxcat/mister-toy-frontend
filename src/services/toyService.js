import { storageService } from "./storageService.js";
import { utilService } from "./utilService.js";

const TOY_KEY = "toysDB";

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
};

_createToys();

function query() {
  return storageService.query(TOY_KEY);
}

function remove(toyId) {
  return storageService.query(TOY_KEY).then((toys) => {
    const idx = toys.findIndex((toy) => toy._id === toyId);
    if (idx !== -1) storageService.remove(TOY_KEY, toyId);
  });
}

function save(toy) {
  // return storageService.query(TOY_KEY).then((toys) => {
  //   const idx = toys.findIndex((currToy) => currToy._id === toy._id)(idx !== -1)
  //     ? storageService.put(TOY_KEY, toy)
  //     : storageService.post(TOY_KEY, toy);
  // });
  const savedToy = !toy._id
    ? storageService.post(TOY_KEY, toy)
    : storageService.put(TOY_KEY, toy);
  return savedToy;
}

function getById(toyId) {
  return storageService.query(TOY_KEY).then((toys) => {
    const toy = toys.find((toy) => toy._id === toyId);
    return toy;
  });
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

function _createToys() {
  var toys = storageService.query(TOY_KEY).then((toys) => {
    if (!toys || !toys.length) {
      toys = [
        {
          _id: 61,
          name: "et libero",
          price: 67,
          type: "Adult",
          createdAt: "1986-05-11T14:23:18.396Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 62,
          name: "non dui",
          price: 68,
          type: "Adult",
          createdAt: "1989-07-30T03:40:43.965Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 63,
          name: "dolor ante",
          price: 95,
          type: "Adult",
          createdAt: "1985-07-30T21:51:26.827Z",
          inStock: true,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 64,
          name: "curabitur pulvinar",
          price: 63,
          type: "Funny",
          createdAt: "1980-05-16T02:49:38.197Z",
          inStock: false,
        },
        {
          _id: 65,
          name: "tincidunt morbi",
          price: 31,
          type: "Adult",
          createdAt: "1984-08-06T16:49:57.515Z",
          inStock: true,
        },
        {
          _id: 66,
          name: "tortor turpis",
          price: 81,
          type: "Educational",
          createdAt: "1985-07-08T09:53:44.999Z",
          inStock: false,
        },
        {
          _id: 67,
          name: "et porttitor",
          price: 32,
          type: "Educational",
          createdAt: "1978-11-29T20:35:26.017Z",
          inStock: true,
        },
        {
          _id: 68,
          name: "sapien sit",
          price: 33,
          type: "Adult",
          createdAt: "1997-05-18T18:42:35.722Z",
          inStock: false,
        },
        {
          _id: 69,
          name: "donec mi",
          price: 47,
          type: "Funny",
          createdAt: "1993-09-05T21:50:14.532Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 70,
          name: "facilisis ipsum",
          price: 96,
          type: "Educational",
          createdAt: "1996-04-02T06:54:50.102Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 71,
          name: "mattis eros",
          price: 91,
          type: "Adult",
          createdAt: "1987-05-28T18:07:38.469Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 72,
          name: "sagittis ac",
          price: 2,
          type: "Funny",
          createdAt: "1988-12-07T13:36:08.023Z",
          inStock: true,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 73,
          name: "augue non",
          price: 91,
          type: "Funny",
          createdAt: "1994-12-26T17:19:27.079Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 74,
          name: "sit eros",
          price: 83,
          type: "Funny",
          createdAt: "1994-12-11T07:17:52.734Z",
          inStock: true,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 75,
          name: "aenean sed",
          price: 80,
          type: "Adult",
          createdAt: "1994-01-07T14:53:01.339Z",
          inStock: true,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 76,
          name: "aliquam vestibulum",
          price: 96,
          type: "Funny",
          createdAt: "1975-10-03T13:35:43.159Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 77,
          name: "augue sed",
          price: 70,
          type: "Adult",
          createdAt: "1985-09-19T02:10:11.606Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 78,
          name: "aliquam magna",
          price: 73,
          type: "Educational",
          createdAt: "1985-12-07T21:18:03.634Z",
          inStock: true,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 79,
          name: "eros odio",
          price: 15,
          type: "Adult",
          createdAt: "1977-12-25T10:20:03.074Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
        {
          _id: 80,
          name: "scelerisque porttitor",
          price: 49,
          type: "Funny",
          createdAt: "1997-02-23T10:22:57.732Z",
          inStock: false,
          labels: ["Doll", "Battery Powered", "Baby"],
        },
      ];
      storageService.postMany(TOY_KEY, toys);
    }
  });
}
