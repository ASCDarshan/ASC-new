import { motion } from "framer-motion";
import { Container, Badge } from "../common";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "25+", label: "Team Members" },
];

const HeroSection = (data, fadeIn) => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      <Container className="relative pt-32 pb-16 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="primary"
              className="mb-6 bg-primary-100 text-primary-600 px-4 py-2"
            >
              About Our Company
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              {data[0]?.aboutus_title}

              <span className="block text-2xl mt-2 font-normal text-gray-600">
                Since 2013
              </span>
            </h1>
            <motion.p {...fadeIn} className="text-lg text-gray-600 mb-8">
              We are a passionate team of innovators, developers, and digital
              craftsmen dedicated to transforming businesses through
              cutting-edge technology solutions. Our decade-long journey has
              been marked by continuous innovation and unwavering commitment to
              excellence.
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 * index, type: "spring" }}
                    className="text-2xl font-bold text-primary-600"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3" />
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {[
                    {
                      label: "Innovation Index",
                      value: 95,
                      color: "bg-primary-500",
                    },
                    {
                      label: "Client Success Rate",
                      value: 98,
                      color: "bg-secondary-500",
                    },
                    {
                      label: "Team Growth",
                      value: 85,
                      color: "bg-accent-500",
                    },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-semibold">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full ${metric.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
