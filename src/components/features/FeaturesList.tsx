import React from 'react';
import { Users, BookOpen, Calendar, Bell, CreditCard, FileText, Video } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    name: 'Complete User Management',
    description: 'Efficiently manage students, teachers, parents, and administrative staff all in one place.',
    icon: Users,
  },
  {
    name: 'Academic Tools',
    description: 'Create timetables, manage attendance, and distribute study materials seamlessly.',
    icon: BookOpen,
  },
  {
    name: 'Smart Scheduling',
    description: 'Automated timetable generation and schedule management for classes and resources.',
    icon: Calendar,
  },
  {
    name: 'Online Lectures',
    description: 'Conduct and manage virtual classes with integrated video conferencing and recording capabilities.',
    icon: Video,
  },
  {
    name: 'Instant Notifications',
    description: 'Keep everyone informed with real-time updates about assignments, events, and announcements.',
    icon: Bell,
  },
  {
    name: 'Financial Management',
    description: 'Handle fee collection, salary disbursement, and expense tracking efficiently.',
    icon: CreditCard,
  },
  {
    name: 'Digital Forms & Reports',
    description: 'Streamline admissions and generate comprehensive academic reports.',
    icon: FileText,
  },
];

const FeaturesList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard key={feature.name} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesList;