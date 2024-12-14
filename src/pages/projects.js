import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import dynamic from "next/dynamic";

import Header from "@/components/projects/Header";
const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });
import GridCards from "@/components/projects/GridCards";
import { getAllProjects } from "@/api/pagesApis/project";
import { useTranslation } from "next-i18next";
import Head from "next/head";

export async function getServerSideProps({ locale, query }) {
  const projects = await getAllProjects(locale, {
    p: 1,
    page_size: 10,
    category: query.tab,
  });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      projects,
    },
  };
}

function Projects({ projects }) {
  const { t } = useTranslation();
  const news = [
    { id: undefined, text: t("all") },
    { id: 1, text: t("information_systems") },
    { id: 3, text: t("website") },
    { id: 4, text: "Start-up" },
    { id: 2, text: t("mobile_applications") },
    { id: 5, text: t("360_virtual_tour") },
  ];

  return (
    <>
      <Head>
        <title>{t("projects_page")}</title>
      </Head>
      <div className="container">
        <Header news={news} />
        <GridCards projects={projects} />
        <Carousel />
      </div>
    </>
  );
}

export default Projects;
