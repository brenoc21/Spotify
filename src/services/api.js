import axios from "axios";
const api = axios.create({
  baseURL: "https://unifor-spotifake-api.herokuapp.com",
});

export default api;
