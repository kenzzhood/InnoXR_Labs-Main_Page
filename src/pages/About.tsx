import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CountUp from '@/components/ui/count-up';

const About = () => {
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
              <Users className="w-4 h-4 mr-2" />
              About InnoXR Labs
            </Badge>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-tight">
              Our Mission
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
              Democratizing holographic technology for everyone, from curious students to innovative enterprises
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto">
              The principles that guide everything we do at InnoXR Labs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Innovation First",
                description: "We push the boundaries of what's possible with holographic technology, constantly exploring new ways to blend the physical and digital worlds."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Accessibility",
                description: "Making advanced technology accessible to everyone, from students with limited budgets to enterprises requiring premium solutions."
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Education Focus",
                description: "Empowering the next generation of innovators through hands-on learning experiences with cutting-edge technology."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "linear" }}
                className="text-center group"
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-blue-100/80 to-purple-100/80 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm text-blue-600 dark:text-blue-400 mb-8 group-hover:shadow-lg transition-shadow duration-200"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-light mb-6">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "linear" }}
            >
              <Card className="h-full border-0 shadow-none bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-sm rounded-3xl overflow-hidden">
                <CardHeader className="p-12">
                  <CardTitle className="flex items-center space-x-4 text-3xl font-light">
                    <Target className="w-8 h-8 text-blue-500" />
                    <span>Our Mission</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-12 pb-12 space-y-6">
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                    To democratize holographic technology and make it accessible to educators, students, 
                    and businesses worldwide. We believe that everyone should have the opportunity to 
                    experience and create with cutting-edge immersive technology.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                    Through our DIY and Enterprise solutions, we're breaking down the barriers that 
                    have traditionally kept holographic technology in the realm of science fiction, 
                    making it a practical tool for education and business.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "linear" }}
            >
              <Card className="h-full border-0 shadow-none bg-gradient-to-br from-purple-50/80 to-cyan-50/80 dark:from-purple-900/10 dark:to-cyan-900/10 backdrop-blur-sm rounded-3xl overflow-hidden">
                <CardHeader className="p-12">
                  <CardTitle className="flex items-center space-x-4 text-3xl font-light">
                    <Lightbulb className="w-8 h-8 text-purple-500" />
                    <span>Our Vision</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-12 pb-12 space-y-6">
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                    A world where holographic technology is as common as smartphones, where students 
                    learn through immersive 3D experiences, and where businesses engage customers 
                    through magical holographic presentations.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                    We envision classrooms filled with floating 3D models, museums where history 
                    comes alive through holograms, and boardrooms where ideas are presented in 
                    stunning holographic detail.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto">
              The numbers speak for themselves — we're making a real difference in education and business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { number: 500, label: "Schools Reached", suffix: "+" },
              { number: 10000, label: "Students Engaged", suffix: "+" },
              { number: 50, label: "Enterprise Clients", suffix: "+" },
              { number: 25, label: "Countries", suffix: "+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "linear" }}
                className="text-center group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm group-hover:shadow-lg transition-all duration-200">
                  <div className="text-5xl sm:text-6xl font-extralight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <CountUp to={stat.number} duration={2.5} separator="," />{stat.suffix}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-light text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="space-y-8"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight">
              Join Our Journey
            </h2>
            <p className="text-xl sm:text-2xl font-light max-w-3xl mx-auto leading-relaxed opacity-90">
              Be part of the holographic revolution. Whether you're an educator, student, or business leader, 
              there's a place for you in the InnoXR Labs community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => window.location.href = '/products'}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;