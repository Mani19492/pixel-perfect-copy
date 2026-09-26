import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Camera, Globe2 } from "lucide-react";
import heroPortrait from "@/assets/portfolio-hero.jpg";
import aboutPortrait from "@/assets/portfolio-about.jpg";
import architecturePhoto from "@/assets/portfolio-architecture.jpg";
import treePhoto from "@/assets/portfolio-tree.jpg";
import ferrisPhoto from "@/assets/portfolio-ferris.jpg";
import sculpturePhoto from "@/assets/portfolio-sculpture.jpg";
import botanicalPhoto from "@/assets/portfolio-botanical.jpg";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Portfolio", "#portfolio"],
  ["Exhibitions", "#exhibitions"],
  ["Contact", "#contact"],
];

const projects = [
  { title: "Architecture in space", category: "Art direction · 2025", image: architecturePhoto, alt: "Sweeping sculptural white architecture around a reflecting pool", shape: "project-architecture" },
  { title: "Solitude & silence", category: "Documentary · 2025", image: treePhoto, alt: "A solitary tree in a quiet monochrome landscape", shape: "project-tree" },
  { title: "Concrete wave", category: "Architecture · 2024", image: architecturePhoto, alt: "An expressive curved concrete building", shape: "project-wave" },
  { title: "Rotation & gravity", category: "Travel film · 2024", image: ferrisPhoto, alt: "The London Eye rising above the city in black and white", shape: "project-wheel" },
  { title: "Tactile folds", category: "Studio film · 2024", image: sculpturePhoto, alt: "White fabric cascading in sculptural folds", shape: "project-fabric" },
  { title: "Solar veil", category: "Visual study · 2023", image: botanicalPhoto, alt: "Golden palm leaves lit by warm amber light", shape: "project-botanical" },
];

const exhibitions = [
  { number: "01", title: <>Cinematic Visions<br />Unveiled</>, place: "Madrid Gallery, Spain", date: "21 Nov 2026" },
  { number: "02", title: <>Frames in<br />Motion</>, place: "Manchester Museum, UK", date: "20 Nov 2026" },
  { number: "03", title: <>Journey Through<br />Time</>, place: "Milan Gallery, Italy", date: "19 Nov 2026" },
  { number: "04", title: <>Experimental<br />Narratives</>, place: "Paris Museum, France", date: "18 Nov 2026" },
];

function LogoMark() {
  return <a className="logo-mark" href="#home" aria-label="Visual Poetry home"><span /><span /><i /></a>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visual Poetry — Videographer & Director Portfolio" },
      { name: "description", content: "A visual journey through the films, art direction, and exhibitions of filmmaker Quentin." },
      { property: "og:title", content: "Visual Poetry — Videographer & Director Portfolio" },
      { property: "og:description", content: "A visual journey through the films, art direction, and exhibitions of filmmaker Quentin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="portfolio-site">
      <header className="site-header">
        <LogoMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="next-show" href="#exhibitions"><span className="show-star">✳</span> Sala Canal, <strong>22 Nov 26</strong><span className="show-dot">↗</span></a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Filmmaker · Director · Visual storyteller</p>
            <h1 className="hero-title"><span>visual</span><span>poetry</span></h1>
            <div className="hero-intro">
              <div className="social-links" aria-label="Social links">
                <a href="https://youtube.com" aria-label="YouTube">yt</a><a href="https://instagram.com" aria-label="Instagram">ig</a><a href="https://behance.net" aria-label="Behance">be</a><a href="https://vimeo.com" aria-label="Vimeo">vm</a>
              </div>
              <p>Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.</p>
            </div>
            <div className="hero-stats">
              <div><strong>+250<span>k</span></strong><p>Views carrying stories further and leaving a lasting impression.</p></div>
              <div><strong>+800<span>k</span></strong><p>Hours of watched, lived-in visual storytelling.</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img className="hero-image" src={heroPortrait} alt="Filmmaker looking through a vintage movie camera" width={1024} height={1280} fetchPriority="high" />
              <span className="signature" aria-hidden="true">Quentin</span>
              <span className="globe-badge" aria-hidden="true"><Globe2 size={21} strokeWidth={1.4} /></span>
            </div>
            <a className="hero-arrow" href="#portfolio" aria-label="Explore portfolio"><ArrowUpRight size={23} /></a>
            <a className="camera-badge" href="#about" aria-label="Meet the filmmaker"><Camera size={18} /></a>
            <span className="hero-index">Independent eye<br />Paris · Everywhere</span>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="ticker ticker-about" aria-hidden="true"><div className="ticker-track"><span>about <b>•</b> about <b>•</b> about <b>•</b> about <b>•</b> about <b>•</b>&nbsp;</span><span>about <b>•</b> about <b>•</b> about <b>•</b> about <b>•</b> about <b>•</b>&nbsp;</span></div></div>
          <div className="about-stage">
            <span className="reticle reticle-one" aria-hidden="true">⊕</span><span className="reticle reticle-two" aria-hidden="true">⊕</span><span className="reticle reticle-three" aria-hidden="true">⊕</span><span className="reticle reticle-four" aria-hidden="true">⊕</span>
            <span className="crosshair crosshair-left" aria-hidden="true" /><span className="crosshair crosshair-right" aria-hidden="true" />
            <div className="petal-halo" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} style={{ "--petal": index } as React.CSSProperties} />)}</div>
            <img className="about-image" src={aboutPortrait} alt="Filmmaker holding a camera in a black-and-white portrait" width={1024} height={1280} loading="lazy" />
            <div className="about-caption"><span>Behind the frame</span><span>01 — 06</span></div>
          </div>
        </section>

        <section className="portfolio-section" id="portfolio">
          <div className="portfolio-wordmark" aria-hidden="true">portfolio</div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a className={`project-tile ${project.shape}`} href="#contact" key={project.title} aria-label={`${project.title}, ${project.category}`}>
                <img src={project.image} alt={project.alt} width={1024} height={1280} loading="lazy" />
                <span className="project-number">0{index + 1} / 06</span>
                <span className="project-meta"><strong>{project.title}</strong><small>{project.category}</small></span>
                <span className="project-open"><ArrowUpRight size={20} /></span>
              </a>
            ))}
          </div>
          <a className="all-projects" href="#contact">More moving images <ArrowDownRight size={17} /></a>
        </section>

        <section className="exhibitions-section" id="exhibitions">
          <div className="ticker ticker-exhibitions" aria-hidden="true"><div className="ticker-track"><span>exhibitions <b>•</b> exhibitions <b>•</b> exhibitions <b>•</b>&nbsp;</span><span>exhibitions <b>•</b> exhibitions <b>•</b> exhibitions <b>•</b>&nbsp;</span></div></div>
          <div className="exhibition-list">
            {exhibitions.map((item) => <article className="exhibition-row" key={item.number}>
              <span className="exhibition-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p className="exhibition-location">{item.place}<span>{item.date}</span></p>
              <a href={`mailto:hello@visualpoetry.studio?subject=${encodeURIComponent("Exhibition: " + item.number)}`} className="ticket-link" aria-label={`Enquire about ${item.title.props.children[0]}`}>Enquire <ArrowUpRight size={14} /></a>
            </article>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Have a story worth telling?</p>
          <div className="contact-line"><h2>Let’s make<br />something <em>move.</em></h2><a className="contact-arrow" href="mailto:hello@visualpoetry.studio" aria-label="Email Visual Poetry"><ArrowUpRight size={34} /></a></div>
          <a className="contact-email" href="mailto:hello@visualpoetry.studio">hello@visualpoetry.studio</a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><LogoMark /><nav aria-label="Footer navigation">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><span className="copyright">© 2026 · Visual Poetry</span></div>
        <div className="footer-wordmark" aria-hidden="true">vidéaste</div>
      </footer>
    </div>
  );
}