import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Building Scalable & Modern Web Interfaces</h1>
        <p style={styles.heroSubtitle}>
          Delivering clean, responsive front-end solutions and digital experiences tailored for your business needs.
        </p>
        <div style={styles.buttonGroup}>
          <Link to="/products" style={styles.primaryBtn}>Explore Products</Link>
          <Link to="/contact" style={styles.secondaryBtn}>Get In Touch</Link>
        </div>
      </section>

      {/* Features / Highlights Section */}
      <section style={styles.featureGrid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>⚡ Fast Performance</h3>
          <p style={styles.cardText}>Optimized components with minimal overhead for lightning-fast site loads.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📱 Fully Responsive</h3>
          <p style={styles.cardText}>Mobile-first UI layouts built with Flexbox, CSS Grid, and modern standards.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🎯 SEO Friendly</h3>
          <p style={styles.cardText}>Clean semantic HTML structure to maximize search engine visibility and reach.</p>
        </div>
      </section>
    </div>
  );
}

// Styles for the Home Body
const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  heroSection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  heroTitle: {
    fontSize: '32px',
    color: '#0f172a',
    marginBottom: '12px',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#64748b',
    maxWidth: '650px',
    margin: '0 auto 24px auto',
    lineHeight: '1.5',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  primaryBtn: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    display: 'inline-block',
  },
  secondaryBtn: {
    backgroundColor: '#e2e8f0',
    color: '#334155',
    padding: '10px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    display: 'inline-block',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#0f172a',
    marginBottom: '8px',
  },
  cardText: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.5',
    margin: 0,
  },
};