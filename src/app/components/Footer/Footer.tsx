import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>mettā muse</h3>
          <div className={styles.footerLinks}>
            <Link href="/about">About Us</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/artisans">Artisans</Link>
            <Link href="/boutiques">Boutiques</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/compliance">EU Compliances Docs</Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <div className={styles.footerLinks}>
            <Link href="/orders">Orders & Shipping</Link>
            <Link href="/seller">Join/Login as a Seller</Link>
            <Link href="/payment">Payment & Pricing</Link>
            <Link href="/returns">Return & Refunds</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <div className={styles.socialIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <div className={styles.socialIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>CONTACT US</h3>
          <div className={styles.contactInfo}>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Currency</h3>
          <div className={styles.currency}>
            <div className={styles.currencySelector}>
              <div className={styles.flag}>
                <Image
                  src="/images/us-flag.svg"
                  alt="US Flag"
                  width={24}
                  height={16}
                />
              </div>
              <span className={styles.currencyText}>USD</span>
            </div>
          </div>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>mettā muse Accepts</h3>
          <div className={styles.paymentMethods}>
            <div className={styles.paymentIcon}>
              <div className={styles.paymentMethod}></div>
            </div>
            <div className={styles.paymentIcon}>
              <div className={styles.paymentMethod}></div>
            </div>
            <div className={styles.paymentIcon}>
              <div className={styles.paymentMethod}></div>
            </div>
            <div className={styles.paymentIcon}>
              <div className={styles.paymentMethod}></div>
            </div>
            <div className={styles.paymentIcon}>
              <div className={styles.paymentMethod}></div>
            </div>
            <div className={styles.paymentIcon}>
              <div className={styles.paymentMethod}></div>
            </div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Be the first to know</h3>
          <p className={styles.newsletterText}>
            Sign up for updates from mettā muse.
          </p>
          <div className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.footerDivider}></div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
