import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Zap, Palette, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: 'Web Design',
      description: 'Creating beautiful, intuitive designs that enhance user experience and engagement.',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Frontend Development',
      description: 'Building responsive, performant websites using modern frameworks and best practices.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Responsive Development',
      description: 'Ensuring your website looks and works perfectly on all devices and screen sizes.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Performance Optimization',
      description: 'Optimizing website speed and performance for better user experience and SEO.',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'Creating user-centered designs that are both functional and aesthetically pleasing.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Cross-Browser Compatibility',
      description: 'Ensuring your website works flawlessly across all modern browsers.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer a wide range of services to help businesses and individuals establish a strong online presence with beautiful, functional websites.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary inline-flex">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;