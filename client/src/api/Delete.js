import axios from "axios";

const DeleteApiFunction = async (id) => {
  const res = await axios.delete(process.env.REACT_APP_API + `/delete/${id}`);
  return res.data;
};

export default DeleteApiFunction;
