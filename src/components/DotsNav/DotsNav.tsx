import { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSwipeNavigation } from "@hooks/useSwipeNavigation.ts";
import "./DotsNav.css";

const ROUTES = ["/", "/projects", "/about"];

const DotsNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = ROUTES.indexOf(location.pathname);

  const goNext = useCallback(() => {
    navigate(ROUTES[(currentIndex + 1) % ROUTES.length]);
  }, [currentIndex, navigate]);

  const goPrev = useCallback(() => {
    navigate(ROUTES[(currentIndex - 1 + ROUTES.length) % ROUTES.length]);
  }, [currentIndex, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  useSwipeNavigation({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
    ignoreSelector: ".work-stage",
  });

  return (
    <nav className="dots-nav" aria-label="Page navigation">
      {ROUTES.map((route, i) => (
        <button
          key={route}
          className={`dots-nav__dot ${i === currentIndex ? "active" : ""}`}
          onClick={() => navigate(ROUTES[i])}
          aria-label={`Navigate to ${route === "/" ? "home" : route.replace("/", "")}`}
          aria-current={i === currentIndex ? "page" : undefined}
        />
      ))}
    </nav>
  );
};

export default DotsNav;
