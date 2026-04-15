import { useEffect } from "react";

interface UseSwipeNavigationProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
  disabled?: boolean;
  ignoreSelector?: string;
}

export const useSwipeNavigation = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
  disabled = false,
  ignoreSelector,
}: UseSwipeNavigationProps) => {
  useEffect(() => {
    if (disabled) return;

    let startX = 0;
    let ignored = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      ignored = ignoreSelector
        ? !!(e.target as Element).closest(ignoreSelector)
        : false;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (ignored) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) < threshold) return;
      if (diff > 0) onSwipeLeft();
      else onSwipeRight();
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, threshold, disabled, ignoreSelector]);
};
