import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Frown,
} from "lucide-react";
import ajaxCall from "../../helpers/ajaxCall";
import { Container, Button, Loader } from "../../components/common";
import ProfileImg from "../../assets/images/profile.jpg";

const BlogPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

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
        setData(response?.data);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchData("blogs/posts/", setPosts),
        fetchData("blogs/categories/", (data) => {
          setCategories([{ slug: "all", name: "All" }, ...data]);
        }),
      ]);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBlog = (id, slug) => {
    navigate(`/blog/${slug}`, { state: id });
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category?.slug === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 300, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader size="lg" className="mb-4" />
          <p className="text-gray-600">Loading articles...</p>
        </div>
      );
    }

    if (filteredPosts.length === 0) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <Frown className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No articles found
          </h3>
          <p className="text-gray-500 max-w-md">
            {searchQuery
              ? `No articles match your search for "${searchQuery}"`
              : selectedCategory !== "all"
              ? `No articles in the ${
                  categories.find((c) => c.slug === selectedCategory)?.name
                } category`
              : "No articles available at the moment"}
          </p>
          {(searchQuery || selectedCategory !== "all") && (
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear filters
            </Button>
          )}
        </motion.div>
      );
    }

    return (
      <>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.featured_image || "/placeholder-blog.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder-blog.jpg";
                  }}
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
                    onClick={() => handleBlog(post.id, post.slug)}
                    className="hover:text-primary-600 transition-colors text-left w-full"
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
                    <div className="text-xs font-medium text-gray-900">
                      {post?.author?.user?.username || "Anonymous"}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBlog(post.id, post.slug)}
                    className="hover:bg-primary-600 hover:text-white hover:border-primary-600"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === index + 1
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-600 hover:bg-primary-50"
                  } shadow-md transition`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}
      </>
    );
  };

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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
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

          {renderContent()}
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
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default BlogPage;
