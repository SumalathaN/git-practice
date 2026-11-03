// src/pages/about/About.jsx

import React, { useRef } from 'react';

export default function Blog() { 
    

 const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    // 2. Tell the browser to smoothly scroll to that specific section
    contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <>
      <div>
      <h2>Blog</h2>
      <p>We are a dedicated group of web developers and UI designers.</p>
    </div>
    <div>
      <button onClick={scrollToContact}>Go to Contact Section</button>

      <div style={{ height: '1000px', background: '#f0f0f0' }}>
        <p>Scroll down or click the button...</p>
      </div>

      {/* 3. Attach the ref to this specific section */}
      <section ref={contactSectionRef} style={{ height: '400px', background: '#add8e6' }}>
        <h2>Contact Section</h2>
        <p>You have arrived!</p>
      </section>
    </div>
    </>
  );// <-- Make sure "export default" is right here!
 
}

