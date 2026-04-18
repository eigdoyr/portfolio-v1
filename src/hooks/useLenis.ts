import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

export const useLenis = (enabled: boolean): void => {
  const rafRef = useRef<number>(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis();
    lenis.scrollTo(0, { immediate: true });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, [enabled, pathname]);
};
