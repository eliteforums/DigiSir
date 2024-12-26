import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact us for custom pricing and a personalized demo tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:contact@digisir.com"
                className="flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+1234567890"
                className="flex items-center justify-center px-8 py-3 bg-indigo-500 text-white rounded-lg font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactCTA;