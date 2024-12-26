import React from 'react';
import FeaturesList from './features/FeaturesList';
import GlassCard from './ui/GlassCard';
import AnimatedText from './ui/AnimatedText';

const Features = () => {
  return (
    <div id="features" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedText
            text="Features"
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          />
          <AnimatedText
            text="Everything you need to manage your institution"
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl block"
            delay={0.2}
          />
          <AnimatedText
            text="Comprehensive tools and features designed to streamline educational management"
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto block"
            delay={0.4}
          />
        </div>

        <div className="mt-20">
          <GlassCard className="p-8">
            <FeaturesList />
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Features;