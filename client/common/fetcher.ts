import axios from "axios";
import TokenStorage from "../common/token";

axios.defaults.baseURL = "http://api.moleeja.ml";

const fetcher = async (method, url, ...rest) => {
  const tokenStorage = new TokenStorage();
  const saveInfo = tokenStorage.getToken();

  if (saveInfo) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${saveInfo.token}`;
  }
  console.log("saveInfo", saveInfo);

  console.log("axios", axios.defaults);
  const res = await axios[method](url, ...rest);

  return res.data;
};

export const deleteAuth = () => {
  delete axios.defaults.headers.common["Authorization"];
};
export default fetcher;
