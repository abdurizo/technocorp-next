import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "@/components/news/Header";
import SectionNews from "@/components/news/SectionNews";
import { getAllNews } from "@/api/pagesApis/news";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ locale, query }) {
  const news = await getAllNews(locale, {
    p: 1,
    page_size: 10,
    category: query.tab,
  });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      news,
    },
  };
}

function News({ news }) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("news")}</title>
      </Head>
      <Header />
      <SectionNews news={news} />
    </>
  );
}

export default News;
