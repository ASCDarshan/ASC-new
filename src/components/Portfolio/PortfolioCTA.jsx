import { motion } from "framer-motion";
import { Container, Button } from "../../components/common";
import { useNavigate } from "react-router-dom";

const PortfolioCTA = () => {
  const navigate = useNavigate();

  const startClickHandler = () => {
    navigate("/contact");
  };

  const moreWorkclickHandler = () => {
    navigate("/");
  };
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s discuss how we can help bring your vision to life with
            our expertise in custom software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={startClickHandler}
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
            >
              Start a Project
            </Button>
            <Button onClick={moreWorkclickHandler} variant="outline" size="lg">
              View More Work
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioCTA;
