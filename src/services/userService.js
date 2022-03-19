import { utilService } from "./utilService.js";

export const userService = {
  getLoggedinUser,
};

function getLoggedinUser() {
  return utilService.loadFromStorage("loggedinUser");
}
