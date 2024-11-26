import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  Features,
  Testimonials,
  Stats,
  CTA,
  Contact,
  Services
} from '../../components/sections';
import PortfolioSection from '../Portfolio/PortfolioSection';

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
      <PortfolioSection />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
    </motion.div>
  );
};

export default Home;