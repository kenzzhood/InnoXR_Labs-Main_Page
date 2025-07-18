import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Package, ShoppingCart, Download, Star, Bot, Building, GraduationCap, Search, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HologramViewer from '@/components/HologramViewer';
import CountUp from '@/components/ui/count-up';
import Dither from '@/components/ui/dithered-waves';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState<'diy' | 'enterprise'>('diy');

  return (
    <div className="min-h-screen pt-16 text-black dark:text-white">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="mb-4 px-6 py-3 text-sm bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-600 dark:text-gray-400 border-0 rounded-full">
              <Package className="w-4 h-4 mr-2" />
              HoloInteract Product Line
            </Badge>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-tight">
              HoloInteract
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto">
              AI-Powered Holographic Interaction Systems for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selector */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-20">
            <motion.div 
              className="bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full p-2"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.15, ease: "linear" }}
            >
              <div className="flex">
                <button
                  onClick={() => setActiveProduct('diy')}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                    activeProduct === 'diy'
                      ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  DIY Edition
                </button>
                <button
                  onClick={() => setActiveProduct('enterprise')}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                    activeProduct === 'enterprise'
                      ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Enterprise Edition
                </button>
              </div>
            </motion.div>
          </div>

          {/* Product Display - Fixed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Product Information - Changes based on activeProduct */}
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "linear" }}
              className="space-y-8"
            >
              {activeProduct === 'diy' ? <DIYProductInfo /> : <EnterpriseProductInfo />}
            </motion.div>

            {/* HologramViewer - Always mounted, just changes type */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "linear" }}
              className="relative"
            >
              <HologramViewer type={activeProduct} className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-32 bg-white/30 dark:bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-extralight mb-8 tracking-tight">
              Compare Editions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto">
              Choose the perfect HoloInteract solution for your specific needs and use case
            </p>
          </motion.div>

          <ComparisonTable />
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-extralight mb-8 tracking-tight">
              Advanced Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto">
              Discover the cutting-edge technologies that power HoloInteract's immersive experiences
            </p>
          </motion.div>

          <TechnologyGrid />
        </div>
      </section>

      {/* Other Innovations Section with Dithered Waves Background */}
      <section className="py-32 relative overflow-hidden">
        {/* Dithered Waves Background */}
        <div className="absolute inset-0 z-0">
          <Dither
            waveSpeed={0.02}
            waveFrequency={2}
            waveAmplitude={0.4}
            waveColor={[0.9, 0.9, 0.9]}
            colorNum={8}
            pixelSize={2}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.8}
          />
        </div>
        
        {/* Content overlay with reduced transparency */}
        <div className="relative z-10 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl sm:text-6xl font-extralight mb-8 tracking-tight text-gray-900 dark:text-white">
                Explore Our Other Innovations
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto">
                We're building more than holograms. Check out our other tools powered by AR, VR, and AI.
              </p>
            </motion.div>

            <OtherInnovationsGrid />
          </div>
        </div>
      </section>

      {/* Simple CTA Section - No Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white">
                Ready to Get Started?
              </h2>
              
              <p className="text-xl sm:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-white/95 px-4">
                Transform your presentations and education with HoloInteract's revolutionary technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105 border-0"
                  onClick={() => window.location.href = '/contact'}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Order Now
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-sm px-10 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Demo
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/80">
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="w-4 h-4" />
                  <span>Free Shipping Worldwide</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="w-4 h-4" />
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DIYProductInfo = () => (
  <div className="space-y-8">
    <div>
      <Badge className="mb-8 bg-amber-100/80 dark:bg-amber-900/20 backdrop-blur-sm text-amber-700 dark:text-amber-400 border-0 px-4 py-2 rounded-full text-sm font-medium">
        Perfect for Education
      </Badge>
      <h2 className="text-4xl sm:text-5xl font-extralight mb-8 tracking-tight">
        HoloInteract <span className="font-light">DIY Edition</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-10">
        Build your own holographic display in just <CountUp to={30} duration={1.5} className="font-medium text-amber-600 dark:text-amber-400" /> minutes and explore the fascinating world of 
        3D projections and AI interaction.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-8">
      <div className="text-center">
        <div className="text-4xl font-extralight mb-2">
          $<CountUp to={49} duration={2} className="font-medium" />
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500">Starting Price</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-extralight mb-2">
          <CountUp to={30} duration={1.5} className="font-medium" />min
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500">Assembly Time</div>
      </div>
    </div>

    <div className="space-y-6">
      <h3 className="text-xl font-medium">What's Included:</h3>
      <div className="grid grid-cols-1 gap-4">
        {[
          'Precision-cut cardboard frame',
          'Assembly instructions & QR codes',
          'Educational content library',
          'Gesture control software',
          'Voice AI integration',
          'Mobile app companion'
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "linear" }}
            className="flex items-center space-x-3"
          >
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-gray-600 dark:text-gray-400">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="flex gap-4 pt-6">
      <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105">
        Order DIY Kit
      </Button>
      <Button variant="outline" className="border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105">
        <Download className="w-4 h-4 mr-2" />
        Download Plans
      </Button>
    </div>
  </div>
);

const EnterpriseProductInfo = () => (
  <div className="space-y-8">
    <div>
      <Badge className="mb-8 bg-blue-100/80 dark:bg-blue-900/20 backdrop-blur-sm text-blue-700 dark:text-blue-400 border-0 px-4 py-2 rounded-full text-sm font-medium">
        Professional Grade
      </Badge>
      <h2 className="text-4xl sm:text-5xl font-extralight mb-8 tracking-tight">
        HoloInteract <span className="font-light">Enterprise</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-10">
        A premium holographic system designed for businesses, museums, exhibitions, and professional 
        presentations. Featuring high-quality acrylic construction, advanced AI integration, and 
        enterprise-grade customization capabilities.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-8">
      <div className="text-center">
        <div className="text-4xl font-extralight mb-2">
          $<CountUp to={499} duration={2.5} className="font-medium" />
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500">Starting Price</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-extralight mb-2">
          <CountUp to={4} duration={1} className="font-medium" />K
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500">Display Support</div>
      </div>
    </div>

    <div className="space-y-6">
      <h3 className="text-xl font-medium">Enterprise Features:</h3>
      <div className="grid grid-cols-1 gap-4">
        {[
          'Premium acrylic construction',
          'Advanced LLaMA 3.2 AI',
          'Custom content management',
          'Enterprise security',
          'Multi-user support',
          'Professional installation'
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "linear" }}
            className="flex items-center space-x-3"
          >
            <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-600 dark:text-gray-400">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="flex gap-4 pt-6">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105">
        Request Quote
      </Button>
      <Button variant="outline" className="border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105">
        Schedule Demo
      </Button>
    </div>
  </div>
);

const ComparisonTable = () => {
  const features = [
    { feature: 'Construction', diy: 'Precision Cardboard', enterprise: 'Premium Acrylic Glass' },
    { feature: 'Display', diy: 'Smartphone (5-7")', enterprise: '4K Professional Displays' },
    { feature: 'Assembly', diy: '30 minutes', enterprise: 'Plug & Play Setup' },
    { feature: 'AI Integration', diy: 'Basic Voice Commands', enterprise: 'Advanced LLaMA 3.2 + RAG' },
    { feature: 'Target Audience', diy: 'Students & Educators', enterprise: 'Businesses & Museums' },
    { feature: 'Support', diy: 'Community Forum', enterprise: 'Dedicated Account Manager' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "linear" }}
    >
      <Card className="border-0 shadow-none bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden">
        <CardContent className="p-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left p-6 font-medium text-gray-900 dark:text-gray-100 text-lg">Feature</th>
                  <th className="text-center p-6 font-medium text-amber-600 dark:text-amber-400 text-lg">DIY Edition</th>
                  <th className="text-center p-6 font-medium text-blue-600 dark:text-blue-400 text-lg">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: "linear" }}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="p-6 font-medium text-gray-900 dark:text-gray-100">{item.feature}</td>
                    <td className="p-6 text-center text-gray-600 dark:text-gray-400">{item.diy}</td>
                    <td className="p-6 text-center text-gray-600 dark:text-gray-400">{item.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TechnologyGrid = () => {
  const technologies = [
    {
      title: "Computer Vision",
      description: "Advanced hand tracking and gesture recognition using state-of-the-art algorithms.",
      icon: "👁️"
    },
    {
      title: "LLaMA 3.2 + RAG",
      description: "Cutting-edge language model with retrieval-augmented generation for intelligent conversations.",
      icon: "🧠"
    },
    {
      title: "Pepper's Ghost",
      description: "Classic holographic illusion technique enhanced with modern display technology.",
      icon: "👻"
    },
    {
      title: "Edge Computing",
      description: "Offline-first architecture ensuring privacy and performance without internet dependency.",
      icon: "⚡"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "linear" }}
          className="group"
          whileHover={{ y: -4 }}
        >
          <Card className="h-full border-0 shadow-none bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-200 rounded-3xl">
            <CardContent className="p-8 space-y-6">
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-2xl font-light">{tech.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{tech.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const OtherInnovationsGrid = () => {
  const innovations = [
    {
      title: "Influencer Bot",
      description: "AI-powered Instagram DM assistant for content creators to engage with their followers through smart, context-aware conversations.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100/80 dark:bg-blue-900/20"
    },
    {
      title: "AR & VR Building",
      description: "Immersive 3D visualization service for real estate and architecture using AR on mobile and VR headset walkthroughs.",
      icon: <Building className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100/80 dark:bg-green-900/20"
    },
    {
      title: "VR Education",
      description: "Virtual classrooms, courts, and labs built for education and training using interactive, immersive environments.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-100/80 dark:bg-red-900/20"
    },
    {
      title: "AR Product Finder",
      description: "AI-powered room scanning and decor recommendation tool with AR visualization for shopping and interior design.",
      icon: <Search className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-100/80 dark:bg-yellow-900/20"
    },
    {
      title: "Voice to Video Generator",
      description: "Real-time AI system that turns speech into animated video content for presentations, storytelling, and education.",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-100/80 dark:bg-purple-900/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {innovations.map((innovation, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1, 
            ease: "linear" 
          }}
          whileHover={{ 
            y: -8,
            transition: { 
              duration: 0.2, 
              ease: "linear" 
            }
          }}
          className="group cursor-pointer"
        >
          <Card className="h-full border border-gray-200/50 dark:border-gray-800/50 shadow-sm bg-white/90 dark:bg-gray-900/90 backdrop-blur-md hover:bg-white dark:hover:bg-gray-900 hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden">
            <CardContent className="p-8 space-y-6 relative">
              {/* Subtle background gradient on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className={`absolute inset-0 bg-gradient-to-br ${innovation.color} rounded-3xl`}
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "linear" }}
                className={`inline-flex p-4 rounded-2xl ${innovation.bgColor} backdrop-blur-sm text-gray-700 dark:text-gray-300 relative z-10 shadow-sm`}
              >
                {innovation.icon}
              </motion.div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {innovation.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {innovation.description}
                </p>
              </div>

              {/* Subtle border animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${innovation.color} origin-left rounded-b-3xl`}
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;