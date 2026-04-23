import React from 'react';
import { motion } from 'framer-motion';

// Original components
import Footer from './Footer';
import Hero from './Hero';
import Sections from './Sections';

const GlebasRurais = ({ whatsappNumber, contactEmail }) => {
  return (
    <main>
      <Hero />
      <Sections />
      {/* New Contato Section */}
      <section id="contato">
        <h2>Contato</h2>
        <p>Get in touch with us!</p>
        <a href={`https://wa.me/${whatsappNumber}`} className="cta">WhatsApp</a>
        <a href={`mailto:${contactEmail}`} className="cta">Email</a>
      </section>
      {/* Original Footer Section */}
      <Footer />
    </main>
  );
};

export default GlebasRurais;

// CSS styling for keyboard focus-visible behavior
const styles = {
  cta: {
    outline: 'none',
    '&:focus-visible': {
      outline: '2px solid blue',
    },
  },
};

// Adjust Hero responsive padding
const paddedHeroStyle = isMobile ? { padding: '0 24px 72px' } : { padding: '0 80px 96px' };