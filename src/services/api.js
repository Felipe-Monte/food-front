import axios from "axios";

export const api = axios.create({
  baseURL: 'https://food-api-qnqd.onrender.com'
});