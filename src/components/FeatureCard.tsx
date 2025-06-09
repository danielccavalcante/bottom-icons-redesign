
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full text-orange-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
