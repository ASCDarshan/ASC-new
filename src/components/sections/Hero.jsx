import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '../common';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <Container className="relative pt-32 pb-16 text-center lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-dark sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Ideas into
            <span className="block text-primary-600">Digital Excellence</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft innovative software solutions that empower businesses to thrive
            in the digital age. From custom CRM systems to mobile applications,
            we bring your vision to life.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              variant="primary"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 shadow-xl shadow-primary-200/30"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleViewWork}
              className="border-primary-400 text-primary-600 hover:bg-primary-50"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Tech Cards */}
        <div className="mt-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { title: 'SEO', desc: 'Website Rankings' },
              { title: 'CRM / ERP', desc: 'Scalable Solutions' },
              { title: 'App Development', desc: 'Focused UI / UX' }
            ].map((tech) => (
              <motion.div
                key={tech.title}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary-100"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;