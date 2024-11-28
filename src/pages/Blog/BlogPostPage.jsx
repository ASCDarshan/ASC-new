import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Calendar,
    Clock,
    Share2,
    Bookmark,
    Heart,
    Twitter,
    Linkedin,
    Facebook,
    Copy,
    Tag,
    ArrowUp,
    Check,
    ArrowLeft
} from 'lucide-react';
import ProfileImg from "../../assets/images/profile.jpg"
import { useLocation } from 'react-router-dom';
import ajaxCall from '../../components/helpers/ajaxCall';

const BlogPostPage = () => {
    const location = useLocation();
    const blogpostpage = location.state;
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [showShareTooltip, setShowShareTooltip] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [filteredPost, setFilteredPost] = useState(null);


    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxScroll) * 100;

            setScrollProgress(progress);
            setShowScrollTop(scrolled > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fetchData = async (url) => {
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
                filterPostsByBlogPageId(response?.data);
            } else {
                console.error("Fetch error:", response);
            }
        } catch (error) {
            console.error("Network error:", error);
        }

    };

    useEffect(() => {
        fetchData("blogs/posts/");
    }, []);

    const filterPostsByBlogPageId = (posts) => {
        const filtered = posts.find((post) => post.id === parseInt(blogpostpage));
        setFilteredPost(filtered);
    };

    const handleShare = (platform) => {
        const shareUrl = window.location.href;
        const shareText = `Check out this article: ${filteredPost?.title}`;

        switch (platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`);
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`);
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
                break;
            case 'copy':
                navigator.clipboard.writeText(shareUrl);
                setShowShareTooltip(true);
                setTimeout(() => setShowShareTooltip(false), 2000);
                break;
            default:
                break;
        }
    };

    if (!filteredPost) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50"
        >
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-primary-100 z-50">
                <motion.div
                    className="h-full bg-primary-400"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Header */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-primary-200/20 via-transparent to-transparent mt-3" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4 pt-10 pb-16 mt-5">
                    {/* Back to Articles Button - Added to the header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-8 left-4 z-10"
                    >
                        <button
                            onClick={() => window.history.back()}
                            className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mt-6 pt-6 ml-6"
                        >
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                            <span className="font-medium">Back to Articles</span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex flex-wrap gap-3 mb-6 mt-10">
                            {filteredPost.tags.map(tag => (
                                <span
                                    key={tag.id}
                                    className="px-4 py-1.5 bg-primary-100/80 text-primary-600 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary-200/80 transition-colors cursor-pointer"
                                >
                                    <Tag className="w-4 h-4" />
                                    {tag.name}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 leading-tight">
                            {filteredPost.title}
                        </h1>

                        <p className="text-xl text-dark-light mb-8">
                            {filteredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-8 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={ProfileImg}
                                        alt={filteredPost.author.user.username}
                                        className="w-12 h-12 rounded-full ring-2 ring-white"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-200 rounded-full flex items-center justify-center ring-2 ring-white">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-semibold text-dark">
                                        {filteredPost.author.user.username}
                                    </div>
                                    <div className="text-sm text-dark-light">
                                        {filteredPost.author.role}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-dark-light">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(filteredPost.published_at).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {filteredPost.read_time} min read
                                </span>
                            </div>
                        </div>

                        {/* Engagement Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden lg:block"
                        >
                            <div className="sticky top-24 flex flex-row justify-end gap-4 mb-2">
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`group p-3 rounded-xl transition-all duration-300 ${isLiked
                                        ? 'bg-accent-200 text-accent-700'
                                        : 'bg-white hover:bg-accent-50 text-dark-light hover:text-accent-600'
                                        } shadow-sm hover:shadow-md`}
                                >
                                    <Heart
                                        className={`w-6 h-4 mx-auto transition-transform duration-300 ${isLiked ? 'scale-110' : 'group-hover:scale-110'
                                            }`}
                                        fill={isLiked ? "currentColor" : "none"}
                                    />
                                </button>

                                <button
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`group p-3 rounded-xl transition-all duration-300 ${isBookmarked
                                        ? 'bg-primary-200 text-primary-700'
                                        : 'bg-white hover:bg-primary-50 text-dark-light hover:text-primary-600'
                                        } shadow-sm hover:shadow-md`}
                                >
                                    <Bookmark
                                        className={`w-6 h-4 mx-auto transition-transform duration-300 ${isBookmarked ? 'scale-110' : 'group-hover:scale-110'
                                            }`}
                                        fill={isBookmarked ? "currentColor" : "none"}
                                    />
                                </button>

                                <div className="relative">
                                    <button
                                        onClick={() => setShowShareTooltip(!showShareTooltip)}
                                        className="group p-3 rounded-xl bg-white hover:bg-secondary-50 text-dark-light hover:text-secondary-600 transition-all duration-300 shadow-sm hover:shadow-md w-full"
                                    >
                                        <Share2 className="w-6 h-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                                    </button>

                                    {showShareTooltip && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="absolute left-full ml-4 top-0 bg-white rounded-xl shadow-lg border border-gray-100 p-2"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {[
                                                    { icon: Twitter, label: 'Twitter', platform: 'twitter', color: 'hover:bg-blue-50 hover:text-blue-500' },
                                                    { icon: Linkedin, label: 'LinkedIn', platform: 'linkedin', color: 'hover:bg-blue-50 hover:text-blue-700' },
                                                    { icon: Facebook, label: 'Facebook', platform: 'facebook', color: 'hover:bg-blue-50 hover:text-blue-600' },
                                                    { icon: Copy, label: 'Copy Link', platform: 'copy', color: 'hover:bg-gray-50 hover:text-gray-700' }
                                                ].map(({ icon: Icon, label, platform, color }) => (
                                                    <button
                                                        key={platform}
                                                        onClick={() => handleShare(platform)}
                                                        className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${color}`}
                                                    >
                                                        <Icon className="w-5 h-5" />
                                                        <span className="text-sm font-medium">{label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src={filteredPost.featured_image}
                            alt="img"
                            className="w-full aspect-[15/7] object-cover rounded-2xl shadow-xl"
                        />
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative">
                <div className="container mx-auto px-4 mt-5 pt-3">
                    <div className="flex gap-12">
                        {/* Article Content */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-6xl mx-auto"
                        >
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 mb-12">
                                <div
                                    className="prose prose-lg prose-gray max-w-none"
                                    dangerouslySetInnerHTML={{ __html: filteredPost.content }}
                                ></div>
                            </div>

                        </motion.article>
                    </div>
                </div>
            </main>
            {/* Newsletter Section */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600" />
                <div className="absolute inset-0 bg-gradient-radial from-secondary-200/20 via-transparent to-transparent" />

                <div className="relative container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Join Our Newsletter Community
                        </h2>
                        <p className="text-primary-100 mb-8">
                            Get exclusive tech insights and updates delivered straight to your inbox
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            />
                            <button className="px-8 py-3 bg-white text-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-primary-100/80 text-sm mt-4">
                            Join 5,000+ developers who already subscribed
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-300 z-50"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div >
    );
};

export default BlogPostPage;
