import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hauling Services | D. Rayn Trucking",
  description:
    "Crude oil, produced water, fuel, and freight hauling for remote oil operations and winter roads.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">What We Do</div>
          <h1>Hauling Services for Remote Oil Operations</h1>
          <p>
            Purpose-built equipment and experienced drivers for crude oil,
            fluids, and fuel transport across ice roads, muskeg, and unmaintained
            backcountry access.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <div className="icon">&#128663;</div>
              <h3>Crude Oil Transport</h3>
              <p>
                Heated and insulated tank trailers rated for extreme cold,
                carrying crude from wellhead to pipeline terminal or rail
                loading facility. Every unit is equipped with spill containment
                and satellite tracking.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#9878;</div>
              <h3>Produced Water &amp; Fluid Hauling</h3>
              <p>
                Vacuum tank trucks for produced water, frac fluids, and
                completion byproducts. Fully compliant disposal-site
                coordination for remote pad operations.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#9981;</div>
              <h3>Fuel &amp; Lease Supply Delivery</h3>
              <p>
                Scheduled and on-demand diesel, propane, and lease fuel drops
                to camps, drilling rigs, and remote equipment yards.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#10052;</div>
              <h3>Winter &amp; Ice Road Logistics</h3>
              <p>
                Seasonal route planning, load staging, and weight-restriction
                compliance to make the most of short winter-road access
                windows.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#127976;</div>
              <h3>Camp &amp; Rig Freight</h3>
              <p>
                Flatbed and specialized freight moves for camp modules, rig
                components, and heavy equipment into remote sites.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#128737;</div>
              <h3>Emergency &amp; Standby Response</h3>
              <p>
                Pre-positioned crews and equipment for emergency hauls, spill
                response support, and rapid site remediation logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Fleet &amp; Equipment</div>
            <h2>Equipment Rated for the Terrain We Serve</h2>
            <p>
              Our fleet is maintained and configured specifically for
              cold-weather, off-highway, and remote-access hauling.
            </p>
          </div>
          <table className="rates">
            <thead>
              <tr>
                <th>Equipment Type</th>
                <th>Capacity</th>
                <th>Best Suited For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Insulated Crude Tankers</td>
                <td>up to 130 bbl</td>
                <td>Sub-zero crude &amp; heavy oil transport</td>
              </tr>
              <tr>
                <td>Vacuum Tank Trucks</td>
                <td>up to 130 bbl</td>
                <td>Produced water, frac fluid, waste haul</td>
              </tr>
              <tr>
                <td>Fuel &amp; Lease Tankers</td>
                <td>up to 10,000 gal</td>
                <td>Diesel &amp; propane camp/rig supply</td>
              </tr>
              <tr>
                <td>Tri-Drive Off-Road Tractors</td>
                <td>Class 8, winter-rated</td>
                <td>Ice road &amp; muskeg access routes</td>
              </tr>
              <tr>
                <td>Heavy Flatbeds &amp; Lowboys</td>
                <td>up to 60 tons</td>
                <td>Camp modules &amp; rig equipment moves</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Get a Route &amp; Rate Quote</h2>
          <p>
            Share your site location, product, and volume and we&apos;ll build a
            haul plan tailored to your terrain and schedule.
          </p>
          <Link href="/contact" className="btn btn-dark">Request a Quote</Link>
        </div>
      </section>
    </main>
  );
}
