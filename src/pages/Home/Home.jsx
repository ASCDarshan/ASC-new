import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  Services,
  Features,
  Portfolio,
  Testimonials,
  Stats,
  CTA,
  Contact
} from '../../components/sections';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
    </motion.div>
  );
};

export default Home;