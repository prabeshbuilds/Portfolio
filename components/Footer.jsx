import React from "react";
import Link from "next/link";

const footerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=DM+Sans:wght@300;400&display=swap');

  .footer-wrap {
    font-family: 'DM Sans', sans-serif;
    border-top: 1px solid #e5e7eb;
    padding: 3rem 2rem 2rem;
    position: relative;
    overflow: hidden;
  }
  .footer-grid {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .footer-logo {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    letter-spacing: -0.5px;
  }
  .footer-logo span {
    color: #1D9E75;
  }
  .footer-tagline {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.6;
    font-weight: 300;
  }
  .footer-section-label {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #9ca3af;
    margin-bottom: 14px;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .footer-link {
    font-size: 14px;
    color: #6b7280;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;
    width: fit-content;
  }
  .footer-link:hover { color: #1D9E75; }
  .footer-link .arrow {
    font-size: 10px;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.2s, transform 0.2s;
  }
  .footer-link:hover .arrow {
    opacity: 1;
    transform: translateX(0);
  }
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .social-link {
    font-size: 14px;
    color: #6b7280;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.2s;
  }
  .social-link:hover { color: #111827; }
  .social-icon {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9fafb;
    transition: background 0.2s, border-color 0.2s;
    flex-shrink: 0;
  }
  .social-link:hover .social-icon {
    background: #ffffff;
    border-color: #d1d5db;
  }
  .social-icon svg { display: block; }
  .footer-bottom {
    max-width: 800px;
    margin: 2.5rem auto 0;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .footer-copy {
    font-size: 12px;
    color: #9ca3af;
  }
  .footer-copy strong {
    color: #6b7280;
    font-weight: 400;
  }
  .status-dot {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #9ca3af;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1D9E75;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

export default function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer-wrap">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              Prabesh<span>.dev</span>
            </div>
            <p className="footer-tagline">
              Crafting thoughtful digital experiences, one line at a time.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="footer-section-label">Navigate</p>
            <div className="footer-links">
              <Link href="/" className="footer-link">
                Home <span className="arrow">→</span>
              </Link>
              <Link href="/My_works/Project" className="footer-link">
                Projects <span className="arrow">→</span>
              </Link>
              <Link href="/My_works/Contact" className="footer-link">
                Contact <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="footer-section-label">Connect</p>
            <div className="social-links">
              <a
                href="https://github.com/prabeshbuilds"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span className="social-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/prabesh-khatiwada-13638a257/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span className="social-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Prabesh.dev</strong>. All rights reserved.
          </p>
          <span className="status-dot">
            <span className="dot"></span>
            Available for work
          </span>
        </div>
      </footer>
    </>
  );
}