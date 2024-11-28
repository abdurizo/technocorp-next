import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "@/components/news/Header";
import SectionNews from "@/components/news/SectionNews";
import { getAllNews } from "@/api/pagesApis/news";

export async function getServerSideProps({ locale }) {
  const news = await getAllNews(locale, { p: 1, page_size: 10 });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      news,
    },
  };
}

function News({ news }) {
  return (
    <>
      <Header />
      <SectionNews news={news} />
    </>
  );
}

export default News;
