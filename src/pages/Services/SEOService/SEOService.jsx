import { motion } from "framer-motion";
import { CTA } from "../../../components/common";
import ServicesBlog from "../ServicesBlog/ServicesBlog";
import SEOBanner from "../../../components/Services/SEO/SEOBanner";
import SEOSolutions from "../../../components/Services/SEO/SEOSolutions";
import SEOProcess from "../../../components/Services/SEO/SEOProcess";
import SEOResult from "../../../components/Services/SEO/SEOResult";

const SEOService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <SEOBanner />
      <SEOSolutions />
      <SEOProcess />
      <SEOResult />
      <ServicesBlog slug="seo" />
      <CTA />
    </motion.div>
  );
};

export default SEOService;
