import { motion } from "framer-motion";
import { CTA } from "../../../components/common";
import ServicesBlog from "../ServicesBlog/ServicesBlog";
import CRMBanner from "../../../components/Services/CRM/CRMBanner";
import CRMFeatures from "../../../components/Services/CRM/CRMFeatures";
import TransformYourBussiness from "../../../components/Services/CRM/TransformYourBussiness";
import ImplementationProcess from "../../../components/Services/CRM/ImplementationProcess";

const CRMService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <CRMBanner />
      <CRMFeatures />
      <TransformYourBussiness />
      <ImplementationProcess />
      <ServicesBlog slug="crm" />
      <CTA />
    </motion.div>
  );
};

export default CRMService;
