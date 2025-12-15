import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col">
          <a href="#" className={`font-heading font-black text-xl tracking-tighter ${isScrolled ? 'text-skf' : 'text-white'}`}>
            CENTRALLUB
          </a>
          <span className={`text-xs font-bold tracking-widest ${isScrolled ? 'text-graphite' : 'text-gray-300'}`}>
            SKF CAR CENTER
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold hover:text-skf transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5516999999999" // Placeholder number
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
              isScrolled 
                ? 'bg-skf text-white hover:bg-skf-dark' 
                : 'bg-white text-skf hover:bg-gray-100'
            }`}
          >
            <Phone size={16} />
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-graphite' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-graphite' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-graphite font-medium px-2 py-1 hover:text-skf"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5516999999999"
              className="flex justify-center items-center gap-2 bg-skf text-white py-3 rounded-lg font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};