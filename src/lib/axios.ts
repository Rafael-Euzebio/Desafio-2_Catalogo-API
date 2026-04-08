import axios from "axios";

const baseUrl = "https://fakestoreapi.com";
export const api = axios.create({ baseURL: baseUrl });
