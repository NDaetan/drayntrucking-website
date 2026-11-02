import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | D. Rayn Trucking",
  description:
    "Contact D. Rayn Trucking dispatch for hauling quotes, route changes, or remote-site deliveries.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Get In Touch</div>
          <h1>Request a Quote or Reach Dispatch</h1>
          <p>
            Whether it&apos;s a scheduled haul or an urgent remote-site delivery,
            our team is ready around the clock.
          </p>
        </div>
      </section>

      <section>
        <div className="container two-col" style={{ alignItems: "flex-start" }}>
          <div className="form-card">
            <h2 style={{ marginBottom: 6 }}>Request a Quote</h2>
            <p style={{ color: "#4a4f53", marginTop: 0, marginBottom: 24 }}>
              Fill out the details below and our dispatch team will respond
              within one business day.
            </p>
            <form id="quote-form">
              <div className="form-grid">
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="full">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service">
                    <option>Crude Oil Transport</option>
                    <option>Produced Water / Fluid Hauling</option>
                    <option>Fuel &amp; Lease Supply Delivery</option>
                    <option>Winter Road Logistics</option>
                    <option>Camp &amp; Rig Freight</option>
                    <option>Emergency / Standby Response</option>
                  </select>
                </div>
                <div className="full">
                  <label htmlFor="location">Site Location / Route</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g. Well pad access, Fort Remote region"
                  />
                </div>
                <div className="full">
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Volume, timeline, and any site access notes"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-24" disabled>
                Submit Request
              </button>
              <p style={{ marginTop: 16, fontWeight: 600 }}>
                For quotes, call dispatch at{" "}
                <a href="tel:+18005551234">1-800-555-1234</a> or email{" "}
                <a href="mailto:dispatch@drayntrucking.com">dispatch@drayntrucking.com</a>.
                Online form submission is not connected yet.
              </p>
            </form>
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
              Reach Us Directly
            </div>
            <h2>Dispatch Is Always On</h2>
            <p style={{ color: "#4a4f53" }}>
              Remote site logistics don&apos;t stop after hours — neither do we.
              For urgent hauls or route changes, call dispatch directly.
            </p>
            <div className="info-strip" style={{ gridTemplateColumns: "1fr", marginTop: 24 }}>
              <div className="item" style={{ textAlign: "left", display: "flex", gap: 16, alignItems: "center" }}>
                <div className="icon">&#128222;</div>
                <div>
                  <strong>24/7 Dispatch</strong><br />
                  <a href="tel:+18005551234">1-800-555-1234</a>
                </div>
              </div>
              <div className="item" style={{ textAlign: "left", display: "flex", gap: 16, alignItems: "center" }}>
                <div className="icon">&#9993;</div>
                <div>
                  <strong>Email</strong><br />
                  <a href="mailto:dispatch@drayntrucking.com">dispatch@drayntrucking.com</a>
                </div>
              </div>
              <div className="item" style={{ textAlign: "left", display: "flex", gap: 16, alignItems: "center" }}>
                <div className="icon">&#128205;</div>
                <div>
                  <strong>Terminal Yard</strong><br />
                  Highway 63 North, Fort Remote, AB
                </div>
              </div>
            </div>
            <div className="map-block mt-24">Terminal Yard Location Map</div>
          </div>
        </div>
      </section>
    </main>
  );
}
