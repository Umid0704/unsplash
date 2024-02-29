import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.unsplash.com/'
  });
export default axiosClient
