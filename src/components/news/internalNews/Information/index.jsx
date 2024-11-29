import classNames from "classnames";
import styles from "./Information.module.css";

function Information({ newsDetail }) {
  return (
    <section className={classNames(styles.section, "sectionDetail")}>
      <div dangerouslySetInnerHTML={{ __html: newsDetail.description }}></div>
    </section>
  );
}

export default Information;
