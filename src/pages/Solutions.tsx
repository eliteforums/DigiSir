import React from 'react';
import { School, GraduationCap, Users } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';

const Solutions = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-4">
            Tailored Solutions
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Comprehensive management solutions for every educational institution
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'For Schools & Colleges',
              icon: School,
              description: 'Complete management system for educational institutions',
              features: [
                'Multiple branch management',
                'Curriculum planning',
                'Staff administration',
                'Library management',
                'Transport tracking',
                'Alumni network'
              ]
            },
            {
              title: 'For Coaching Centers',
              icon: GraduationCap,
              description: 'Streamlined operations for coaching institutes',
              features: [
                'Batch management',
                'Performance tracking',
                'Study material distribution',
                'Mock test organization',
                'Lead management',
                'Student progress reports'
              ]
            },
            {
              title: 'For Private Tutors',
              icon: Users,
              description: 'Essential tools for independent educators',
              features: [
                'Student scheduling',
                'Payment tracking',
                'Progress monitoring',
                'Resource sharing',
                'Parent communication',
                'Assessment tools'
              ]
            }
          ].map((solution) => (
            <FadeIn key={solution.title}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <solution.icon className="w-8 h-8 text-indigo-600 mr-3" />
                  <h2 className="text-xl font-semibold">{solution.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;