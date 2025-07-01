import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Colorful Modern Infinity Technology Free Logo (3).png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src={logo}
                  alt="InnoXR Labs" 
                  className="w-8 h-8 object-contain filter drop-shadow-sm"
                />
              </div>
              <span className="text-lg sm:text-xl font-medium text-black dark:text-white">
                InnoXR Labs
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Reimagining Reality with AI-Powered Holograms. Creating the future of immersive technology 
              for education and business worldwide.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "linear" }}
                  className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "linear" }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-sm font-medium text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-600 dark:text-gray-400">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-sm font-medium text-black dark:text-white">Products</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-600 dark:text-gray-400">
              {[
                'HoloInteract DIY',
                'HoloInteract Enterprise',
                'Custom Solutions',
                'Support & Training'
              ].map((product, index) => (
                <li key={index}>
                  <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer font-light">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-sm font-medium text-black dark:text-white">Contact</h3>
            <div className="space-y-3 sm:space-y-4 text-sm text-gray-600 dark:text-gray-400">
              {[
                { icon: Mail, text: 'gtkgoutham@gmail.com', href: 'mailto:gtkgoutham@gmail.com' },
                { icon: Phone, text: '+91 96208 58652', href: 'tel:+919620858652' },
                { icon: MapPin, text: 'Chennai, India', href: null }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="font-light hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="font-light">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "linear" }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500 font-light text-center sm:text-left">
            © 2025 InnoXR Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 sm:space-x-8">
            {['Privacy Policy', 'Terms of Service'].map((link, index) => (
              <span 
                key={index}
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200 font-light"
              >
                {link}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;