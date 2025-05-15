import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Container, Input, Button } from "../common";
import ajaxCall from "../../helpers/ajaxCall";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Visit Us",
    details: [
      "1C, Satyam Apartment",
      "Aradhana Society, Vishwas Colony, Alkapuri",
      "Vadodara, Gujarat 390005",
    ],
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Call Us",
    details: ["+91 9638544455"],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    details: ["support@anantsoftcomputing.com"],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM"],
  },
];

const socialLinks = [
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/anantsoftcomputing/",
    label: "Facebook",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/anantsoftcomputing/",
    label: "Instagram",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    href: "https://www.google.com/maps/place/Anant+Soft+Computing",
    label: "Google Maps",
  },
];

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  service: "",
};

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    fetchData("contact/services/", setServices);
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
        setData(response?.data);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) newErrors.name = "Name is required";

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formState.service) newErrors.service = "Please select a service";

    if (!formState.message.trim()) newErrors.message = "Message is required";

    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^(\+91[-\s]?)?[0]?[6789]\d{9}$/.test(
        formState.phone.replace(/[^0-9+]/g, "")
      )
    ) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number with or without +91";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await ajaxCall("contact/enquiries/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          service: parseInt(formState.service),
          message: formState.message,
        }),
      });

      if ([200, 201].includes(response.status)) {
        toast.success("Message Send Successfully");
        setFormState(INITIAL_FORM_STATE);
        setIsSubmitting(false);
      } else if ([400, 404].includes(response.status)) {
        toast.error("Some Problem Occurred. Please try again.");
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
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
                    <h3 className="font-semibold text-gray-900">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      label="Full Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      label="Phone Number"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      placeholder="98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      label="Company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className={`block w-full rounded-lg border-2 ${
                      errors.service ? "border-red-500" : "border-gray-200"
                    } px-4 py-3 focus:border-primary focus:ring-primary`}
                    required
                  >
                    <option value="">Select a Service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.service}
                    </p>
                  )}
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
                    className={`block w-full rounded-lg border-2 ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } px-4 py-3 focus:border-primary focus:ring-primary`}
                    placeholder="Tell us about your project..."
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
