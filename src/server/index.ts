import axios from "axios";

const serve = axios.create({
  baseURL: "http://localhost:1122",
});

export const getList = () => serve.get("api/list").then((res) => res.data);
