import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from './Button';

export const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-graphite text-white">
            <h3 className="text-3xl font-heading font-bold mb-8">Onde estamos</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-skf/20 p-3 rounded-lg text-skf-light">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Av. Jaime Teline, Res. Ana Dorothea<br />
                    CEP 14412-248<br />
                    Franca – SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-skf/20 p-3 rounded-lg text-skf-light">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horário</h4>
                  <p className="text-gray-300">
                    Terça a sexta-feira<br />
                    08h às 18h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-skf/20 p-3 rounded-lg text-skf-light">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contato</h4>
                  <Button 
                    variant="whatsapp" 
                    className="mt-2 text-sm"
                    onClick={() => window.open('https://wa.me/5516999999999', '_blank')}
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto bg-gray-200 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.911046755458!2d-47.3789418!3d-20.6323386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a7019c000001%3A0x0!2sFranca%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Mapa da Localização"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute bottom-4 right-4">
                <Button 
                  className="bg-white text-graphite hover:bg-skf hover:text-white shadow-lg"
                  icon={<Navigation size={18} />}
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  Ver Rota
                </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};