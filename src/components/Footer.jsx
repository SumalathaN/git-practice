import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Left Side: Brand Info */}
        <div style={styles.footerSection}>
          <h4 style={styles.footerBrand}>WebTech Studio</h4>
          <p style={styles.footerText}>
            Building scalable, responsive, and modern web applications with clean code.
          </p>
        </div>

        {/* Right Side: Quick Navigation Links */}
        <div style={styles.footerSection}>
          <h5 style={styles.footerHeading}>Quick Links</h5>
          <ul style={styles.footerLinksList}>
            <li><Link to="/" style={styles.footerLink}>Home</Link></li>
            <li><Link to="/about" style={styles.footerLink}>About</Link></li>
            <li><Link to="/services" style={styles.footerLink}>Services</Link></li>
            <li><Link to="/products" style={styles.footerLink}>Products</Link></li>
            <li><Link to="/contact" style={styles.footerLink}>Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={styles.footerBottom}>
        <p>© 2026 WebTech Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// Inline Styles for Footer
const styles = {
  footerContainer: {
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    color: '#64748b',
    marginTop: 'auto', // Pushes footer to the bottom if page content is short
  },
  footerContent: {
    maxW: '1000px',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '32px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '24px',
    boxSizing: 'border-box',
  },
  footerSection: {
    flex: '1',
    minWidth: '220px',
  },
  footerBrand: {
    fontSize: '18px',
    color: '#0f172a',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: '14px',
    lineHeight: '1.5',
    margin: 0,
  },
  footerHeading: {
    fontSize: '15px',
    color: '#0f172a',
    marginBottom: '12px',
    fontWeight: 'bold',
  },
  footerLinksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  footerLink: {
    textDecoration: 'none',
    color: '#64748b',
    fontSize: '14px',
    transition: 'color 0.2s',
  },
  footerBottom: {
    textAlign: 'center',
    padding: '16px 24px',
    borderTop: '1px solid #f1f5f9',
    fontSize: '13px',
    color: '#94a3b8',
  },
};