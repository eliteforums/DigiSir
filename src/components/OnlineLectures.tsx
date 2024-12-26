import React from 'react';
import { Video, MonitorPlay, Download, Share2 } from 'lucide-react';

const OnlineLectures = () => {
  return (
    <div id="online-lectures" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Seamless Online Learning Experience
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Conduct virtual classes, record lectures, and create an engaging online learning environment with our integrated video conferencing solution.
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Video,
                  title: 'Live Classes',
                  description: 'High-quality video conferencing for interactive sessions',
                },
                {
                  icon: MonitorPlay,
                  title: 'Screen Sharing',
                  description: 'Share presentations and educational content effortlessly',
                },
                {
                  icon: Download,
                  title: 'Recording',
                  description: 'Record lectures for future reference and revision',
                },
                {
                  icon: Share2,
                  title: 'Easy Sharing',
                  description: 'Share lecture links and recordings with students instantly',
                },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Online lecture interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLectures;