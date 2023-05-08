import axios from "axios";
let IPaddress1 = "192.168.0.3";
let IPaddress2 = "172.20.10.3";
export const api = axios.create({
  baseURL: `http://${IPaddress2}:3333`,
});
