
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-orange-500 rounded-full">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          MBA em Saúde Emocional
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Cultura e Novas Relações do Trabalho
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Desenvolva competências essenciais para liderar mudanças organizacionais e promover bem-estar no ambiente corporativo.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          SOU ALUNO
        </button>
      </div>
    </section>
  );
};

export default Hero;
