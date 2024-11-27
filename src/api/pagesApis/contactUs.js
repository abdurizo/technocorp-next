import { axiosT } from "../axios";

export const getAllServicesList = async () => {
  const { data } = await axiosT.post("/service/message");
  console.log(data, "serviceMessageData");
  return data;
};
