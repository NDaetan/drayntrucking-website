import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>D. Rayn Trucking</h4>
            <p>
              Remote-region crude oil, fuel, and fluid hauling across northern
              oilfields, ice roads, and backcountry access routes.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/safety">Safety</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Crude Oil Hauling</Link></li>
              <li><Link href="/services">Fuel Delivery</Link></li>
              <li><Link href="/services">Winter Road Logistics</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Dispatch: <a href="tel:+18005551234">1-800-555-1234</a></li>
              <li><a href="mailto:dispatch@drayntrucking.com">dispatch@drayntrucking.com</a></li>
              <li>Terminal Yard, Fort Remote, AB</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 D. Rayn Trucking Ltd. All rights reserved.</div>
          <div className="safety">Safety First. Every Load. Every Road.</div>
        </div>
      </div>
    </footer>
  );
}
