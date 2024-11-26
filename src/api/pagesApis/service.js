import { axiosT } from "../axios";

export const getAllServicesList = async () => {
  const { data } = await axiosT.get("/service");
  console.log(data, "serviceData");
  return data;
};
