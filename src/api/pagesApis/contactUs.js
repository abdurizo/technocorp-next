import { axiosT } from "../axios";

export const postServiceMessage = async (payload) => {
<<<<<<< HEAD
  const { data } = await axiosT.post("/service/message",payload);
=======
  const { data } = await axiosT.post("/service/message", payload);
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8
  return data;
};
