import { useEffect, useRef, useState } from "react";

export const useObserver = (observerConfig) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      observerConfig ? observerConfig : { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return {
    isVisible,
    ref: containerRef,
  };
};
