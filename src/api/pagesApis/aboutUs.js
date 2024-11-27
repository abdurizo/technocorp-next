import { axiosT } from "../axios";

export const getAboutUs = async (locale) => {
  const { data } = await axiosT.get("/about/main-page", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data;
};
export const getAboutUsForAboutUsPage = async (locale) => {
  const { data } = await axiosT.get("/about", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data;
};
