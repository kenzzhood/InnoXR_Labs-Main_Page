import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Meteors } from '@/components/ui/meteors';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiry_type: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      inquiry_type: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-tight">
              Contact Us
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
              Let's bring your holographic vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-extralight mb-8 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                  Whether you're an educator interested in our DIY kits, a business exploring enterprise solutions, 
                  or just curious about holographic technology, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-8">
                <ContactInfoCard
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  content="gtkgoutham@gmail.com"
                  description="Best for detailed inquiries"
                />

                <ContactInfoCard
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  content="+91 96208 58652"
                  description="Available Mon-Fri, 9AM-6PM IST"
                />

                <ContactInfoCard
                  icon={<MapPin className="h-6 w-6" />}
                  title="Location"
                  content="Chennai, India"
                  description="Serving customers worldwide"
                />

                <ContactInfoCard
                  icon={<Clock className="h-6 w-6" />}
                  title="Response Time"
                  content="Within 24 hours"
                  description="Usually much faster!"
                />
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-gray-300 dark:border-gray-700 rounded-full py-4 transition-all duration-200 hover:scale-105" asChild>
                    <a href="tel:+919620858652">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-300 dark:border-gray-700 rounded-full py-4 transition-all duration-200 hover:scale-105" asChild>
                    <a href="mailto:gtkgoutham@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-300 dark:border-gray-700 rounded-full py-4 transition-all duration-200 hover:scale-105">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Demo Call
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form with Meteors Effect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "linear" }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Background gradient blur effect */}
                <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-3xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 dark:from-gray-900/50 dark:to-black/50 blur-3xl" />
                
                <Card className="relative border border-gray-300/30 dark:border-gray-700/30 shadow-2xl bg-gray-900/95 dark:bg-black/95 backdrop-blur-md rounded-3xl overflow-hidden">
                  <CardHeader className="p-12 relative">
                    <CardTitle className="text-3xl font-light text-white">Send us a Message</CardTitle>
                    <p className="text-gray-300 font-light text-lg">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent className="px-12 pb-12 relative">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-200">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            required
                            className="border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg backdrop-blur-sm focus:border-blue-500"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-200">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            required
                            className="border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg backdrop-blur-sm focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-200">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+91 12345 67890"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg backdrop-blur-sm focus:border-blue-500"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="organization" className="text-sm font-medium text-gray-200">Organization</Label>
                          <Input
                            id="organization"
                            placeholder="School, Company, etc."
                            value={formData.organization}
                            onChange={(e) => handleChange('organization', e.target.value)}
                            className="border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg backdrop-blur-sm focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="inquiry_type" className="text-sm font-medium text-gray-200">Inquiry Type *</Label>
                        <Select onValueChange={(value) => handleChange('inquiry_type', value)}>
                          <SelectTrigger className="border-gray-600 bg-gray-800/50 text-white rounded-xl py-4 text-lg backdrop-blur-sm focus:border-blue-500">
                            <SelectValue placeholder="Select inquiry type" className="text-gray-400" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            <SelectItem value="diy" className="text-white hover:bg-gray-700">DIY Edition Inquiry</SelectItem>
                            <SelectItem value="enterprise" className="text-white hover:bg-gray-700">Enterprise Solution</SelectItem>
                            <SelectItem value="demo" className="text-white hover:bg-gray-700">Demo Request</SelectItem>
                            <SelectItem value="partnership" className="text-white hover:bg-gray-700">Partnership</SelectItem>
                            <SelectItem value="support" className="text-white hover:bg-gray-700">Technical Support</SelectItem>
                            <SelectItem value="media" className="text-white hover:bg-gray-700">Media Inquiry</SelectItem>
                            <SelectItem value="other" className="text-white hover:bg-gray-700">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-200">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="Brief subject of your inquiry"
                          value={formData.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          required
                          className="border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg backdrop-blur-sm focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-200">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your project, requirements, or questions..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          required
                          className="border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-xl text-lg backdrop-blur-sm focus:border-blue-500"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105 relative z-10"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                  
                  {/* Meteors Effect */}
                  <Meteors number={12} />
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto">
              Quick answers to common questions about HoloInteract and InnoXR Labs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does shipping take?",
                answer: "DIY kits ship within 2-3 business days in India, 7-10 days internationally. Enterprise solutions have custom delivery timelines."
              },
              {
                question: "Do you offer educational discounts?",
                answer: "Yes! We offer significant discounts for schools, universities, and educational institutions. Contact us for special pricing."
              },
              {
                question: "Can I try before I buy?",
                answer: "Absolutely! We offer demo sessions for both DIY and Enterprise editions. Schedule a call to see HoloInteract in action."
              },
              {
                question: "What's included in technical support?",
                answer: "DIY editions include community support and documentation. Enterprise customers get dedicated technical support and training."
              },
              {
                question: "Can HoloInteract work offline?",
                answer: "Yes! Both editions work completely offline, ensuring privacy and reliability without internet dependency."
              },
              {
                question: "Do you offer customization services?",
                answer: "Enterprise customers can request custom holographic content, branding, and specialized features for their use cases."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "linear" }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full border-0 shadow-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-8">
                    <h3 className="font-medium mb-4 text-lg">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, content, description }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.15, ease: "linear" }}
  >
    <Card className="border-0 shadow-none bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100/80 to-purple-100/80 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm text-blue-600 dark:text-blue-400 flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm mb-1">{title}</h3>
            <p className="font-medium mb-1">{content}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default Contact;