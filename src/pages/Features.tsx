import React from 'react';
import { Layers, Shield, Zap } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';

const Features = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-12">
            Comprehensive Management Features
          </h1>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Academic Management',
              icon: Layers,
              features: [
                'Class & Division Management',
                'Timetable Generation',
                'Attendance Tracking',
                'Test Scheduling',
                'Performance Analytics',
                'Resource Distribution'
              ]
            },
            {
              title: 'Administrative Control',
              icon: Shield,
              features: [
                'Staff Management',
                'Student Database',
                'Parent Portal',
                'Digital ID Cards',
                'Inventory Control',
                'Document Management'
              ]
            },
            {
              title: 'Financial Operations',
              icon: Zap,
              features: [
                'Fee Management',
                'Salary Processing',
                'Expense Tracking',
                'Payment Gateway',
                'Financial Reports',
                'Budget Planning'
              ]
            }
          ].map((section) => (
            <FadeIn key={section.title}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <section.icon className="w-6 h-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.features.map((feature) => (
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

export default Features;