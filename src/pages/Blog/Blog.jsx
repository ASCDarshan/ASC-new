import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ajaxCall from "../../helpers/ajaxCall";
import { Container, Button } from "../../components/common";
import ProfileImg from "../../assets/images/profile.jpg";

const BlogPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

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
        setData(response?.data || []);
        setIsLoading(false);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchData("blogs/posts/", setPosts);
    fetchData("blogs/categories/", (data) => {
      setCategories([{ slug: "all", name: "All" }, ...data]);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBlog = (slug, id) => {
    navigate(`/blog/${slug}`, { state: id });
  };

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category?.slug === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
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
              Insights & Innovation
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore the latest in technology, development insights, and
              industry trends
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 relative max-w-2xl mx-auto"
            >
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </motion.div>
          </motion.div>
        </Container>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => {
                    setSelectedCategory(category.slug);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.slug
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                      : "bg-white text-gray-600 hover:bg-primary-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
          {currentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                >
                  <div className="aspect-w-16 aspect-h-9">
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
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
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
                          variant="outline"
                          size="sm"
                          onClick={() => handleBlog(post.id)}
                          className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 text-lg">
              No posts for this category.
            </div>
          )}
          {filteredPosts.length > postsPerPage && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`w-10 h-10 rounded-full ${
                      currentPage === index + 1
                        ? "bg-primary-600 text-white"
                        : "bg-white text-gray-600 hover:bg-primary-50"
                    } shadow-md`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-primary-100 mb-8">
              Get the latest insights and updates delivered directly to your
              inbox
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default BlogPage;
