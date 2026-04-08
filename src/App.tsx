import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./sections/Hero/Hero";
import Work from "./sections/Work/Work";
import WorkDetail from "./sections/Work/WorkDetail";
import About from "./sections/About/About";
import Footer from "./components/Footer/Footer";
import { useRouteState } from "./hooks/useRouteState";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import { useLenis } from "./hooks/useLenis";
import { Helmet } from "react-helmet-async";

const AppShell = () => {
  const { isHome, isProjects, isWorkDetail, isAbout } = useRouteState();
  const location = useLocation();

  useBodyScrollLock(!isWorkDetail && !isAbout);
  useLenis(isWorkDetail || isAbout);

  return (
    <>
      {/* Skip to content — keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Helmet>
        <title>
          {isWorkDetail
            ? "Work — Ryodgie"
            : isProjects
              ? "Work — Ryodgie"
              : "Ryodgie — Digital & Visual Designer"}
        </title>
      </Helmet>

      {/* Cursor — CSS hides on touch via @media (hover: none) */}
      <Cursor />

      <Navbar />

      {/* Visually hidden h1 for screen readers on home page */}
      {isHome && (
        <h1 className="sr-only">Ryodgie — Digital and Visual Designer</h1>
      )}

      <Hero showCard={isHome} showBgText={!isWorkDetail && !isAbout} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Work isOpen={isProjects} />
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppShell />
  </Router>
);

export default App;
