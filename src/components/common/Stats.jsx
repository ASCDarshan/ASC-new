import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Loader } from ".";
import ajaxCall from "../../helpers/ajaxCall";

const Stats = () => {
  const [impacts, setImpacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url, setData) => {
    setIsLoading(true);
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
        setData(response?.data);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData("master/impacts/", setImpacts);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-white to-secondary/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
            <span className="block text-primary text-lg font-normal mt-2">
              Measuring Our Success Through Results
            </span>
          </h2>
        </motion.div>
        {isLoading ? (
          <Loader size="lg" className="mx-auto" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-all duration-300" />
                <div className="relative p-8 text-center">
                  <div className="mb-4">
                    <b>{impact.metrics} +</b>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600">{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Industry Recognition
            </h3>
            <p className="text-gray-600">
              Awarded for excellence in software development and innovation
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Serving clients across multiple countries and industries
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Technical Excellence
            </h3>
            <p className="text-gray-600">
              Consistently delivering high-quality solutions on time
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Stats;
