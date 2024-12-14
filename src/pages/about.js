import { getAboutUsForAboutUsPage } from "@/api/pagesApis/aboutUs";
import { getDevelopers } from "@/api/pagesApis/employees";
import { useTranslation } from "next-i18next";

import AboutUs from "@/components/about/AboutUs";
import Card, { SingleCounter } from "@/components/about/Card";
import Programmers from "@/components/about/Programmers";
import { TechlogiesList } from "@/components/about/Technologies/TechnologiesList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import Head from "next/head";

export async function getServerSideProps({ locale }) {
  const aboutUs = await getAboutUsForAboutUsPage(locale);
  const developers = await getDevelopers(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      aboutUs,
      developers,
    },
  };
}

function About({ aboutUs, developers }) {
  const { t } = useTranslation();

  const stats = [
    { value: 68, label: t("employees"), id: "employees" },
    { value: 14, label: t("successful_projects"), id: "projects" },
    { value: 14, label: t("satisfied_clients"), id: "customers" },
    { value: 28, label: t("experience"), id: "experience" },
  ];

  const [customStats, setCustomStats] = useState(stats);
  useEffect(() => {
    const arr = customStats.map((n) => ({
      ...n,
      value: aboutUs[n.id],
    }));

    setCustomStats(arr);
  }, [aboutUs]);
  return (
    <>
      <Head>
        <title>{t("about_us")}</title>
      </Head>
      <AboutUs aboutUs={aboutUs} />

      <section className="container grid gap-6 grid-cols-2 md:grid-cols-4  ">
        {customStats.map((n) => (
          <Card count={n.value} text={n.label} />
        ))}
      </section>

      {/* <TechlogiesList
        items={["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript"]}
      /> */}

      <Programmers
        developers={developers}
        title={t("our_team")}
        background_text={t("our_team_together")}
      />
    </>
  );
}

export default About;
