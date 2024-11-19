import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "../common";

import { useEffect, useState } from "react";
import ajaxCall from "../helpers/ajaxCall";

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const handleExploreAll = () => {
    navigate("/services");
  };

  const [servicess, setServices] = useState([]);

  useEffect(() => {
    fetchData("services/services/", setServices);
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
        setData(response?.data?.results || []);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };


  return (
    <section className="py-20 relative bg-gradient-to-b from-secondary-50 via-white to-primary-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 text-lg font-normal mt-2">
              Comprehensive Solutions for Your Digital Needs
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver end-to-end digital solutions that help businesses
            transform, innovate, and stay ahead in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicess.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-8 h-full bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300
                          border border-gray-100 hover:border-primary-200
                          hover:shadow-xl hover:shadow-primary-200/20"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6
  bg-gradient-to-br ${service.gradient || "from-gray-400 to-gray-600"
                    } shadow-lg shadow-primary-200/20`}
                >
                  {service.icon ? (
                    <service.icon className="w-8 h-8" />
                  ) : (
                    <span className="text-sm"></span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleServiceClick(service.path)}
                  className="w-full justify-center hover:bg-gradient-to-r hover:from-primary-400 hover:to-primary-600 hover:text-white
                            transition-all duration-300"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleExploreAll}
            className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800
                      shadow-xl shadow-primary-200/30 px-12"
          >
            Explore All Services
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-50" />
      </Container>
    </section>
  );
};

export default Services;
