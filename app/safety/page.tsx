import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety | D. Rayn Trucking",
  description:
    "Learn about driver training, equipment inspections, and remote-road safety at D. Rayn Trucking.",
};

export default function SafetyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Our Commitment</div>
          <h1>Safety Is the Load We Never Compromise</h1>
          <p>
            Hauling crude and fuel across remote, harsh-weather terrain demands
            a safety culture built into every dispatch, every driver, and every
            unit in our fleet.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Standards</div>
            <h2>How We Keep Every Haul Safe</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="icon">&#127891;</div>
              <h3>Certified Driver Training</h3>
              <p>All drivers complete DOT/Transport Canada certification plus in-house winter road, ice-crossing, and hazardous materials training before their first remote haul.</p>
            </div>
            <div className="card">
              <div className="icon">&#128295;</div>
              <h3>Rigorous Equipment Inspection</h3>
              <p>Every tanker and tractor undergoes pre-trip, post-trip, and scheduled maintenance inspections rated for extreme cold and off-highway stress.</p>
            </div>
            <div className="card">
              <div className="icon">&#128225;</div>
              <h3>Satellite Communication</h3>
              <p>Units operating beyond cell coverage carry satellite communicators so dispatch always maintains contact, even deep in the backcountry.</p>
            </div>
            <div className="card">
              <div className="icon">&#10052;</div>
              <h3>Ice Road Risk Management</h3>
              <p>Daily ice-thickness reports, load-weight restrictions, and route holds are enforced before any unit is cleared onto a winter road.</p>
            </div>
            <div className="card">
              <div className="icon">&#9762;</div>
              <h3>Spill Prevention &amp; Response</h3>
              <p>Every tanker carries spill containment kits, and crews are trained in environmental incident response for remote-site conditions.</p>
            </div>
            <div className="card">
              <div className="icon">&#128202;</div>
              <h3>Continuous Monitoring</h3>
              <p>GPS and telemetry monitor speed, braking, and route compliance in real time so dispatch can intervene before an issue becomes an incident.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container two-col">
          <div className="media-block">
            <div className="caption">Pre-Trip Inspection — Northern Terminal Yard</div>
          </div>
          <div>
            <div
              className="eyebrow"
              style={{
                color: "var(--rust)",
                fontFamily: "var(--font-head)",
                letterSpacing: ".18em",
                fontSize: ".8rem",
              }}
            >
              Track Record
            </div>
            <h2>Results That Back Our Standards</h2>
            <ul className="feature-list">
              <li><span className="check">&#10003;</span><span>Zero lost-time incidents across the current operating year.</span></li>
              <li><span className="check">&#10003;</span><span>100% of drivers hold current winter-road and remote-access certification.</span></li>
              <li><span className="check">&#10003;</span><span>Fleet-wide compliance with cold-weather DOT/Transport Canada equipment standards.</span></li>
              <li><span className="check">&#10003;</span><span>Annual third-party safety audits across our terminal and fleet operations.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Questions About Our Safety Program?</h2>
          <p>
            Our safety manager is available to walk operators through our
            certifications, protocols, and audit history.
          </p>
          <Link href="/contact" className="btn btn-dark">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
