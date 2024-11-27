import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "@/components/home/Header";
import CarouselPartners from "@/components/CarouselPartners/CarouselPartners";
import AboutUs from "@/components/home/AboutUs";
import OurProjects from "@/components/OurProjects";
import Services from "@/components/home/Services";
import Scroll from "@/components/home/Scroll";
import Startap from "@/components/home/Startap";
import News from "@/components/home/News";
import ContactUs from "@/components/home/ContactUs";
import Carousel from "@/components/Carousel";
import { motion } from "framer-motion";
import { axiosT } from "@/api/axios";
import { useEffect } from "react";
import { getAllServicesList } from "@/api/pagesApis/service";
import {
  getMainPageProjects,
  getProjects,
  getStartUpProjects,
} from "@/api/pagesApis/project";
import { getAboutUs } from "@/api/pagesApis/aboutUs";

export async function getServerSideProps({ locale }) {
  const serviceList = await getAllServicesList(locale);
  const startups = await getStartUpProjects(locale);
  const projects = await getMainPageProjects(locale, { p: 1, page_size: 5 });
  const aboutUs = await getAboutUs(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      serviceList,
      startups,
      projects,
      aboutUs,
    },
  };
}

export default function Home({
  locale,
  serviceList,
  startups,
  projects,
  aboutUs,
}) {
  return (
    <>
      <Head>
        <title>Technocorp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <ContactUsPosition/> */}
      <Header />
      <CarouselPartners />
      {/* <СircularShadow /> */}
      <div className="mb-80">
        <AboutUs aboutUs={aboutUs} />
      </div>
      <div className="mb-32">
        <OurProjects projects={projects} />
      </div>
      <Services services={serviceList} />
      <Scroll />
      <Startap startups={startups} />
      <News />
      <ContactUs />
      <Carousel />
    </>
  );
}
