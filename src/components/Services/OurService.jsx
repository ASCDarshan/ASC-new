import { motion } from "framer-motion";
import { Container, Card, Button, Loader } from "../../components/common";

const OurService = ({
  isLoading,
  servicess,
  setSelectedService,
  servicesIcons,
  transformServiceData,
}) => {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-gray-600">
            From concept to execution, we provide end-to-end solutions tailored
            to your specific needs and industry requirements.
          </p>
        </div>
        {isLoading ? (
          <Loader size="lg" className="mx-auto" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicess.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="h-full cursor-pointer hover:-translate-y-2 transition-all duration-300
                     hover:shadow-xl hover:shadow-primary-100/50"
                  onClick={() =>
                    setSelectedService(transformServiceData(service))
                  }
                >
                  <div className="p-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6
                          bg-gradient-to-br ${
                            servicesIcons[index]?.gradient ||
                            "from-gray-400 to-gray-600"
                          } 
                          shadow-lg shadow-primary-200/20`}
                    >
                      {servicesIcons[index]?.icon || (
                        <span className="text-sm"></span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(transformServiceData(service));
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default OurService;
