import styles from "./Startap.module.css";
import { useTranslation } from "next-i18next";

import Btn from "@/components/ui/Btn/Btn";
import CardForStartap from "../../CardForStartap";
import Slack from "@/icon/startapIcon/slack.svg";
import Slack2 from "@/icon/startapIcon/slack2.svg";
import Layers from "@/icon/startapIcon/layers.svg";
import Layers2 from "@/icon/startapIcon/layers2.svg";
import Cpu from "@/icon/startapIcon/cpu.svg";
import Cpu2 from "@/icon/startapIcon/cpu2.svg";

function Startap({ startups }) {
  console.log(startups, "startups");
  const { t } = useTranslation();
  return (
    <section className="container">
      <h2 className="sectionTitle">{ t('start_up_projects')}</h2>
      <div className={styles.grid_content}>
        {startups.map((item, index) => (
          <CardForStartap
            key={index}
            imageOne={item.image}
            imageTwo={item.image}
            text={item.title}
            textTwo={item.description}
          />
        ))}

        {/* <CardForStartap
          imageOne={Layers}
          imageTwo={Layers2}
          text={"E-archive"}
          textTwo={"Аrxiv hujjatlarini raqamlashtirish, saqlash va foydalanish"}
        />
        <CardForStartap
          imageOne={Cpu}
          imageTwo={Cpu2}
          text={"SMART GADGET"}
          textTwo={
            "Muzey tizimini avtomatlashtirish hamda inson omilini kamaytirib vaqtni tejashga yordam beradi."
          }
        /> */}
      </div>
      <Btn text={t('detail')} href="/projects" />
    </section>
  );
}

export default Startap;
