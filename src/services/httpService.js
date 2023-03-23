import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.request.use(
  (request) => {
    // Edit reponse ,....
    return request;
  },
  (error) => {
    return Promise.reject();
  }
);

axios.interceptors.response.use(
  (response) => {
    // Edit reponse ,....
    return response;
  },
  (error) => {
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
