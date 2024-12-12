import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProfileImg from "../../../assets/images/profile.jpg";
import ajaxCall from "../../../helpers/ajaxCall";
import { Badge, Button, Container, Loader } from "../../../components/common";

const ServicesBlog = ({ slug }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url, setData) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData("blogs/posts/", setPosts);
  }, []);

  const handleBlog = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const currentPosts = posts.filter((post) => post.category.slug === slug);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div className="text-center ">
          <Badge
            variant="primary"
            className="mb-4 bg-primary-100 text-primary-600 px-4 py-2"
          >
            Our Blogs
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Insights & Innovation Tech Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the latest in technology, development insights, and industry
            trends
          </p>
        </motion.div>
      </Container>
      <section className="py-16 m-4 p-4">
        {isLoading ? (
          <Loader size="lg" className="mx-auto" />
        ) : (
          <div className="container mx-auto px-4 ">
            {currentPosts.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {currentPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full"
                    >
                      <div className="h-[200px] w-full relative">
                        <img
                          src={post.featured_image}
                          alt="img"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          {post.category?.name && (
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs">
                              {post.category.name}
                            </span>
                          )}
                          <span className="text-gray-500 text-xs flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }).format(new Date(post.published_at))}
                          </span>
                        </div>
                        <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                          <button
                            onClick={() => handleBlog(post.id)}
                            className="hover:text-primary-600 transition-colors"
                          >
                            {post.title}
                          </button>
                        </h2>
                        <p className="text-gray-600 text-sm mb-4">
                          {post.excerpt.split(" ").slice(0, 7).join(" ") +
                            (post.excerpt.split(" ").length > 7 ? "..." : "")}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={ProfileImg}
                              alt={post?.author?.user?.username || "Author"}
                              className="w-6 h-6 rounded-full"
                            />
                            <div>
                              <div className="text-xs font-medium text-gray-900">
                                {post?.author?.user?.username || "Anonymous"}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              onClick={() => handleBlog(post.id)}
                              className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm hover:bg-primary-700 transition-all"
                              size="small"
                            >
                              Read More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="text-center text-gray-600 text-lg">
                No posts for this category.
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
};

export default ServicesBlog;
