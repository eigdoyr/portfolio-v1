import LicenseCard from "@components/LicenseCard/LicenseCard";
import { licenseData } from "@data/profile";
import "./Hero.css";

interface HeroProps {
  showCard: boolean;
  showBgText: boolean;
}

const Hero = ({ showCard, showBgText }: HeroProps) => (
  <>
    {showBgText && (
      <h1 className="bg-text" aria-hidden="true">
        ryodgie
      </h1>
    )}

    {showCard && (
      <section className="hero-container">
        <div className="entrance-animator">
          <LicenseCard data={licenseData} />
        </div>
      </section>
    )}
  </>
);

export default Hero;
