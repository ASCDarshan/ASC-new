import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import BlogPage from "./pages/Blog/Blog";
import About from "./pages/AboutUs/About";
import Careers from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import { ScrollToTop } from "./components/common";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Navbar, Footer } from "./components/layout";
import BlogPostPage from "./pages/Blog/BlogPostPage";
import Privacypolicy from "./pages/Privacy/Privacypolicy";
import SEOService from "./pages/Services/SEOService/SEOService";
import CRMService from "./pages/Services/CRMService/CRMService";
import MobileAppService from "./pages/Services/MobileAppService/MobileAppService";
import CustomDevelopment from "./pages/Services/CustomDevelopment/CustomDevelopment";

function App() {
  return (
    <Router>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/crm" element={<CRMService />} />
            <Route path="/services/mobile" element={<MobileAppService />} />
            <Route path="/services/custom" element={<CustomDevelopment />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<BlogPostPage />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
