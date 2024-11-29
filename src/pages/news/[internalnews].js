import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import Header from "@/components/news/internalNews/Header";
import Information from "@/components/news/internalNews/Information";
import { getAllNews, getOneNews } from "@/api/pagesApis/news";
const OtherNews = dynamic(
  () => import("@/components/news/internalNews/OtherNews"),
  { ssr: false }
);

export async function getServerSideProps({ locale, query }) {
  const { internalnews } = query;
  const newsDetail = await getOneNews(locale, internalnews);
  const news = await getAllNews(locale, { p: 1, page_size: 10 });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      newsDetail,
      news,
    },
  };
}

function Internalnews({ newsDetail, news }) {
  return (
    <div className="container">
      <Header newsDetail={newsDetail} />
      <Information newsDetail={newsDetail} />
      <OtherNews news={news.results} />
    </div>
  );
}

export default Internalnews;
