import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  variant = "default",
  ...props
}) => {
  const variants = {
    default: "bg-white",
    gradient: "bg-gradient-to-br from-white to-gray-50",
    transparent: "bg-white/60 backdrop-blur-md",
  };

  const hoverEffects = hover
    ? "hover:shadow-xl hover:shadow-gray-200/50 transform hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        rounded-2xl shadow-lg shadow-gray-200/40
        border border-gray-100
        ${variants[variant]}
        ${hoverEffects}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
