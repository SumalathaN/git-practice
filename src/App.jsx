import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Notice: No BrowserRouter here!

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Products from './pages/products/Products';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';

export default function App() {
  return (
    <div style={styles.appContainer}>
      <Header />
      
      <main style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'sans-serif'
  },
  mainContent: {
    flex: 1,
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    padding: '24px',
    boxSizing: 'border-box'
  }
};