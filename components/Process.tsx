import React from 'react';
import { MessageSquare, ClipboardList, PenTool, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "Contato",
      desc: "Você entra em contato ou vem até a loja."
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Avaliação",
      desc: "Avaliamos a real necessidade do veículo."
    },
    {
      icon: <PenTool size={32} />,
      title: "Execução",
      desc: "Serviço feito com cuidado e profissionalismo."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Orientação",
      desc: "Orientamos você sobre os cuidados pós-serviço."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-graphite mb-4">
            Como funciona nosso atendimento
          </h2>
          <div className="w-20 h-1 bg-skf mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:border-skf group-hover:text-skf transition-all duration-500 mb-6 bg-gray-50 z-10">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-graphite mb-2">{step.title}</h4>
              <p className="text-gray-500 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};