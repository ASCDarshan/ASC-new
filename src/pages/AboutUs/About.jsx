import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ajaxCall from "../../helpers/ajaxCall";
import { CTA } from "../../components/common";
import { Stats } from "../../components/common";
import HeroSection from "../../components/AboutUs/HeroSection";
import Vision from "../../components/AboutUs/Vision";
import Values from "../../components/AboutUs/Values";
import Team from "../../components/AboutUs/Team";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("website/about/", setData);
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
        setData(response?.data);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection data={data} fadeIn={fadeIn} />
      <Vision data={data} fadeIn={fadeIn} />
      <Values fadeIn={fadeIn} />
      <Team fadeIn={fadeIn} />
      <Stats />
      <CTA />
    </motion.div>
  );
};

export default AboutPage;
