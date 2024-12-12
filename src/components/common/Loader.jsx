const Loader = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
            ${sizes[size]} 
            border-4 
            border-t-transparent 
            border-r-primary/40 
            border-b-primary/10 
            border-l-primary/70 
            rounded-full 
            animate-spin
          `}
      />
    </div>
  );
};

export default Loader;
