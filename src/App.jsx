import { useEffect, useState } from "react";

const baseUrl = import.meta.env.BASE_URL;

const repairServices = [
  {
    type: "diagnostics",
    label: "Diagnostics",
    title: "Computer fault scanning",
    copy: "Warning lights, sensor faults, electrical issues, and clear next-step advice.",
    image:
      "https://images.ctfassets.net/i874q3cs1cvx/47960/095a375d455e26a5c54d9ae3c538eb4f/OBD-II-Scan-Tool-5.jpg?q=70&w=1200",
  },
  {
    type: "engine",
    label: "Engine service",
    title: "Oil, filters, belts",
    copy: "Routine maintenance and engine care for cleaner running and longer vehicle life.",
    image:
      "https://www.apexautomotive.com/wp-content/uploads/2024/11/AdobeStock_313602281-1024x576.jpg",
  },
  {
    type: "brakes",
    label: "Brake system",
    title: "Pads, discs, fluid",
    copy: "Inspection and replacement work focused on safety, grip, and reliable stopping.",
    image:
      "https://www.fixnfitauto.co.nz/wp-content/uploads/2020/01/AdobeStock_245453027-scaled.jpeg",
  },
  {
    type: "suspension",
    label: "Suspension",
    title: "Stability and comfort",
    copy: "Shock absorbers, arms, bushings, steering checks, and road-noise diagnosis.",
    image:
      "https://centrorepuestos.cl/cdn/shop/files/ChatGPT_Image_10_sept_2025_06_37_52_p.m._17fd052c-9e3d-48da-9168-447cf2be8078.png?v=1757540301&width=1200",
  },
];

const trustPoints = [
  "Volkswagen and Audi certified master expertise",
  "Specialist knowledge for Audi R8, Porsche, and Lamborghini",
  "Precision service for advanced engines and performance vehicles",
];

const steps = [
  {
    number: "01",
    title: "Book your visit",
    copy: "Choose service type, preferred date, and describe the issue before arriving.",
  },
  {
    number: "02",
    title: "Workshop inspection",
    copy: "The vehicle is checked, scanned, and reviewed so the real cause is understood.",
  },
  {
    number: "03",
    title: "Repair and handover",
    copy: "Customers get clear notes, repair status, and pickup details from the garage.",
  },
];

const initialBooking = {
  name: "",
  phone: "",
  vehicle: "",
  service: "Computer diagnostics",
  date: "",
  time: "",
  message: "",
};

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toast, setToast] = useState("");
  const [booking, setBooking] = useState(initialBooking);

  useEffect(() => {
    const syncHeader = () => setIsScrolled(window.scrollY > 24);
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const closeNav = () => setIsNavOpen(false);

  const updateBooking = (event) => {
    const { name, value } = event.target;
    setBooking((current) => ({ ...current, [name]: value }));
  };

  const submitBooking = (event) => {
    event.preventDefault();
    setToast(`Appointment request sent for ${booking.name || "customer"}.`);
    setBooking(initialBooking);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="AutoHaus Imeri home" onClick={closeNav}>
          <span className="brand-mark">AI</span>
          <span>
            <strong>AutoHaus Imeri</strong>
            <small>Certified Auto Service</small>
          </span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>
        <nav className={`site-nav ${isNavOpen ? "is-open" : ""}`}>
          <a href="#services" onClick={closeNav}>Services</a>
          <a href="#booking" onClick={closeNav}>Book</a>
          <a href="#process" onClick={closeNav}>Process</a>
          <a href="#contact" onClick={closeNav}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={`${baseUrl}assets/autohaus-imeri-mechanic-hero.png`}
            alt="Dark modern mechanic workshop for AutoHaus Imeri"
          />
          <div className="hero-shade"></div>
          <div className="hero-content">
            <p className="eyebrow">Certified automotive service in Tetovo</p>
            <h1 id="hero-title">AutoHaus Imeri</h1>
            <p className="hero-copy">
              Professional diagnostics, servicing, maintenance, and specialist repair for
              Volkswagen, Audi, Porsche, Lamborghini, and other sophisticated vehicles.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#booking">Book Appointment</a>
              <a className="button button-ghost" href="#services">View Services</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Workshop highlights">
            <span>Master specialist workshop</span>
            <strong>Ilindenska 173/3</strong>
            <small>Tetovo 1220, North Macedonia</small>
          </aside>
        </section>

        <section className="stats-band" aria-label="AutoHaus Imeri workshop qualities">
          <div>
            <strong>01</strong>
            <span>Certified Volkswagen and Audi master service</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Performance and premium vehicle specialists</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Advanced diagnostics and precise repair work</span>
          </div>
        </section>

        <section className="section section-split">
          <div>
            <p className="eyebrow">Engineering-level care</p>
            <h2>Specialist knowledge for vehicles that demand precision.</h2>
          </div>
          <p>
            AutoHaus Imeri provides professional servicing, maintenance, diagnostics, and
            repair work for everyday vehicles and high-performance models. Every visit is
            handled with clear communication, careful inspection, and respect for the
            engineering behind each car.
          </p>
        </section>

        <section className="credentials" aria-labelledby="credentials-title">
          <div>
            <p className="eyebrow">Certified expertise</p>
            <h2 id="credentials-title">Trusted by drivers of sophisticated cars and engines.</h2>
          </div>
          <p>
            Official Volkswagen and Audi certified master. Audi R8, Porsche, and
            Lamborghini certified specialist. Professional service in the region for
            servicing, maintaining, and working on sophisticated cars and engines.
          </p>
        </section>

        <section className="section services" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Workshop services</p>
            <h2 id="services-title">Service and repair work performed with specialist care</h2>
          </div>
          <div className="service-grid">
            {repairServices.map((service) => (
              <article className="service-card" key={service.type}>
                <div className={`service-visual has-photo ${service.type}`}>
                  <img src={service.image} alt={`${service.label} service`} loading="lazy" />
                </div>
                <div className="service-body">
                  <span>{service.label}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <a href="#booking" onClick={() => setBooking((current) => ({ ...current, service: service.title }))}>
                    Book this service
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="booking-section" id="booking" aria-labelledby="booking-title">
          <div className="booking-copy">
            <p className="eyebrow">Appointment booking</p>
            <h2 id="booking-title">Reserve a workshop time</h2>
            <p>
              Send your vehicle details, preferred time, and a short description of the
              issue. The workshop will review your request and prepare for the correct
              diagnostic or service procedure before your visit.
            </p>
            <ul className="trust-list">
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <form className="booking-form" onSubmit={submitBooking}>
            <label>
              Full name
              <input
                required
                name="name"
                value={booking.name}
                onChange={updateBooking}
                placeholder="Your name"
              />
            </label>
            <label>
              Phone number
              <input
                required
                name="phone"
                value={booking.phone}
                onChange={updateBooking}
                placeholder="+389 ..."
              />
            </label>
            <label>
              Vehicle
              <input
                required
                name="vehicle"
                value={booking.vehicle}
                onChange={updateBooking}
                placeholder="VW Golf 7, BMW 320d..."
              />
            </label>
            <label>
              Service needed
              <select name="service" value={booking.service} onChange={updateBooking}>
                <option>Computer diagnostics</option>
                <option>Oil and filter service</option>
                <option>Brake repair</option>
                <option>Suspension check</option>
                <option>Engine issue</option>
                <option>Other repair</option>
              </select>
            </label>
            <label>
              Preferred date
              <input required type="date" name="date" value={booking.date} onChange={updateBooking} />
            </label>
            <label>
              Preferred time
              <input required type="time" name="time" value={booking.time} onChange={updateBooking} />
            </label>
            <label className="full">
              Problem description
              <textarea
                name="message"
                value={booking.message}
                onChange={updateBooking}
                placeholder="Tell us what is happening with the car..."
                rows="5"
              ></textarea>
            </label>
            <button className="button button-primary full" type="submit">
              Send Appointment Request
            </button>
          </form>
        </section>

        <section className="process" id="process" aria-labelledby="process-title">
          <div className="section-heading">
            <p className="eyebrow">Workshop process</p>
            <h2 id="process-title">A clear path from inspection to completed service</h2>
          </div>
          <ol className="timeline">
            {steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Visit the garage</p>
            <h2 id="contact-title">AutoHaus Imeri, Ilindenska 173/3</h2>
            <p>
              Located in Tetovo 1220, North Macedonia. Book your appointment first, then
              visit the workshop for diagnostics, scheduled maintenance, specialist service,
              or precision repair work.
            </p>
          </div>
          <div className="contact-actions" aria-label="Contact actions">
            <a
              className="button button-primary"
              href="https://www.google.com/maps/search/?api=1&query=AutoHaus%20Imeri%20Ilindenska%20173%2F3%20Tetovo%201220"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
            <a className="button button-ghost" href="#booking">Book a Service</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>AutoHaus Imeri</span>
        <span>Certified automotive service in Tetovo</span>
      </footer>

      <div className={`toast ${toast ? "is-visible" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}

export default App;
