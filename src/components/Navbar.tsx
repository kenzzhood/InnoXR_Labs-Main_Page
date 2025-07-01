import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '../assets/Colorful Modern Infinity Technology Free Logo (3).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDemoClick = () => {
    if (location.pathname === '/') {
      scrollToSection('demo');
    } else {
      navigate('/contact');
    }
    setIsOpen(false);
  };

  const productItems = [
    {
      title: "HoloInteract DIY",
      description: "Build your own holographic display in 30 minutes",
      price: "$49",
      path: "/products",
      category: "Education"
    },
    {
      title: "HoloInteract Enterprise",
      description: "Premium holographic system for businesses",
      price: "$499",
      path: "/products",
      category: "Business"
    }
  ];

  const solutionItems = [
    {
      title: "Education",
      description: "Interactive learning with holographic displays",
      path: "/products"
    },
    {
      title: "Business",
      description: "Professional presentations and exhibitions",
      path: "/products"
    },
    {
      title: "Museums",
      description: "Immersive visitor experiences",
      path: "/contact"
    },
    {
      title: "Healthcare",
      description: "Medical training and visualization",
      path: "/contact"
    }
  ];

  const companyItems = [
    {
      title: "About Us",
      description: "Our mission and vision",
      path: "/about"
    },
    {
      title: "Our Impact",
      description: "500+ schools, 10,000+ students",
      path: "/about"
    },
    {
      title: "Contact",
      description: "Get in touch with our team",
      path: "/contact"
    },
    {
      title: "Support",
      description: "Help and documentation",
      path: "/contact"
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: "linear",
        delay: 0.1
      }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg'
          : 'bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-gray-200/10 dark:border-gray-800/10'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15, ease: "linear" }}
          >
            <button 
              onClick={() => handleNavClick('/')}
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-xl p-2"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={logo}
                  alt="InnoXR Labs" 
                  className="w-10 h-10 object-contain filter drop-shadow-sm"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                InnoXR Labs
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg group">
                <span>Products</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'products' ? "rotate-180" : ""
                )} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">HoloInteract Editions</h3>
                      <div className="space-y-4">
                        {productItems.map((item, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleNavClick(item.path)}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.15, ease: "linear" }}
                            className="w-full text-left p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                  </h4>
                                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                                    {item.category}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                              </div>
                              <div className="text-right ml-4">
                                <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.price}</div>
                                <div className="text-xs text-gray-500">Starting</div>
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button 
                          onClick={() => handleNavClick('/products')}
                          className="w-full text-center py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          View All Products →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg group">
                <span>Solutions</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'solutions' ? "rotate-180" : ""
                )} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Industries We Serve</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {solutionItems.map((item, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleNavClick(item.path)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.15, ease: "linear" }}
                            className="p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-left group"
                          >
                            <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg group">
                <span>Company</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'company' ? "rotate-180" : ""
                )} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="space-y-2">
                        {companyItems.map((item, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleNavClick(item.path)}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.15, ease: "linear" }}
                            className="w-full text-left p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                          >
                            <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Request Demo Button */}
          <div className="hidden lg:flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "linear" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg border-0"
                onClick={handleDemoClick}
              >
                Request Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 p-2.5 rounded-xl"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="lg:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-800/20"
            >
              <div className="px-4 py-6 space-y-6">
                {/* Mobile Products */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 px-4">Products</h3>
                  <div className="space-y-2">
                    {productItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(item.path)}
                        className="w-full text-left p-4 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Solutions */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 px-4">Solutions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {solutionItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(item.path)}
                        className="p-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors text-left"
                      >
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Company */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 px-4">Company</h3>
                  <div className="space-y-2">
                    {companyItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(item.path)}
                        className="w-full text-left p-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200/20 dark:border-gray-800/20">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200 hover:shadow-lg border-0"
                    onClick={handleDemoClick}
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;