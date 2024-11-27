import { axiosT } from "../axios";

export const getDevelopers = async (locale) => {
  const { data } = await axiosT.get("/employee/developers", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data;
};
export const getCenterStructure = async (locale) => {
  const { data } = await axiosT.get("/employee/center-structure", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data;
};
