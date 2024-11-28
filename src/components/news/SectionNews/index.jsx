import styles from "./SectionNews.module.css";

import Card from "../CardNew";

import Img from "@/img/imgNews/im1.png";

function SectionNews({ news }) {
  return (
    <section className={styles.container}>
      <div className={styles.cards}>
        {news.results.map((item) => (
          <Card
            key={item.id}
            image={item.image.src}
            href={item.title}
            id={item.slug}
            desc={item.description}
            published_date={item.published_date}
            views={item.views}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionNews;
