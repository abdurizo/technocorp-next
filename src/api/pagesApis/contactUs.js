import { axiosT } from "../axios";

export const postServiceMessage = async (payload) => {
  const { data } = await axiosT.post("/service/message",payload);
  return data;
};
