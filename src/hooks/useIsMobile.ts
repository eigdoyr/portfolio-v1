import { useState, useEffect, useRef } from "react";

export const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < breakpoint,
  );
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsMobile(window.innerWidth < breakpoint);
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timerRef.current);
    };
  }, [breakpoint]);

  return isMobile;
};
