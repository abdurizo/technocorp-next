import { axiosT } from "../axios";

export const getAllNews = async (locale, params) => {
  const { data } = await axiosT.get("/news", {
    params,
    headers: {
      "Accept-Language": locale,
    },
  });
  data.results = data.results.map((item) => ({
    ...item,
    image: {
      ...item.image,
      src: item.image.src.replace("https://", "http://"),
    },
  }));
  return data;
};

export const getOneNews = async (locale, slug) => {
  const { data } = await axiosT.get(`/news/${slug}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  return {
    ...data,
    image: {
      ...data.image,
      src: data.image.src.replace("https://", "http://"),
    },
  };
};
export const getAllNewsCategory = async (locale, slug) => {
  const { data } = await axiosT.get(`/news/category`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  return data;
};
