import AboutUs from "@/components/about/AboutUs";
import Card, { SingleCounter } from "@/components/about/Card";
import Programmers from "@/components/about/Programmers";
import { TechlogiesList } from "@/components/about/Technologies/TechnologiesList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
    },
  };
}
function About() {
  const stats = [
    { value: 68, label: "Xodimlar" },
    { value: 14, label: "Muvaffaqiyatli loyihalar" },
    { value: 14, label: "Xursand mijozlarimiz" },
    { value: 28, label: "Ish tajribasi" },
  ];
  return (
    <>
      <AboutUs />

      <section className="container grid grid-cols-4 gap-6">
        {stats.map((n) => (
          <Card count={n.value} text={n.label} />
        ))}
      </section>

      <TechlogiesList
        items={["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript"]}
      />

      <Programmers />
    </>
  );
}

export default About;
