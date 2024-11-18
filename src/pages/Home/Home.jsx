import { useEffect, useState } from 'react';
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
import ajaxCall from '../../components/helpers/ajaxCall';

const Home = () => {

  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchData("contact/services/", setServices);
    fetchData("webisite/testimonials/", setTestimonials);
    fetchData("contact/services/", setServices);
    fetchData("contact/services/", setServices);
  }, []);

  const fetchData = async (url, setData) => {
    try {
      const response = await ajaxCall(
        url,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        },
        8000
      );
      if (response?.status === 200) {
        setData(response?.data?.results?.name || []);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

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