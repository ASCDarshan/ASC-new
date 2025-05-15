import { motion } from "framer-motion";
import { Container, Card } from "../../../components/common";
import growthImg from "../../../assets/images/SEO.jpeg";
const stats3 = [
  { metric: "Organic Traffic", increase: "+150%" },
  { metric: "Keyword Rankings", increase: "+200%" },
  { metric: "Conversion Rate", increase: "+85%" },
];
const SEOResult = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Real Results for Real Businesses
            </h2>
            <p className="text-gray-600">
              Our SEO strategies have helped businesses achieve significant
              improvements in their online visibility and organic traffic.
            </p>
            <div className="space-y-4">
              {stats3.map((stat) => (
                <div key={stat.metric} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    <span className="text-xl font-bold">{stat.increase}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{stat.metric}</div>
                    <div className="text-sm text-gray-600">
                      Average Improvement
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={growthImg} alt="growth" />
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SEOResult;
