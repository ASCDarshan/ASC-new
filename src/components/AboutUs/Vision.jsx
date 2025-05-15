import { motion } from "framer-motion";
import { Container, Card } from "../../components/common";
import { FaLightbulb, FaBullseye } from "react-icons/fa";
const Vision = ({ data, fadeIn }) => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...fadeIn} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
            <Card className="p-8 backdrop-blur-sm relative hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                  <FaLightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{data[0]?.Vision}</p>
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </Card>
          </motion.div>
          <motion.div {...fadeIn} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-secondary-600/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
            <Card className="p-8 backdrop-blur-sm relative hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mr-4">
                  <FaBullseye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {data[0]?.Mission}
              </p>
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Vision;
