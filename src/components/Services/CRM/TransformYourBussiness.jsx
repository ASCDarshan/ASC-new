import { motion } from "framer-motion";
import { Container, Button, Card, Badge } from "../../../components/common";
import {
  FaUsers,
  FaCogs,
  FaChartLine,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const benefits = [
  {
    title: "Increased Efficiency",
    value: "45%",
    description: "Reduction in administrative tasks",
  },
  {
    title: "Better Lead Conversion",
    value: "60%",
    description: "Improvement in lead conversion rates",
  },
  {
    title: "Customer Satisfaction",
    value: "85%",
    description: "Increase in customer satisfaction scores",
  },
  {
    title: "Revenue Growth",
    value: "35%",
    description: "Average increase in revenue",
  },
];

const stats2 = [
  {
    title: "Productivity Increase",
    value: "45%",
    icon: <FaChartLine className="text-green-500 w-5 h-5" />,
    change: "+12%",
    color: "bg-green-50",
  },
  {
    title: "Customer Satisfaction",
    value: "92%",
    icon: <FaUsers className="text-blue-500 w-5 h-5" />,
    change: "+8%",
    color: "bg-blue-50",
  },
  {
    title: "Task Automation",
    value: "75%",
    icon: <FaCogs className="text-purple-500 w-5 h-5" />,
    change: "+15%",
    color: "bg-purple-50",
  },
  {
    title: "Time Saved",
    value: "12hrs",
    icon: <FaClock className="text-orange-500 w-5 h-5" />,
    change: "+4hrs",
    color: "bg-orange-50",
  },
];

const features = [
  "Improved Customer Retention",
  "Enhanced Data Analytics",
  "Streamlined Workflows",
  "Better Team Collaboration",
];

const TransformYourBussiness = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Business with Our CRM
            </h2>
            <p className="text-gray-600 mb-8">
              Experience significant improvements across your business
              operations with our custom CRM solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {benefit.value}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {benefit.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform -rotate-3" />
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-primary-50 p-4 rounded-lg">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-600">
                        ROI Dashboard
                      </h3>
                      <p className="text-sm text-gray-600">
                        Real-time benefits tracking
                      </p>
                    </div>
                    <Badge
                      variant="primary"
                      className="bg-primary-100 text-primary-600"
                    >
                      Live Metrics
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {stats2.map((metric, index) => (
                      <div
                        key={index}
                        className={`${metric.color} rounded-lg p-4 border border-white/50 backdrop-blur-sm`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-medium text-gray-600">
                            {metric.title}
                          </span>
                          {metric.icon}
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            {metric.value}
                          </span>
                          <span className="text-sm text-green-600">
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-gray-700">
                        Growth Trajectory
                      </h4>
                      <div className="flex gap-2">
                        {["1M", "3M", "6M", "1Y"].map((period) => (
                          <button
                            key={period}
                            className={`px-3 py-1 rounded-md text-sm ${
                              period === "3M"
                                ? "bg-primary-100 text-primary-600"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            {period}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-end justify-between">
                        {[40, 55, 45, 65, 75, 65, 80, 85, 75, 90, 85, 95].map(
                          (height, index) => (
                            <div
                              key={index}
                              style={{ height: `${height}%` }}
                              className="w-full bg-primary-100 rounded-t-lg mx-0.5 relative group"
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                {height}%
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                          <FaCheckCircle className="text-primary-600 w-4 h-4" />
                        </div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <div className="flex gap-6">
                      <div>
                        <div className="text-sm text-gray-600">Total Users</div>
                        <div className="text-xl font-bold text-gray-900">
                          2,547
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">
                          Active Projects
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          168
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Full Report
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TransformYourBussiness;
