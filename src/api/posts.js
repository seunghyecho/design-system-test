import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:4000/users");
  return response.data;
};
