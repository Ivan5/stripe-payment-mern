import axios from "axios";

const CREDENTIALS = {
  withCredentials: true,
};

export const getAuthStatus = () =>
  axios.get("http://localhost:3001/api/auth/status", CREDENTIALS);
