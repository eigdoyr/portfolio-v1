import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@components/Navbar/Navbar";
import Cursor from "@components/Cursor/Cursor";
import Hero from "@sections/Hero/Hero";
import Work from "@sections/Work/Work";
import WorkDetail from "@sections/Work/WorkDetail";
import About from "@sections/About/About";
import DotsNav from "@components/DotsNav/DotsNav";
import Footer from "@components/Footer/Footer";
import { useRouteState } from "@hooks/useRouteState";
import { useBodyScrollLock } from "@hooks/useBodyScrollLock";
import { useLenis } from "@hooks/useLenis";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";

const AppShell = () => {
  const { isHome, isProjects, isWorkDetail, isAbout } = useRouteState();
  const location = useLocation();

  useBodyScrollLock(!isWorkDetail && !isAbout);
  useLenis(isWorkDetail || isAbout);

  return (
    <>
      <ScrollToTop />

      <Helmet>
        <title>Ryodgie — Web Developer & Visual Designer</title>
      </Helmet>

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Cursor isProjects={isProjects} />
      <Navbar />
      {isHome && (
        <h1 className="sr-only">Ryodgie — Web Developer & Visual Designer</h1>
      )}
      <main id="main-content">
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
      </main>
      {(isHome || isProjects || isAbout) && <DotsNav />}
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
