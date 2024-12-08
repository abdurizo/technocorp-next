import styles from "./SectionNews.module.css";

import Card from "../CardNew";
import { useInfiniteScrollPagination } from "@/hooks/useInfiniteScrollPagination";
import { useEffect } from "react";
import { useRouter } from "next/router";

function SectionNews({ news }) {
  const { hasMore, lastNewsRef, loading, page, items } =
    useInfiniteScrollPagination(news.results, "/news");

  return (
    <section className={styles.container}>
      <div className={styles.cards}>
        {items.map((item, index) => {
          const isLastItem = index === news.results.length - 1;
          return (
            <div ref={isLastItem ? lastNewsRef : null} key={item.id}>
              <Card
                key={item.id}
                image={item.image.src}
                href={item.title}
                id={item.slug}
                desc={item.description}
                published_date={item.published_date}
                views={item.views}
              />
            </div>
          );
        })}
      </div>
      {loading && (
        <p className={"text-center text-white text-[40px]"}>Loading...</p>
      )}
    </section>
  );
}

export default SectionNews;
