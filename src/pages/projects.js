import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import dynamic from "next/dynamic";

import Header from "@/components/projects/Header";
const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });
import GridCards from "@/components/projects/GridCards";
import { getAllProjects } from "@/api/pagesApis/project";

export async function getServerSideProps({ locale, query }) {
  console.log("queryTab", query);
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
  return (
    <div className="container">
      <Header />
      <GridCards projects={projects} />
      <Carousel />
    </div>
  );
}

export default Projects;
