import PageTransition from "../../components/PageTransition/PageTransition";
import "./About.css";
import { Helmet } from "react-helmet-async";

const About = () => (
  <PageTransition>
    <Helmet>
      <title>About — Ryodgie</title>
    </Helmet>
    <main className="about-main">
      <div className="about-placeholder">
        <span>Coming Soon</span>
      </div>
    </main>
  </PageTransition>
);

export default About;
