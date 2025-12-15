import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Main Rating */}
          <div className="flex items-center gap-4">
            <div className="bg-graphite text-white font-heading font-bold text-3xl w-16 h-16 flex items-center justify-center rounded-lg shadow-lg">
              5.0
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="text-gray-600 text-sm font-medium">
                Avaliação média no Google <span className="text-gray-400">|</span> 9 avaliações reais
              </p>
            </div>
          </div>

          {/* Separator for desktop */}
          <div className="hidden md:block h-12 w-px bg-gray-200"></div>

          {/* Testimonial Snippet */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "Ótimo atendimento e profissionais para executar qualquer serviço. Produtos de qualidade e atendimento muito bom."
            </p>
            <p className="text-skf font-bold text-sm mt-2">- Depoimento de Cliente Verificado</p>
          </div>

        </div>
      </div>
    </section>
  );
};