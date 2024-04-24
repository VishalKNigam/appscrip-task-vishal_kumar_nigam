import Image from "next/image";
import SubscribeForm from "./subscribeForm";
import MetaMuseLinks from "./metaMuseLinks";
import QuickLinks from "./quickLinks";
import "../app/footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-container">
        <div className="contact-info-container">
          <div className="subscribe-container">
            <h3>Be the first to know</h3>
            <p>Sign up for updates from mettā muse.</p>
            <SubscribeForm />
          </div>
          <div className="contact-details-container">
            <div className="contact-us">
              <h3>Contact us</h3>
              <div>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>
            <div className="currency">
              <h3>currency</h3>
              <p className="currency-indicator">
                <Image
                  src="/US-flag.png"
                  alt="US flag"
                  width={24}
                  height={24}
                />{" "}
                + USD
              </p>
              <p className="transactions-info">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className="additional-info-container">
          <MetaMuseLinks />
          <QuickLinks />
        </div>
        <p className="copyrights">
          Copyright © 2024 mettamuse. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
