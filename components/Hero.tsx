import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop" 
          alt="Oficina Mecânica" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-dark/95 via-graphite-dark/80 to-graphite/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-skf/20 border border-skf/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-skf animate-pulse"></span>
            <span className="text-skf-light text-xs md:text-sm font-bold uppercase tracking-wider">
              Atendemos Franca e Região
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
            Troca de óleo e mecânica com <span className="text-transparent bg-clip-text bg-gradient-to-r from-skf-light to-white">honestidade</span> e preço justo.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Atendemos motoristas de Franca que buscam manutenção segura, sem surpresas e com total transparência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              variant="whatsapp" 
              className="h-14 text-lg w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/5516999999999', '_blank')}
            >
              Falar agora no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              className="h-14 text-lg border-white text-white hover:bg-white hover:text-graphite w-full sm:w-auto"
              onClick={() => document.getElementById('servicos')?.scrollIntoView()}
            >
              Ver Nossos Serviços
            </Button>
          </div>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-700 pt-8">
            <div className="flex items-center gap-2 text-gray-200">
              <CheckCircle2 className="text-skf" size={20} />
              <span className="text-sm font-medium">Profissionais Qualificados</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <CheckCircle2 className="text-skf" size={20} />
              <span className="text-sm font-medium">Produtos de Qualidade</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <CheckCircle2 className="text-skf" size={20} />
              <span className="text-sm font-medium">12x Sem Juros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};