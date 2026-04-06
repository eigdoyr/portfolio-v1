import { memo } from "react";
import "./Footer.css";

interface FooterLink {
  label: string;
  href: string;
}

const LINKS: FooterLink[] = [
  { label: "Dribbble", href: "https://dribbble.com/ryodgie" },
  { label: "GitHub", href: "https://github.com/eigdoyr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ryodgie/" },
];

const Footer = memo(() => {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-links">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">
        &copy; 2026 Designed and Developed by Ryodgie Barnatia
      </p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
