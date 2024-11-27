import styles from "./Startap.module.css";
import classN from "classnames";

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
  return (
    <section className="container">
      <h2 className="sectionTitle">Startap loyihalar</h2>
      <div className={styles.grid_content}>
        {startups.map((item, index) => (
          <CardForStartap
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
      <Btn text="Batafsil" href="#" />
    </section>
  );
}

export default Startap;
