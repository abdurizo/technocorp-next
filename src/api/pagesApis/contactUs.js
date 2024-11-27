import { axiosT } from "../axios";

export const postServiceMessage = async () => {
  const { data } = await axiosT.post("/service/message");
  return data;
};
