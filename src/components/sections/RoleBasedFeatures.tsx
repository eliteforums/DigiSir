import React from 'react';
import { motion } from 'framer-motion';
import { Users2, GraduationCap, Users } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const roles = [
  {
    title: 'For Institutions & Admin',
    icon: Users2,
    features: [
      'Complete student & staff management',
      'Automated timetable generation',
      'Financial management & payroll',
      'Resource allocation & inventory',
      'Digital forms & admissions',
      'Website builder',
      'Question paper generator',
      'Online lecture integration'
    ]
  },
  {
    title: 'For Teachers',
    icon: GraduationCap,
    features: [
      'Digital ID cards',
      'Personal timetable view',
      'Attendance management',
      'Salary tracking',
      'Class notifications',
      'Online lecture tools',
      'Resource sharing',
      'Homework management'
    ]
  },
  {
    title: 'For Students & Parents',
    icon: Users,
    features: [
      'Digital ID & profile',
      'Academic performance tracking',
      'Attendance records',
      'Class schedule',
      'Online fee payment',
      'Study materials access',
      'Test schedules & results',
      'Online lecture access'
    ]
  }
];

const RoleBasedFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-16">
            Tailored Solutions for Every Role
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <FadeIn key={role.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <role.icon className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                </div>
                <ul className="space-y-3">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleBasedFeatures;