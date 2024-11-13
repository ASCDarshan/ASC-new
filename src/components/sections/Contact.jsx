// src/components/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Input, Button } from '../common';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaGoogle
} from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Visit Us',
    details: [
      '1C, Satyam Apartment',
      'Aradhana Society,Vishwas Colony,Alkapuri',
      'Vadodara, Gujarat 390005'
    ]
  },
  {
    icon: <FaPhone />,
    title: 'Call Us',
    details: [
      '+91 9638544455',
    ]
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Us',
    details: [
      'info@anantsoftcomputing.com',
    ]
  },
  {
    icon: <FaClock />,
    title: 'Working Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
    ]
  }
];

const socialLinks = [
  { icon: <FaFacebook />, href: 'https://www.facebook.com/anantsoftcomputing/', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/anantsoftcomputing/', label: 'Instagram' },
  { icon: <FaGoogle />, href: 'https://www.google.com/maps/place/Anant+Soft+Computing/@22.3094348,73.1713566,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc5873e594259:0xda3dc91c20f4beec!8m2!3d22.3094348!4d73.1713566!16s%2Fg%2F11bw1ylpm3?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D', label: 'Google' },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'default'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
            <span className="block text-primary text-lg font-normal mt-2">
              We&apos;d Love to Hear from You
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Looking to partner or work with us?
            We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
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
                    label="Company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                  >
                    <option value="default">Select a Service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="crm">CRM Development</option>
                    <option value="erp">ERP Solutions</option>
                    <option value="host">Hosting</option>
                    <option value="seo">SEO</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                    placeholder="Tell us about your project..."
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
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
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
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen=""
              loading="lazy"
            />

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;