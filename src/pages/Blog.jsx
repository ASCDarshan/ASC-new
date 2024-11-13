import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageCircle,
  Eye,
  ArrowUp,
} from "lucide-react";

const categories = [
  { name: "All Posts", slug: "all" },
  { name: "Web Development", slug: "web-development" },
  { name: "Tech Insights", slug: "tech-insights" },
  { name: "Industry News", slug: "industry-news" },
  { name: "Case Studies", slug: "case-studies" },
  { name: "Tutorials", slug: "tutorials" },
];

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Modern Web Development in 2024",
    slug: "essential-web-development-tips-2024",
    excerpt:
      "Discover the latest best practices and tools that are shaping modern web development...",
    category: "web-development",
    author: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/32/32",
      role: "Senior Developer",
    },
    publishedAt: "2024-02-15",
    readTime: "8 min read",
    featured: true,
    thumbnail: "/api/placeholder/600/400",
    tags: ["React", "Performance", "Best Practices"],
    engagement: {
      views: 1520,
      comments: 23,
      shares: 45,
      bookmarks: 67,
    },
  },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Featured Post */}
          {blogPosts.find((post) => post.featured) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-w-16 aspect-h-9 md:aspect-none md:h-full">
                    <img
                      src={blogPosts[0].thumbnail}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                        Featured
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].publishedAt}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={blogPosts[0].author.avatar}
                          alt={blogPosts[0].author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-gray-900">
                            {blogPosts[0].author.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {blogPosts[0].author.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <Share2 className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <Bookmark className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.engagement.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.engagement.comments}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
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
