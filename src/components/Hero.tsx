import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Hero = () => {
  const benefits = [
    'Complete institution management system',
    'Streamlined administrative tasks',
    'Comprehensive academic tools',
    'Secure and reliable platform'
  ];

  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <FadeIn>
              <h1>
                <span className="block text-base font-semibold text-indigo-600">
                  Introducing DigiSir
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Transform Your</span>
                  <span className="block text-indigo-600">Educational Institution</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                The complete management solution for educational institutions, coaching centers, and tutors.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8">
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-2" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact for Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </FadeIn>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Educational management dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;