import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Bookmark,
  ArrowUp,
  Share2,
} from "lucide-react";
import ajaxCall from "../../components/helpers/ajaxCall";
import ProfileImg from "../../assets/images/profile.jpg"
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "All Posts", slug: "all" },
  { name: "Web Development", slug: "web-development" },
  { name: "Tech Insights", slug: "tech-insights" },
  { name: "Industry News", slug: "industry-news" },
  { name: "Case Studies", slug: "case-studies" },
  { name: "Tutorials", slug: "tutorials" },
];

const BlogPage = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [categoriess, setCategories] = useState([]);
  console.log(categoriess);

  const [posts, setPosts] = useState([]);

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
        setData(response?.data || []);
      } else {
        console.error("Fetch error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchData("blogs/posts/", setPosts);
    fetchData("blogs/categories/", setCategories);
  }, []);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBlog = (postId) => {
    navigate(`/blog/${postId}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-primary-50/50 via-white to-secondary-50/50"
    >
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-secondary-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Insights & Innovation
              <span className="block text-primary-600">Tech Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              Explore the latest in technology, development insights, and
              industry trends
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
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
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category.slug
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                    : "bg-white text-gray-600 hover:bg-primary-50"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Featured Post */}
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Thumbnail Section */}
                  <div className="aspect-w-16 aspect-h-9 md:aspect-none md:h-full">
                    <img
                      src={post.featured_image}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Category Tag */}
                      {post.category?.name && (
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                          {post.category.name}
                        </span>
                      )}
                      {/* Published Date */}
                      <span className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(post.published_at))}
                      </span>
                    </div>
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      <button onClick={() => handleBlog(post.id)}>
                        {post.title}
                      </button>
                    </h2>
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    {/* Author and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={ProfileImg}
                          alt={post?.author?.user?.username || "Author"}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-gray-900">
                            {post?.author?.user?.username || "Anonymous"}
                          </div>
                          <div className="text-sm text-gray-500">
                            {post.author?.role || "Contributor"}
                          </div>
                        </div>
                      </div>
                      {/* Share and Bookmark Actions */}
                      <div className="flex items-center gap-4">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          aria-label="Share Post"
                        >
                          <Share2 className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          aria-label="Bookmark Post"
                        >
                          <Bookmark className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}




        </div>
      </section>

      {/* Newsletter Section */}
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

      {/* Scroll to Top Button */}
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
    </motion.div>
  );
};

export default BlogPage;
