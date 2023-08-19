import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// See below for an example using Custom instance defaults instead.
instance.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`;
instance.defaults.headers.common['accept'] = `application/json`;

export default instance;