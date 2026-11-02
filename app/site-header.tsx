"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>
            Dispatch: <a href="tel:+18005551234">1-800-555-1234</a>
            &nbsp;|&nbsp;
            <a href="mailto:dispatch@drayntrucking.com">
              dispatch@drayntrucking.com
            </a>
          </div>
          <div className="emergency">
            Now Hiring Experienced Drivers —{" "}
            <Link
              href="/careers"
              style={{ color: "var(--amber)", textDecoration: "underline" }}
            >
              Apply Today
            </Link>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" onClick={closeNavigation}>
            <div className="brand-mark">DR</div>
            <div className="brand-text">
              <div className="name">D. Rayn Trucking</div>
              <div className="tag">Crude &amp; Fuel Haulage</div>
            </div>
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label={isNavigationOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isNavigationOpen}
            aria-controls="main-navigation"
            onClick={() => setIsNavigationOpen((isOpen) => !isOpen)}
          >
            &#9776;
          </button>
          <nav
            className={`main-nav${isNavigationOpen ? " open" : ""}`}
            id="main-navigation"
          >
            <ul>
              <li><Link href="/" onClick={closeNavigation}>Home</Link></li>
              <li><Link href="/services" onClick={closeNavigation}>Services</Link></li>
              <li><Link href="/about" onClick={closeNavigation}>About</Link></li>
              <li><Link href="/safety" onClick={closeNavigation}>Safety</Link></li>
              <li><Link href="/careers" onClick={closeNavigation}>Careers</Link></li>
              <li><Link href="/contact" onClick={closeNavigation}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
