import { axiosT } from "../axios";

export const getAllServicesList = async (locale) => {
  const { data } = await axiosT.get("/service", {
    headers: {
      "Accept-Language": locale,
    },
  });
  return data.map((item) => ({
    id: item.slug,
    gif: item?.gif,
    image: item.icon,
    desc: item.description,
    title: item.title,
  }));
};
