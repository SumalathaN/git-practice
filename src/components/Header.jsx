import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header style={styles.headerContainer}>
      {/* Logo on the Left */}
      <Link to="/" style={styles.logo}>
        <strong>WebTech</strong> Studio
      </Link>

      {/* Menu on the Right */}
      <nav>
        <ul style={styles.navList}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    ...styles.navLink,
                    ...(isActive ? styles.activeNavLink : {})
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

// Inline Styles handling Flexbox alignment (Logo left, Menu right)
const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Pushes Logo to left and Menu to right
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
  },
  logo: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#2563eb',
    fontWeight: '600'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '12px',
    margin: 0,
    padding: 0,
    alignItems: 'center'
  },
  navLink: {
    textDecoration: 'none',
    padding: '8px 14px',
    fontSize: '15px',
    borderRadius: '6px',
    color: '#64748b',
    transition: 'all 0.2s ease',
    display: 'inline-block'
  },
  activeNavLink: {
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontWeight: '600'
  }
};