import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Zap, Database, Code, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Dynamic Background Layer! */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-80">
        <SmokeBackground smokeColor="#00f0ff" />
      </div>

      {/* Top Navigation Bar */}
      <nav className="navbar ghost-border sticky top-4">
        <div className="nav-brand">ENDLESS INFINITE</div>
        <div className="nav-links">
          <a href="#services" style={{ color: 'var(--primary)', borderBottom: '2px solid var(--primary)' }}>Services</a>
          <a href="#work">Work</a>
          <a href="#approach">Agency</a>
        </div>
        <button className="btn-primary flex items-center gap-2">Book Consultation <ArrowRight size={16}/></button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/hero.png" alt="Hero Background" />
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <span className="label">MIAMI'S PREMIER TECH AGENCY</span>
          <h1 className="hero-title text-balance">
            Engineering <span className="gradient-text">Next-Gen Web & AI</span> Systems
          </h1>
          <p className="hero-subtitle">
            We build high-performance digital platforms and custom AI automations that scale your operations, allowing you to focus on the human side of your Miami business.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Schedule Discovery Call</button>
            <button className="btn-outline">View Client Archives</button>
          </div>
        </div>
      </section>

      {/* Trust Marquee */}
      <div className="py-6 border-y border-[var(--outline-variant)] bg-[var(--surface-low)] overflow-hidden flex whitespace-nowrap opacity-60">
        <div className="animate-marquee flex gap-12 px-12 items-center font-display font-bold tracking-widest text-[var(--primary)] text-xl">
            <span>REACT</span> <span>•</span>
            <span>NEXT.JS</span> <span>•</span>
            <span>OPENAI</span> <span>•</span>
            <span>PYTHON</span> <span>•</span>
            <span>POSTGRES</span> <span>•</span>
            <span>TAILWIND</span> <span>•</span>
            <span>ANTHROPIC</span> <span>•</span>
            <span>REACT</span> <span>•</span>
            <span>NEXT.JS</span> <span>•</span>
            <span>OPENAI</span> <span>•</span>
            <span>PYTHON</span> <span>•</span>
            <span>POSTGRES</span> <span>•</span>
            <span>TAILWIND</span> <span>•</span>
            <span>ANTHROPIC</span>
        </div>
      </div>

      {/* About Section */}
      <section className="about" id="approach">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="text-balance">Accelerating Local Growth</h2>
            <p>Your business shouldn&apos;t be bottlenecked by outdated software. At Endless Infinite, we specialize in converting slow, manual processes into lightning-fast, autonomous pipelines.</p>
            <p>From immersive landing pages to full backend AI automations, we leverage cutting-edge tech to give Miami enterprises an unfair local advantage.</p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-val">+300%</span>
                <span className="label" style={{ color: 'var(--tertiary)', marginTop: '0.5rem' }}>Efficiency Gains</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-val">40hrs</span>
                <span className="label" style={{ color: 'var(--tertiary)', marginTop: '0.5rem' }}>Saved Weekly/Client</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-card ghost-border">
              <img src="/about.png" alt="Collaborative design team" className="about-image" />
            </div>
            <div className="about-floating-card ghost-border">
              <p>&quot;We don&apos;t just build websites. We build autonomous digital employees that scale your cash flow while you sleep.&quot;</p>
              <div className="floating-footer">
                <div className="icon-circle">
                  <Zap size={20} />
                </div>
                <strong>E.I. Philosophy</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="bento" id="services">
        <div className="bento-header">
          <div>
            <span className="label" style={{ color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>SERVICES & DELIVERABLES</span>
            <h2>Agency Offerings</h2>
          </div>
          <a href="#contact" className="hover:text-white transition-colors" style={{ color: 'var(--primary)', fontWeight: 700, fontFamily: 'var(--font-display)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.25rem' }}>Start a Project &rarr;</a>
        </div>

        <div className="bento-grid">
          {/* Item 1: Custom AI Automations */}
          <div className="bento-item item-1 ghost-border group">
            <img src="/neural.png" alt="AI Agent workflows" />
            <div className="overlay"></div>
            <div className="content transition-transform group-hover:-translate-y-4">
              <div className="tags">
                <span className="tag tag-primary">Business AI</span>
                <span className="tag tag-glass">LLM Integrations</span>
              </div>
              <h3 className="bento-title text-white">Custom AI Automations</h3>
              <p className="bento-desc group-hover:hidden">Replacing 40+ hours of manual data entry with autonomous LLM pipelines and smart agents.</p>
              <p className="hidden group-hover:block font-bold mt-4 text-[#00f0ff] uppercase tracking-widest text-sm">→ View 300% ROI Case Study</p>
            </div>
          </div>

          {/* Item 2: Immersive Web Experiences */}
          <div className="bento-item item-2 ghost-border group">
            <img src="/health.png" alt="Web Interfaces" />
            <div className="overlay bg-gradient-to-t from-[var(--surface-highest)] to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="content transition-transform group-hover:-translate-y-4">
              <span className="label" style={{ color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>Development</span>
              <h3 className="bento-title text-white">Full-Stack Web</h3>
              <p className="bento-desc group-hover:hidden">Blistering fast React & Next.js applications tailored for high-conversion and sleek branding.</p>
              <p className="hidden group-hover:block font-bold mt-4 text-[#ff0055] uppercase tracking-widest text-sm">→ View Live Portfolios</p>
            </div>
          </div>

          {/* Item 3: SaaS Architecture */}
          <div className="bento-item item-3 ghost-border group cursor-pointer">
            <img src="/saas.png" alt="SaaS Database Architecture" />
            <div className="overlay"></div>
            <div className="content transition-transform group-hover:-translate-y-2">
              <h3 className="bento-title text-white">SaaS Architecture</h3>
              <p className="bento-desc group-hover:hidden" style={{ fontSize: '0.95rem' }}>Complete database, authentication, and cloud infrastructure for your startup.</p>
              <p className="hidden group-hover:block font-bold mt-4 text-[#00f0ff] uppercase tracking-widest text-sm">→ Explore DB Pipelines</p>
              <div className="icons">
                <Database size={24} />
                <Code size={24} />
              </div>
            </div>
          </div>

          {/* Item 4: AI Chatbots */}
          <div className="bento-item item-4 ghost-border group">
            <img src="/cloud.png" alt="AI Customer Service" />
            <div className="overlay"></div>
            <div className="content transition-transform group-hover:-translate-x-4">
              <h3 className="bento-title text-white" style={{ fontSize: '3rem' }}>Customer AI Agents</h3>
              <p className="bento-desc group-hover:hidden" style={{ marginBottom: '2rem' }}>24/7 intelligent customer support chatbots trained specifically on your brand&apos;s unique knowledge base.</p>
              <p className="hidden group-hover:block font-bold mb-8 text-[#ff0055] uppercase tracking-widest">→ We cut support tickets by 60%</p>
              <button className="btn-outline group-hover:bg-[#00f0ff] group-hover:text-black group-hover:border-[#00f0ff]" style={{ width: 'fit-content', borderColor: 'var(--primary)', color: 'var(--primary)' }}>Integrate AI Support</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container ghost-border">
          <div className="contact-glow"></div>
          <div className="contact-info">
            <h2 className="text-balance">Automate Your <span className="gradient-text">Business Today</span></h2>
            <p>From simple web redesigns to complex autonomous workflows, Endless Infinite is your dedicated Miami technology partner.</p>
            <div className="contact-links mt-8">
              <div className="contact-link">
                <div className="contact-link-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="contact-label">Connect</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>hello@endlessinfinite.com</div>
                </div>
              </div>
              <div className="contact-link">
                <div className="contact-link-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="contact-label">Studio</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Aether Plaza, Miami Elite</div>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="label">Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="label">Email</label>
                <input type="email" placeholder="john@company.com" />
              </div>
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea rows={4} placeholder="Tell us about the project..."></textarea>
            </div>
            <button type="button" className="btn-primary mt-2">Send Transmission</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-brand">
          <h3 className="font-headline" style={{ fontWeight: 800 }}>ENDLESS INFINITE</h3>
          <p>Architecting the future of human-machine synergy. We believe intelligence should be beautiful, kinetic, and profoundly human.</p>
        </div>
        <div className="footer-links">
          <div className="link-col">
            <span>Nav</span>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#approach">Agency</a>
          </div>
          <div className="link-col">
            <span>Legal</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="link-col">
            <span>Social</span>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
}
