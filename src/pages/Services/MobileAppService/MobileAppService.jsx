import { motion } from "framer-motion";
import { Testimonials } from "../../../components/Home";
import ServicesBlog from "../ServicesBlog/ServicesBlog";
import MobileBanner from "../../../components/Services/Mobile/MobileBanner";
import DevelopmentCapabilities from "../../../components/Services/Mobile/DevelopmentCapabilities";
import DevelopmentProcess from "../../../components/Services/Mobile/DevelopmentProcess";
import TechnologyStack from "../../../components/Services/Mobile/TechnologyStack";
import DevelopmentTimeline from "../../../components/Services/Mobile/DevelopmentTimeline";
import MobileCTA from "../../../components/Services/Mobile/MobileCTA";

const MobileAppService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <MobileBanner />
      <DevelopmentCapabilities />
      <DevelopmentProcess />
      <TechnologyStack />
      <DevelopmentTimeline />
      <Testimonials />
      <ServicesBlog slug="mobile-apps" />
      <MobileCTA />
    </motion.div>
  );
};

export default MobileAppService;
