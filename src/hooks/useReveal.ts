import { useEffect, useRef } from "react";

export const useReveal = (delay = 500) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );

      const elements = ref.current?.querySelectorAll(".reveal");
      elements?.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return ref;
};
