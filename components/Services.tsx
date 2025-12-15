import React from 'react';
import { Droplets, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Droplets size={48} />,
      title: "Troca de Óleo",
      description: "Substituição do óleo do motor com produtos de qualidade, garantindo melhor desempenho e proteção do veículo.",
      highlight: "Marcas Premium"
    },
    {
      icon: <Wrench size={48} />,
      title: "Mecânica Geral",
      description: "Serviços mecânicos básicos e corretivos para manter seu carro seguro e funcionando corretamente.",
      highlight: "Diagnóstico Preciso"
    },
    {
      icon: <ShieldCheck size={48} />,
      title: "Manutenção Preventiva",
      description: "Avaliação e orientação para evitar problemas futuros e gastos desnecessários com seu veículo.",
      highlight: "Economia Real"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-skf font-bold uppercase tracking-widest text-sm mb-2">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-graphite mb-4">
            Serviços Automotivos de Alta Performance
          </h3>
          <p className="text-gray-600 text-lg">
            Explicamos o serviço antes de executar. Aqui você sabe exatamente o que será feito e por que será feito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-start"
            >
              <div className="mb-6 text-skf group-hover:scale-110 transition-transform duration-300 bg-blue-50 p-4 rounded-full">
                {service.icon}
              </div>
              <span className="bg-graphite text-white text-xs font-bold px-2 py-1 rounded mb-4">
                {service.highlight}
              </span>
              <h4 className="text-2xl font-heading font-bold text-graphite mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="https://wa.me/5516999999999" className="mt-auto flex items-center text-skf font-bold hover:gap-2 transition-all">
                Solicitar Orçamento <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};