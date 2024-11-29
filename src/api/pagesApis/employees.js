import { axiosT } from "../axios";

export const getDevelopers = async (locale) => {
  const { data } = await axiosT.get("/employee/developers", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data.map((item) => ({
    ...item,
    photo: item.photo.replace("https://", "http://"),
  }));
};
export const getCenterStructure = async (locale) => {
  const { data } = await axiosT.get("/employee/center-structure", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data.map((item) => ({
    ...item,
    photo: item.photo.replace("https://", "http://"),
  }));
};
