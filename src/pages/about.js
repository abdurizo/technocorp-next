import { getAboutUsForAboutUsPage } from "@/api/pagesApis/aboutUs";
import { getDevelopers } from "@/api/pagesApis/employees";

import AboutUs from "@/components/about/AboutUs";
import Card, { SingleCounter } from "@/components/about/Card";
import Programmers from "@/components/about/Programmers";
import { TechlogiesList } from "@/components/about/Technologies/TechnologiesList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

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
const stats = [
  { value: 68, label: "Xodimlar", id: "employees" },
  { value: 14, label: "Muvaffaqiyatli loyihalar", id: "projects" },
  { value: 14, label: "Xursand mijozlarimiz", id: "customers" },
  { value: 28, label: "Ish tajribasi", id: "experience" },
];
function About({ aboutUs, developers }) {
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
      <AboutUs aboutUs={aboutUs} />

      <section className="container grid grid-cols-4 gap-6">
        {customStats.map((n) => (
          <Card count={n.value} text={n.label} />
        ))}
      </section>

      {/* <TechlogiesList
        items={["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript"]}
      /> */}

      <Programmers developers={developers} />
    </>
  );
}

export default About;
