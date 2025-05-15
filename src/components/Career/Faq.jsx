import { motion } from "framer-motion";
import { Container, Card } from "../../components/common";

const faq = [
  {
    question: "What is your recruitment process?",
    answer:
      "Our recruitment process typically includes initial screening, technical assessment, cultural fit interview, and final discussion. The entire process usually takes 2-3 weeks.",
  },
  {
    question: "Do you offer remote work options?",
    answer:
      "Yes, we offer hybrid and remote work options depending on the role and team requirements. We believe in providing flexibility while maintaining collaborative efficiency.",
  },
  {
    question: "What learning opportunities do you provide?",
    answer:
      "We offer regular training sessions, conference attendance opportunities, online course subscriptions, and dedicated learning time for personal development.",
  },
  {
    question: "How do you support career growth?",
    answer:
      "We have a structured career development program with regular performance reviews, mentorship opportunities, and clear growth paths across technical and management tracks.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>
          <div className="space-y-6">
            {faq.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
