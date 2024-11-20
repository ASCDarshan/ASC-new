
import { motion } from 'framer-motion';
import { Container } from '../../components/common';

const Privacypolicy = () => {
    const privacyContent = [
        {
            title: "Information We Collect",
            content: `We collect information that you provide directly to us, including:
        • Personal information (name, email address, phone number)
        • Business information (company name, job title)
        • Payment information (processed through secure third-party providers)
        • Usage data and analytics
        • Device and browser information`
        },
        {
            title: "How We Use Your Information",
            content: `We use the collected information for:
        • Providing and maintaining our services
        • Processing your transactions
        • Sending you important service updates
        • Improving our products and services
        • Analyzing usage patterns and trends
        • Protecting against fraud and abuse`
        },
        {
            title: "Data Security",
            content: `We implement industry-standard security measures to protect your data:
        • Encryption of data in transit and at rest
        • Regular security assessments and audits
        • Access controls and authentication
        • Secure data centers and cloud infrastructure
        • Employee training on data protection`
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50"
        >
            <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
                {/* Animated background elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                    <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
                </div>

                <Container className="relative pt-32 text-center lg:pt-40">
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
                            <span className="block text-primary-600">Privacy Policy</span>
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
                    </motion.div>
                </Container>
            </section>

            <section className="py-20 bg-white ">
                <Container>
                    <div className="gap-12">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-5xl mx-auto"
                        >
                            {privacyContent.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 mb-8"
                                >
                                    <h2 className="text-2xl font-bold text-primary-600 mb-4">{section.title}</h2>
                                    <div className="prose prose-lg prose-gray max-w-none">
                                        <p className="whitespace-pre-line">{section.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.article>
                    </div>

                </Container>
            </section>

        </motion.div >
    );
};

export default Privacypolicy;