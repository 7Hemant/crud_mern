import axios from "axios";

const UpdatePostAPI = async (props) => {
  const res = await axios.patch(
    process.env.REACT_APP_API + `/update/${props?.id}`,
    {
      title: props?.title,
      description: props?.desc,
    }
  );
  return res?.data;
};

export default UpdatePostAPI;
