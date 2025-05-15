import { motion } from "framer-motion";
import { CTA } from "../../../components/common";
import CustomBanner from "../../../components/Services/Custom/CustomBanner";
import CustomSolutions from "../../../components/Services/Custom/CustomSolutions";
import IndustryExpertise from "../../../components/Services/Custom/IndustryExpertise";
import CustomTechnologyStack from "../../../components/Services/Custom/CustomTechnologyStack";
import CustomCTA from "../../../components/Services/Custom/CustomCTA";

const CustomDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <CustomBanner />
      <CustomSolutions />
      <IndustryExpertise />
      <CustomTechnologyStack />
      <CustomCTA />

      <CTA />
    </motion.div>
  );
};

export default CustomDevelopment;
