import axios from "axios";

const instacnce = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});
export default instacnce;
