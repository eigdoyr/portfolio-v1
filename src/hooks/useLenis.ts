import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const useLenis = (enabled: boolean): void => {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, [enabled]);
};
