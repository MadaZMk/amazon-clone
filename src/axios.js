import axios from "axios";

const instance = axios.create({
  // to add API url (cloud function)
  baseUrl: "...",
});
export default instance;
