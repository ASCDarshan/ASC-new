import { motion } from "framer-motion";
import { Container, Button } from "../../components/common";

const ServiceBanner = ({ handleconsulting, handlePortfolio }) => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      <Container className="relative pt-32 pb-16 text-center lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-dark sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Business
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              With Our Digital Solutions
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We deliver cutting-edge technology solutions that drive growth,
            enhance efficiency, and create lasting competitive advantages.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              variant="primary"
              onClick={handleconsulting}
              className="bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 shadow-xl shadow-primary-200/30"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handlePortfolio}
              className="border-primary-400 text-primary-600 hover:bg-primary-50"
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceBanner;
