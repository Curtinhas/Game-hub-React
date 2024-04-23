import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "5fc9fd14232440268e001e40ce45d26f" },
});
