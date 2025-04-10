import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const icons = {
  Home: (active) => (
    <svg
      className={`w-5 h-5 ${active ? "text-primary-600" : "text-gray-600"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  Services: (active) => (
    <svg
      className={`w-5 h-5 ${active ? "text-primary-600" : "text-gray-600"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Portfolio: (active) => (
    <svg
      className={`w-5 h-5 ${active ? "text-primary-600" : "text-gray-600"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  Blog: (active) => (
    <svg
      className={`w-5 h-5 ${active ? "text-primary-600" : "text-gray-600"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      />
    </svg>
  ),
  More: (active) => (
    <svg
      className={`w-5 h-5 ${active ? "text-primary-600" : "text-gray-600"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
};

const MobileBottomNav = () => {
  const location = useLocation();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "More", path: null },
  ];

  const moreItems = [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers", badge: "Hiring" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".more-menu") &&
        !event.target.closest(".more-button")
      ) {
        setShowMoreMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setShowMoreMenu(false);
  }, [location]);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-100">
        <div className="flex justify-between items-center h-16 px-4">
          {mainItems.map((item) => (
            <div key={item.name} className="flex-1">
              {item.path ? (
                <Link
                  to={item.path}
                  className="flex flex-col items-center justify-center h-full"
                >
                  {icons[item.name](isActive(item.path))}
                  <span
                    className={`mt-1 text-xs font-medium ${isActive(item.path) ? "text-primary-600" : "text-gray-600"
                      }`}
                  >
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
                  )}
                </Link>
              ) : (
                <button
                  className="more-button flex flex-col items-center justify-center h-full w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMoreMenu(!showMoreMenu);
                  }}
                >
                  {icons[item.name](showMoreMenu)}
                  <span
                    className={`mt-1 text-xs font-medium ${showMoreMenu ? "text-primary-600" : "text-gray-600"
                      }`}
                  >
                    {item.name}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>

        {showMoreMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="more-menu absolute bottom-16 right-4 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-48"
          >
            <div className="py-2">
              {moreItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="md:hidden h-16"></div>
    </>
  );
};

export default MobileBottomNav;
