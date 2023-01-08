import axios from "axios";
import { useQuery } from "react-query";

const CallAPIFunction = async () => {
  const res = await axios.get(process.env.REACT_APP_API + "/read");

  return await res.data;
};
const ReadApi = () => {
  return useQuery("Read", () => CallAPIFunction(), {
    staleTime: 3000,
  });
};

export default ReadApi;
