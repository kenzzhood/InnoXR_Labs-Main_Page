import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CardSpotlight } from '@/components/ui/card-spotlight';
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

            {/* Contact Form with Card Spotlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "linear" }}
              className="lg:col-span-2"
            >
              <CardSpotlight className="h-auto w-full p-8 sm:p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-light relative z-20 text-white mb-4">
                      Send us a Message
                    </h3>
                    <p className="text-neutral-200 relative z-20 text-lg font-light">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-neutral-200">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 rounded-xl py-3 text-base focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-neutral-200">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 rounded-xl py-3 text-base focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-neutral-200">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+91 12345 67890"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 rounded-xl py-3 text-base focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization" className="text-sm font-medium text-neutral-200">Organization</Label>
                        <Input
                          id="organization"
                          placeholder="School, Company, etc."
                          value={formData.organization}
                          onChange={(e) => handleChange('organization', e.target.value)}
                          className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 rounded-xl py-3 text-base focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry_type" className="text-sm font-medium text-neutral-200">Inquiry Type *</Label>
                      <Select onValueChange={(value) => handleChange('inquiry_type', value)}>
                        <SelectTrigger className="bg-neutral-800/50 border-neutral-700 text-white rounded-xl py-3 text-base focus:border-blue-500 focus:ring-blue-500/20">
                          <SelectValue placeholder="Select inquiry type" className="text-neutral-400" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 border-neutral-700">
                          <SelectItem value="diy" className="text-white hover:bg-neutral-700">DIY Edition Inquiry</SelectItem>
                          <SelectItem value="enterprise" className="text-white hover:bg-neutral-700">Enterprise Solution</SelectItem>
                          <SelectItem value="demo" className="text-white hover:bg-neutral-700">Demo Request</SelectItem>
                          <SelectItem value="partnership" className="text-white hover:bg-neutral-700">Partnership</SelectItem>
                          <SelectItem value="support" className="text-white hover:bg-neutral-700">Technical Support</SelectItem>
                          <SelectItem value="media" className="text-white hover:bg-neutral-700">Media Inquiry</SelectItem>
                          <SelectItem value="other" className="text-white hover:bg-neutral-700">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-neutral-200">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief subject of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        required
                        className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 rounded-xl py-3 text-base focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-neutral-200">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your project, requirements, or questions..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 rounded-xl text-base focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>

                  {/* Contact Steps */}
                  <div className="text-neutral-200 mt-8 relative z-20">
                    <p className="text-lg font-medium mb-4">What happens next:</p>
                    <ul className="list-none space-y-3">
                      <ContactStep title="We'll review your message within 24 hours" />
                      <ContactStep title="Our team will reach out with initial thoughts" />
                      <ContactStep title="Schedule a demo or consultation call" />
                      <ContactStep title="Receive a customized solution proposal" />
                    </ul>
                  </div>

                  <p className="text-neutral-300 mt-6 relative z-20 text-sm">
                    Your privacy is important to us. All information shared will be kept confidential 
                    and used only to provide you with the best possible service.
                  </p>
                </div>
              </CardSpotlight>
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

const ContactStep = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-3 items-start">
      <div className="flex-shrink-0 mt-1">
        <Check className="h-4 w-4 text-blue-500" />
      </div>
      <p className="text-white font-light">{title}</p>
    </li>
  );
};

export default Contact;