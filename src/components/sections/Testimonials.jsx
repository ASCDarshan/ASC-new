import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common';
import { FaQuoteLeft } from 'react-icons/fa';
import profileImg from "../../assets/images/profile.jpg";
import ajaxCall from '../helpers/ajaxCall';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with 0
  const [testimonials, setTestimonials] = useState([]);

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
        setData(response?.data || []);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchData("website/testimonials/", setTestimonials);
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-primary-100 via-white to-secondary-100 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
            <span className="block text-primary text-lg font-normal mt-2">
              What Our Clients Say About Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            their experience working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <div className="w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {testimonials.length > 0 && (
                <motion.div
                  key={currentIndex} // Key based on the current index
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                  <div className="text-primary opacity-80 mb-6">
                    <FaQuoteLeft size={40} />
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={profileImg} // Replace with testimonial-specific image if available
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                    ? 'w-8 bg-primary'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
