import { axiosT } from "@/api/axios";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

export const useInfiniteScrollPagination = (initialData, fetchUrl) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const [items, setItems] = useState(initialData);

  const lastNewsRef = useRef();

  useEffect(() => {
    if (loading) return; // Do not attach the observer if we're already loading
    const options = { root: null, threshold: 1 };

    const callback = (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1); // Increment page to load more data
      }
    };

    if (observer.current) observer.current.disconnect(); // Disconnect the previous observer
    observer.current = new IntersectionObserver(callback, options);

    if (lastNewsRef.current) observer.current.observe(lastNewsRef.current);

    return () => observer.current?.disconnect();
  }, [loading, hasMore]);

  const fetchMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await axiosT.get(fetchUrl, {
        params: { p: page, page_size: 10 },
        headers: {
          "Accept-Language": currentLocale,
        },
      });

      console.log(response.data.links, "response.data");
      const newItems = response.data.results;

      setItems((prev) => [...prev, ...newItems]); // Append new data
      setHasMore(!!!response.data.links.next); // Check if more data exists
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false); // Assume no more data on failure
    }
    setLoading(false);
  };

  useEffect(() => {
    if (page > 1) {
      fetchMore();
    }
  }, [page]);
  return {
    page,
    items,
    loading,
    hasMore,
    lastNewsRef,
  };
};
