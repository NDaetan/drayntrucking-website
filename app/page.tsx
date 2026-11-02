import Link from "next/link";

export default function Home() {
  return (
      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="eyebrow">Remote Region Specialists</div>
            <h1>Hauling Oil Where Other Fleets Won&apos;t Go</h1>
            <p className="lead">
              D. Rayn Trucking is a small, owner-operated carrier moving crude
              oil, produced water, and fuel across ice roads, muskeg, and
              backcountry routes — with the personal attention only a small
              fleet can give.
            </p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">Request a Quote</Link>
              <a href="#careers" className="btn btn-outline">We&apos;re Hiring Drivers</a>
            </div>
          </div>
        </section>

        <div className="stats">
          <div className="container">
            <div className="stat">
              <div className="num">4</div>
              <div className="label">Trucks on the Road</div>
            </div>
            <div className="stat">
              <div className="num">100%</div>
              <div className="label">Owner-Operated</div>
            </div>
            <div className="stat">
              <div className="num">0</div>
              <div className="label">Lost-Time Incidents YTD</div>
            </div>
            <div className="stat">
              <div className="num">24/7</div>
              <div className="label">Dispatch Coverage</div>
            </div>
          </div>
        </div>

        <section id="services">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">What We Haul</div>
              <h2>Built for the Backcountry Oilfield</h2>
              <p>
                From ice roads in the far north to muskeg access roads and
                remote well pads, our drivers and equipment are purpose-built
                for terrain that stops ordinary carriers.
              </p>
            </div>
            <div className="grid grid-3">
              <div className="card">
                <div className="icon">&#128663;</div>
                <h3>Crude Oil Transport</h3>
                <p>Insulated and heated tank trailers move crude from wellhead to terminal, even in sub-zero conditions.</p>
              </div>
              <div className="card">
                <div className="icon">&#9878;</div>
                <h3>Produced Water Hauling</h3>
                <p>Vacuum tank service for produced water and fluids, keeping remote pads compliant and operating.</p>
              </div>
              <div className="card">
                <div className="icon">&#9981;</div>
                <h3>Fuel &amp; Lease Supply</h3>
                <p>Diesel, propane, and lease fuel delivery to camps and rigs across ice roads and gravel routes.</p>
              </div>
              <div className="card">
                <div className="icon">&#10052;</div>
                <h3>Winter Road Logistics</h3>
                <p>Seasonal ice-road planning and staged hauling to maximize the short winter access window.</p>
              </div>
              <div className="card">
                <div className="icon">&#128737;</div>
                <h3>Emergency Response</h3>
                <p>Rapid-response hauling and spill-support equipment on call for remote site incidents.</p>
              </div>
              <div className="card">
                <div className="icon">&#128202;</div>
                <h3>GPS Fleet Tracking</h3>
                <p>Live load tracking and telemetry so operators always know where their product is.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="alt" id="about">
          <div className="container two-col">
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
                Why Operators Choose Us
              </div>
              <h2>Reliability When the Road Runs Out</h2>
              <ul className="feature-list" id="safety">
                <li><span className="check">&#10003;</span><span>DOT &amp; Transport Canada certified drivers with remote and winter-road endorsements.</span></li>
                <li><span className="check">&#10003;</span><span>Heated, insulated tankers rated for extreme cold and ice-road weight restrictions.</span></li>
                <li><span className="check">&#10003;</span><span>Satellite communication on every unit for zero-signal backcountry routes.</span></li>
                <li><span className="check">&#10003;</span><span>24/7 dispatch coordination with camp and site operators.</span></li>
                <li><span className="check">&#10003;</span><span>Full spill-response kits and environmental compliance on every load.</span></li>
              </ul>
            </div>
            <div className="media-block">
              <div className="caption">Ice Road Convoy — Northern Access Route</div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Client Feedback</div>
              <h2>Trusted by Operators in the Region</h2>
            </div>
            <div className="grid grid-3">
              <div className="testimonial">
                <p className="quote">&quot;D. Rayn is the carrier we call first for the winter road. Small fleet, but they never miss a haul window.&quot;</p>
                <div className="who">— Field Superintendent, Northern Basin Energy</div>
              </div>
              <div className="testimonial">
                <p className="quote">&quot;Their drivers know the terrain better than our own site crews. Zero incidents, every load on time.&quot;</p>
                <div className="who">— Logistics Manager, Backcountry Resources</div>
              </div>
              <div className="testimonial">
                <p className="quote">&quot;When our access road washed out, D. Rayn rerouted within hours and kept our fuel supply moving.&quot;</p>
                <div className="who">— Camp Operations Lead, Muskeg Energy Corp</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Need Product Moved to a Remote Site?</h2>
            <p>Tell us your route, volume, and timeline. Our dispatch team will build a haul plan within one business day.</p>
            <Link href="/#contact" className="btn btn-dark">Get a Free Quote</Link>
          </div>
        </section>

        <section className="alt" id="careers">
          <div className="container two-col">
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
                Join Our Team
              </div>
              <h2>We&apos;re Hiring Experienced Drivers</h2>
              <p>
                As a small, owner-operated fleet, every driver we hire matters
                — you&apos;ll run consistent routes, know your dispatcher by
                name, and haul for a company that treats you like part of the
                team, not a number.
              </p>
              <a href="mailto:dispatch@drayntrucking.com" className="btn btn-primary mt-24">View Open Positions</a>
            </div>
            <div className="media-block">
              <div className="caption">Now Hiring — Class 1/A Drivers</div>
            </div>
          </div>
        </section>
      </main>
  );
}
