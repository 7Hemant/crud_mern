import axios from "axios";

const CreatePostAPI = async (props) => {
  const res = await axios.post(process.env.REACT_APP_API + "/create", {
    title: props?.title,
    description: props?.desc,
  });
  return res?.data;
};

export default CreatePostAPI;
