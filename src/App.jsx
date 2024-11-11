// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import SEOService from './pages/services/SEOService';
import CRMService from './pages/services/CRMService';
import MobileAppService from './pages/services/MobileAppService';
import CustomDevelopment from './pages/services/CustomDevelopment';
import Careers from './pages/Career';
import BlogPage from './pages/Blog';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
