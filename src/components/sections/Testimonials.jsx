// src/components/sections/Testimonials.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common';
import { FaQuoteLeft } from 'react-icons/fa';
import profileImg from "../../assets/images/profile.jpg"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Pratik Das",
      quote: "It was absolutely amazing to interact with Jeegar at Anant Soft Computing. They are extremely professional in their work ethics and process and upfront about costs and Timelines. Was a great experience. Thank you Anant Soft Computing Team.",
    },
    {
      id: 2,
      name: "Sandip Patel",
      quote: "I have given my LMS work to Anant soft Computing . Anant Soft Computing team had given nice support to us . The founder & CEO , Mr. Jigar Desai is personally involved in every project and also giving nice suggestion in each and every architect of system.",
    },
    {
      id: 3,
      name: "Jimish Sura",
      quote: "Anant Soft assisted with analysis of requirements, technology feasibility, design and development of various IT projects implemented in Conart. And deliver multiple projects successfully on time.",
    },
    {
      id: 3,
      name: "Milind Dave",
      quote: "Best web development company in Vadodara and the colleagues are open to sharing knowledge and real-time solutions with each other.",
    },
    {
      id: 3,
      name: "Pujan Shah",
      quote: "I have engaged Anant soft Computing for revamping our existing website and to design a unique dashboard for our clients use. Also, I have felt overall service and communication to satisfactory level especially when I am dealing from Australia.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            Don't just take our word for it. Here's what our clients have to say about
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
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="text-primary opacity-80 mb-6">
                  <FaQuoteLeft size={40} />
                </div>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={profileImg}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-primary text-sm">
                        {testimonials[currentIndex].organization}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
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