// useScrollToTop.js
import { useState, useEffect } from "react";

export const useScrollToTop = (threshold = 300, containerRef) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    const handleScroll = () => setShowButton(el.scrollTop > threshold);

    el.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, [threshold, containerRef]);

  const scrollToTop = () => {
    const el = containerRef?.current;
    if (!el) return;
    el.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return { showButton, scrollToTop };
};