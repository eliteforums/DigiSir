import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative">{children}</div>
    </div>
  );
};

export default GradientBackground;