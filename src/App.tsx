import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./sections/Hero/Hero";
import Work from "./sections/Work/Work";
import WorkDetail from "./sections/Work/WorkDetail";
import About from "./sections/About/About";
import { useRouteState } from "./hooks/useRouteState";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import { useLenis } from "./hooks/useLenis";
import { useIsMobile } from "./hooks/useIsMobile";

const AppShell = () => {
  const { isHome, isProjects, isWorkDetail } = useRouteState();
  const isMobile = useIsMobile();
  const location = useLocation();

  useBodyScrollLock(!isWorkDetail);
  useLenis(isWorkDetail);

  return (
    <>
      {!isMobile && <Cursor />}

      <Navbar />

      <Hero showCard={isHome} showBgText={!isWorkDetail} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
        </Routes>
      </AnimatePresence>

      {/* Always mounted — visibility controlled inside Work via AnimatePresence */}
      <Work isOpen={isProjects} />
    </>
  );
};

const App = () => (
  <Router>
    <AppShell />
  </Router>
);

export default App;
