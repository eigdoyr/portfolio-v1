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
    let startY = 0;
    let ignored = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      ignored = ignoreSelector
        ? !!(e.target as Element).closest(ignoreSelector)
        : false;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (ignored) return;
      const diffX = startX - e.changedTouches[0].clientX;
      const diffY = startY - e.changedTouches[0].clientY;

      // trigger if horizontal swipe is greater than vertical
      if (Math.abs(diffX) < Math.abs(diffY)) return;
      if (Math.abs(diffX) < threshold) return;

      if (diffX > 0) onSwipeLeft();
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
