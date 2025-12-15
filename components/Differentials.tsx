import React from 'react';
import { Award, CreditCard, ThumbsUp, UserCheck, Settings } from 'lucide-react';

export const Differentials: React.FC = () => {
  const items = [
    { icon: <ThumbsUp />, text: "Atendimento honesto e transparente" },
    { icon: <CreditCard />, text: "Parcelamento em até 12x sem juros" },
    { icon: <Award />, text: "Preço justo, sem surpresas" },
    { icon: <UserCheck />, text: "Profissionais experientes" },
    { icon: <Settings />, text: "Produtos de qualidade reconhecida" },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-graphite text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-skf opacity-10 skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/2">
          <div className="relative">
             <div className="absolute -inset-4 bg-skf rounded-xl opacity-20 blur-lg"></div>
             <img 
              src="https://images.unsplash.com/photo-1613214292775-430c00dbf53e?q=80&w=2070&auto=format&fit=crop" 
              alt="Mecânico SKF" 
              className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-6 left-6 bg-white text-graphite p-4 rounded-lg shadow-lg max-w-xs">
              <p className="font-heading font-bold text-lg">Padrão SKF Service</p>
              <p className="text-sm text-gray-600">Qualidade técnica superior para o seu carro.</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-skf-light font-bold uppercase tracking-widest text-sm mb-2">Nossos Diferenciais</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
            Por que escolher a Centrallub?
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Aqui o cliente entende o serviço e decide com segurança. Valorizamos a transparência acima de tudo.
          </p>

          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                <div className="text-skf-light bg-skf-light/10 p-2 rounded-full">
                  {item.icon}
                </div>
                <span className="font-medium text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};