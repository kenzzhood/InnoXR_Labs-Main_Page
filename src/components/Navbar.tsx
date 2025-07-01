import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/Colorful Modern Infinity Technology Free Logo (3).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

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
  };

  const handleDemoClick = () => {
    if (location.pathname === '/') {
      scrollToSection('demo');
    } else {
      navigate('/contact');
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: "linear",
        delay: 0.1
      }}
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-800/30 shadow-2xl shadow-black/10 dark:shadow-black/30'
          : 'bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg shadow-black/5'
      }`}
      style={{ 
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      }}
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

          {/* Desktop Navigation and Right Side Actions */}
          <div className="hidden lg:flex items-center justify-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.05,
                  ease: "linear"
                }}
                className="relative"
              >
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-lg group ${
                    location.pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}

                  {/* Enhanced underline animation */}
                  {location.pathname === item.path ? (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: "linear"
                      }}
                    />
                  ) : (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-60"
                      initial={{ scaleX: 0 }}
                      whileHover={{
                        scaleX: 1,
                        transition: {
                          duration: 0.2,
                          ease: "linear"
                        }
                      }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
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
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
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
              transition={{ 
                duration: 0.3, 
                ease: "linear"
              }}
              className="lg:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-800/20"
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: index * 0.05,
                      ease: "linear"
                    }}
                    className="relative"
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:bg-white/10 dark:hover:bg-white/5 ${
                        location.pathname === item.path
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ 
                            duration: 0.3,
                            ease: "linear"
                          }}
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, delay: 0.2, ease: "linear" }}
                  className="pt-3"
                >
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200 hover:shadow-lg border-0"
                    onClick={handleDemoClick}
                  >
                    Request Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;