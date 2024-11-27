import styles from "./GridCards.module.css";
import classN from "classnames";

import Card from "../Card";

function GridCards({ projects }) {
  return (
    <section className={styles.wrap}>
      {projects.results.map((project) => (
        <Card project={project} />
      ))}
    </section>
  );
}

export default GridCards;
