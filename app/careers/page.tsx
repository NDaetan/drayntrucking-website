import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | D. Rayn Trucking",
  description:
    "Explore driver opportunities with D. Rayn Trucking, a small owner-operated remote-region fleet.",
};

export default function CareersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Join Our Team</div>
          <h1>Drive for a Company That Knows Your Name</h1>
          <p>
            D. Rayn Trucking is a small, owner-operated fleet — which means
            consistent routes, direct access to the owner, and no getting lost
            in a big-company shuffle. We&apos;re looking for experienced drivers
            to grow with us.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Drive With Us</div>
            <h2>What You Get on Our Team</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="icon">&#128176;</div>
              <h3>Competitive Pay</h3>
              <p>Mileage and hourly rates that reflect the skill it takes to haul crude and fuel on remote, seasonal routes.</p>
            </div>
            <div className="card">
              <div className="icon">&#128197;</div>
              <h3>Consistent, Local-ish Routes</h3>
              <p>Small fleet means predictable scheduling — know your routes and plan your time off with confidence.</p>
            </div>
            <div className="card">
              <div className="icon">&#128295;</div>
              <h3>Well-Maintained Equipment</h3>
              <p>Newer, cold-weather-rated tractors and tankers that are inspected and maintained on a tight schedule — never run-down gear.</p>
            </div>
            <div className="card">
              <div className="icon">&#129309;</div>
              <h3>Direct Access to Ownership</h3>
              <p>Questions or concerns go straight to the owner — no call centers, no layers of management.</p>
            </div>
            <div className="card">
              <div className="icon">&#127891;</div>
              <h3>Paid Training</h3>
              <p>Ice-road, muskeg, and remote-access training provided and paid for before you haul your first load.</p>
            </div>
            <div className="card">
              <div className="icon">&#128737;</div>
              <h3>Safety-First Culture</h3>
              <p>You&apos;ll never be pressured to run a load or route that isn&apos;t safe — full stop.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt" id="openings">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Current Openings</div>
            <h2>Now Hiring</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Class 1/A Driver — Crude &amp; Fluid Hauling</h3>
              <p><strong>Type:</strong> Full-time &nbsp;|&nbsp; <strong>Location:</strong> Fort Remote, AB and surrounding sites</p>
              <p>Haul crude oil and produced water between remote well sites and terminal/disposal facilities. Winter road experience an asset; training provided.</p>
              <ul className="feature-list">
                <li><span className="check">&#10003;</span><span>Valid Class 1/A license with clean abstract</span></li>
                <li><span className="check">&#10003;</span><span>Tanker/hazmat endorsement (or willingness to obtain)</span></li>
                <li><span className="check">&#10003;</span><span>Comfortable with remote, seasonal terrain</span></li>
              </ul>
              <a href="#apply" className="btn btn-primary mt-24">Apply for This Role</a>
            </div>
            <div className="card">
              <h3>Class 1/A Driver — Fuel &amp; Lease Supply</h3>
              <p><strong>Type:</strong> Full-time / Seasonal &nbsp;|&nbsp; <strong>Location:</strong> Regional routes to remote camps</p>
              <p>Deliver diesel and lease fuel to camps and rig sites on scheduled and on-call routes, including winter ice-road runs.</p>
              <ul className="feature-list">
                <li><span className="check">&#10003;</span><span>Valid Class 1/A license, tank endorsement preferred</span></li>
                <li><span className="check">&#10003;</span><span>Willingness to work seasonal winter-road schedules</span></li>
                <li><span className="check">&#10003;</span><span>Strong communication skills with dispatch and site crews</span></li>
              </ul>
              <a href="#apply" className="btn btn-primary mt-24">Apply for This Role</a>
            </div>
          </div>
          <p className="text-center mt-24" style={{ color: "#4a4f53" }}>
            Don&apos;t see the right fit? We&apos;re always open to hearing from
            experienced drivers —{" "}
            <a href="#apply" style={{ color: "var(--rust-dark)", fontWeight: 600 }}>
              send us your resume anyway
            </a>.
          </p>
        </div>
      </section>

      <section id="apply">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Apply Now</div>
            <h2>Send Us Your Application</h2>
            <p>Fill out the form below and we&apos;ll be in touch to schedule a conversation.</p>
          </div>
          <div className="form-card" style={{ maxWidth: 760, margin: "0 auto" }}>
            <form id="application-form">
              <div className="form-grid">
                <div>
                  <label htmlFor="app-name">Full Name</label>
                  <input type="text" id="app-name" name="name" required />
                </div>
                <div>
                  <label htmlFor="app-phone">Phone</label>
                  <input type="tel" id="app-phone" name="phone" required />
                </div>
                <div>
                  <label htmlFor="app-email">Email</label>
                  <input type="email" id="app-email" name="email" required />
                </div>
                <div>
                  <label htmlFor="app-position">Position</label>
                  <select id="app-position" name="position">
                    <option>Class 1/A Driver — Crude &amp; Fluid Hauling</option>
                    <option>Class 1/A Driver — Fuel &amp; Lease Supply</option>
                    <option>General Application</option>
                  </select>
                </div>
                <div className="full">
                  <label htmlFor="app-license">License Class &amp; Endorsements</label>
                  <input type="text" id="app-license" name="license" placeholder="e.g. Class 1, tanker/hazmat endorsement" />
                </div>
                <div className="full">
                  <label htmlFor="app-experience">Driving Experience</label>
                  <textarea id="app-experience" name="experience" placeholder="Years of experience, relevant hauls, winter road experience, etc." />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-24" disabled>
                Submit Application
              </button>
              <p style={{ marginTop: 16, fontWeight: 600 }}>
                To apply, call dispatch at{" "}
                <a href="tel:+18005551234">1-800-555-1234</a> or email{" "}
                <a href="mailto:dispatch@drayntrucking.com">dispatch@drayntrucking.com</a>.
                Online form submission is not connected yet.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Have Questions Before You Apply?</h2>
          <p>Call or email us directly — you&apos;ll talk to someone who actually runs the fleet.</p>
          <Link href="/contact" className="btn btn-dark">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
