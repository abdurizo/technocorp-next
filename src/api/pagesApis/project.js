import { axiosT } from "../axios";

export const getStartUpProjects = async (locale) => {
  const { data } = await axiosT.get("/project/start-up", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data;
};
export const getMainPageProjects = async (locale, params) => {
  const { data } = await axiosT.get("/project/main-page", {
    params,
    headers: {
      "Accept-Language": locale,
    },
  });
  return data.map((item) => ({
    ...item,
    image: item.image.replace("https://", "http://"),
  }));
};

export const getAllProjects = async (locale, params) => {
  const { data } = await axiosT.get("/project", {
    params,
    headers: {
      "Accept-Language": locale,
    },
  });
  return data;
};
