import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Eye, Mic, Wifi, Palette, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const InteractiveFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Eye className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Gesture Control",
      description: "Natural hand movements detected by advanced computer vision algorithms for seamless interaction.",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Mic className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "AI Voice Assistant",
      description: "Powered by LLaMA 3.2 with RAG for intelligent conversations and contextual responses.",
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <Wifi className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Offline Mode",
      description: "Full functionality without internet connection, ensuring privacy and reliability anywhere.",
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Fully Customizable",
      description: "Tailor the interface, content, and interactions to match your specific needs and branding.",
      color: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with minimal latency for real-time holographic interactions.",
      color: "from-yellow-500 to-orange-500",
      delay: 0.4
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Scalable Solution",
      description: "From single-user experiences to multi-user collaborative environments at any scale.",
      color: "from-indigo-500 to-purple-500",
      delay: 0.5
    }
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: feature.delay,
            ease: "linear"
          }}
          onHoverStart={() => setHoveredFeature(index)}
          onHoverEnd={() => setHoveredFeature(null)}
          whileHover={{ 
            y: -8,
            transition: { 
              duration: 0.2, 
              ease: "linear" 
            }
          }}
          className="group cursor-pointer"
        >
          <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-200 rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6 relative">
              {/* Subtle background gradient on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredFeature === index ? 0.05 : 0
                }}
                transition={{ 
                  duration: 0.2,
                  ease: "linear"
                }}
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl sm:rounded-3xl`}
              />
              
              <motion.div
                animate={{ 
                  scale: hoveredFeature === index ? 1.05 : 1
                }}
                transition={{ 
                  duration: 0.2, 
                  ease: "linear"
                }}
                className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} text-white relative z-10 shadow-lg`}
              >
                {feature.icon}
              </motion.div>
              
              <div className="space-y-2 sm:space-y-3 relative z-10">
                <motion.h3 
                  animate={{ 
                    color: hoveredFeature === index ? "#3B82F6" : undefined
                  }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white"
                >
                  {feature.title}
                </motion.h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle border animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredFeature === index ? 1 : 0 }}
                transition={{ 
                  duration: 0.2,
                  ease: "linear"
                }}
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} origin-left rounded-b-2xl sm:rounded-b-3xl`}
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveFeatures;