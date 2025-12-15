import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite-dark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
             <h2 className="font-heading font-black text-2xl tracking-tighter mb-2">
              CENTRALLUB
            </h2>
            <p className="text-gray-400 text-sm">
              Lubrificantes SKF CAR CENTER
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-2">Franca – São Paulo</p>
            <p className="font-bold text-skf-light">Serviços automotivos com honestidade e preço justo</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Centrallub. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};