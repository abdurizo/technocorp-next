import styles from "./SectionNews.module.css";

import Card from "../CardNew";

import Img from "@/img/imgNews/im1.png";


  const news = [
    { id: "123", title: "7-may – O‘zbekistonюю " },
    { id: "456", title: "May" },
    { id: "466", title: "8-dekabr" },
  ];

  // const formatTitleToURL = (title) => {
  //   return title
  //     .toLowerCase() // Приводим к нижнему регистру
  //     .replace(/[^\w\s-]/g, "") // Удаляем все спецсимволы
  //     .replace(/\s+/g, "-") // Заменяем пробелы на дефисы
  //     .replace(/-+$/g, ""); // Убираем дефисы в конце строки
  // };

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
