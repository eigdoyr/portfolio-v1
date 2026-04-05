import { useEffect } from "react";

export const useBodyScrollLock = (locked: boolean): void => {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [locked]);
};
