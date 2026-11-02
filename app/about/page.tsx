import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | D. Rayn Trucking",
  description:
    "Learn about D. Rayn Trucking, a small owner-operated carrier serving remote oilfield terrain.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Our Story</div>
          <h1>A Small Fleet Built for Big Terrain</h1>
          <p>
            D. Rayn Trucking is a small, owner-operated carrier running four
            trucks into some of the toughest remote oilfield terrain in the
            region. What we lack in size, we make up for in experience and
            attention to every load.
          </p>
        </div>
      </section>

      <section>
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
              Who We Are
            </div>
            <h2>A Carrier Built for Remote Terrain</h2>
            <p>
              We were founded on a simple premise: operators working in remote,
              harsh-weather regions deserve a carrier that understands the
              terrain as well as the product. Every driver we hire trains
              specifically for ice-road, muskeg, and off-highway conditions
              before they ever haul a load.
            </p>
            <p>
              We&apos;re privately owned and family-operated, headquartered out
              of our terminal yard in Fort Remote, AB — close to the fields we
              serve and the winter roads we depend on. Staying small means our
              drivers run consistent routes and work directly with the owner,
              not through layers of management.
            </p>
          </div>
          <div className="media-block">
            <div className="caption">Our Fleet — Fort Remote Terminal Yard</div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Milestones</div>
            <h2>Our Journey</h2>
          </div>
          <ul className="timeline">
            <li><div className="year">Year 1</div><div>Founded with a single truck hauling fuel to a remote drilling camp.</div></li>
            <li><div className="year">Year 2</div><div>Added crude oil hauling and our first insulated tank trailer for winter service.</div></li>
            <li><div className="year">Year 3</div><div>Grew to a four-truck fleet, adding produced water and lease-fuel service.</div></li>
            <li><div className="year">Today</div><div>Running four trucks year-round with a perfect safety record and a growing client base.</div></li>
            <li><div className="year">What&apos;s Next</div><div>Hiring experienced drivers to help us grow while keeping our small-company values.</div></li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Values</div>
            <h2>What Drives Us</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="icon">&#128737;</div>
              <h3>Safety First</h3>
              <p>Every dispatch decision is made with driver and site safety as the top priority — no load is worth cutting a corner.</p>
            </div>
            <div className="card">
              <div className="icon">&#128506;</div>
              <h3>Terrain Expertise</h3>
              <p>Our drivers and dispatchers know the ice roads, muskeg crossings, and seasonal restrictions better than anyone in the region.</p>
            </div>
            <div className="card">
              <div className="icon">&#129309;</div>
              <h3>Operator Partnership</h3>
              <p>We work as an extension of our clients&apos; logistics teams, planning hauls around production schedules, not the other way around.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Work With a Carrier That Knows the North</h2>
          <p>Let&apos;s talk about your site, your product, and your season.</p>
          <Link href="/contact" className="btn btn-dark">Contact Our Team</Link>
        </div>
      </section>
    </main>
  );
}
