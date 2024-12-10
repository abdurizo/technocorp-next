import styles from "./Desc.module.css";

function Desc({ title, desc }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>

      <div
        className={styles.desc}
        dangerouslySetInnerHTML={{ __html: desc }}
      ></div>
    </>
  );
}

export default Desc;
