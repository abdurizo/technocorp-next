import { axiosT } from "../axios";

export const getAllNews = async (locale, params) => {
  const { data } = await axiosT.get("/news", {
    params,
    headers: {
      "Accept-Language": locale,
    },
  });

  return data;
};

export const getOneNews = async (locale, slug) => {
  const { data } = await axiosT.get(`/news/${slug}`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data;
};
