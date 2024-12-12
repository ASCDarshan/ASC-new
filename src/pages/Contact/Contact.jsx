import { motion } from "framer-motion";
import { Container } from "../../components/common";
import Contacts from "../../components/sections/Contact";

const faqs = [
  {
    q: "What information should I prepare before contacting?",
    a: "Having a clear project overview, timeline, budget range, and specific requirements will help us understand your needs better.",
  },
  {
    q: "How quickly can you start on my project?",
    a: "Our typical response time is within 24 hours, and we can usually begin project planning within a week of agreement.",
  },
  {
    q: "Do you provide post-development support?",
    a: "Yes, we offer comprehensive post-development support and maintenance packages tailored to your needs.",
  },
  {
    q: "Can we have face-to-face meetings?",
    a: "Absolutely! We welcome both in-person meetings at our office and virtual meetings via your preferred platform.",
  },
];

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <Contacts />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169202432397!2d73.16878167596472!3d22.309439742562773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5873e594259%3A0xda3dc91c20f4beec!2sAnant%20Soft%20Computing!5e0!3m2!1sen!2sin!4v1731308281495!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </motion.div>
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 text-center mb-12"
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Response Promise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the value of your time. Our team is committed to
                providing quick and meaningful responses to all inquiries.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    24hrs
                  </div>
                  <div className="text-gray-600">Initial Response</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    48hrs
                  </div>
                  <div className="text-gray-600">Detailed Proposal</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    7 Days
                  </div>
                  <div className="text-gray-600">Project Kickoff</div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </Container>
    </section>
  );
};

export default Contact;
