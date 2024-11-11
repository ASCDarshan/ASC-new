// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Input, Button, Card } from '../components/common';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: 'default',
    timeline: 'default'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Visit Our Office',
      details: [
        'Anant Soft Computing',
        'Tech Park, Innovation Street',
        'Ahmedabad, Gujarat 380015',
        'India'
      ]
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Call Us',
      details: [
        '+91 98765 43210 (Sales)',
        '+91 98765 43211 (Support)'
      ]
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email Us',
      details: [
        'sales@anantsoft.com',
        'support@anantsoft.com'
      ]
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-white pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Get in Touch
              <span className="block text-primary text-lg font-normal mt-2">
                Let's Discuss Your Project
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Have a project in mind? Want to explore how we can help your business?
              We'd love to hear from you!
            </motion.p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Quick Connect */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Quick Connect
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      variant="primary"
                      className="flex-1"
                      icon={<FaWhatsapp className="mr-2" />}
                    >
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      icon={<FaEnvelope className="mr-2" />}
                    >
                      Email
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                    <Input
                      label="Company Name"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                      >
                        <option value="default">Select Budget Range</option>
                        <option value="small">Less than $5,000</option>
                        <option value="medium">$5,000 - $10,000</option>
                        <option value="large">$10,000 - $25,000</option>
                        <option value="enterprise">$25,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formState.timeline}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                      >
                        <option value="default">Select Timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="1month">Within 1 Month</option>
                        <option value="3months">1-3 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    loading={isSubmitting}
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            // Continuing src/pages/Contact.jsx

            <p className="text-gray-600 mt-4">
              Visit us at our office or reach out through any of our communication channels
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-2 rounded-xl shadow-lg"
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9034454645394!2d72.5008!3d23.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAwLjAiTiA3MsKwMzAnMDMuMCJF!5e0!3m2!1sen!2sin!4v1635835669112!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen=""
              loading="lazy"
            />
          </motion.div>

          {/* Directions Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                From Airport
              </h3>
              <p className="text-gray-600">
                20 minutes drive from Sardar Vallabhbhai Patel International Airport.
                Take the Airport Road and follow directions to Tech Park.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Public Transport
              </h3>
              <p className="text-gray-600">
                Accessible by BRTS and city bus services. Nearest metro station is
                2 km away with regular auto-rickshaw connectivity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Parking
              </h3>
              <p className="text-gray-600">
                Free parking available at Tech Park with 24/7 security.
                Visitor parking located at basement level P1.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
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
              {[
                {
                  q: "What information should I prepare before contacting?",
                  a: "Having a clear project overview, timeline, budget range, and specific requirements will help us understand your needs better."
                },
                {
                  q: "How quickly can you start on my project?",
                  a: "Our typical response time is within 24 hours, and we can usually begin project planning within a week of agreement."
                },
                {
                  q: "Do you provide post-development support?",
                  a: "Yes, we offer comprehensive post-development support and maintenance packages tailored to your needs."
                },
                {
                  q: "Can we have face-to-face meetings?",
                  a: "Absolutely! We welcome both in-person meetings at our office and virtual meetings via your preferred platform."
                }
              ].map((faq, index) => (
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

      {/* Quick Response Promise */}
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
                <div className="text-2xl font-bold text-primary mb-2">24hrs</div>
                <div className="text-gray-600">Initial Response</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-gray-600">Detailed Proposal</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary mb-2">7 Days</div>
                <div className="text-gray-600">Project Kickoff</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </motion.div>
  );
};

export default Contact;