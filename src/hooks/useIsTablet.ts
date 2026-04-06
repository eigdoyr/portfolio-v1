import { useState, useEffect, useRef } from "react";

export const useIsTablet = (): boolean => {
  const [isTablet, setIsTablet] = useState(
    () => window.innerWidth <= 1024 && window.innerWidth > 768,
  );
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timerRef.current);
    };
  }, []);

  return isTablet;
};
