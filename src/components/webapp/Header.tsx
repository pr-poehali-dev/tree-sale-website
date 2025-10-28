import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-4 border-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Trees" size={32} className="text-secondary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ЁлкиШоп
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors font-medium">
              Каталог
            </button>
            <button onClick={() => scrollToSection('promotions')} className="text-foreground hover:text-primary transition-colors font-medium">
              Акции
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </nav>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('hero')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Каталог
            </button>
            <button onClick={() => scrollToSection('promotions')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Акции
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Контакты
            </button>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
