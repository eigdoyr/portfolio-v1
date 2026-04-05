import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = (enabled: boolean): void => {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [enabled]);
};
