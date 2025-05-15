import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Hero,
  Features,
  Testimonials,
  Contact,
  Services,
} from "../../components/Home";
import { CTA, Stats } from "../../components/common";
import PortfolioSection from "../../components/Portfolio/PortfolioSection";
import MotionScroll from "../../components/common/MotionScroll";

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
      <MotionScroll />
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
