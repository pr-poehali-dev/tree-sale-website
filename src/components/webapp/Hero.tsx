import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-red-100 via-white to-green-100 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">❄️</div>
        <div className="absolute top-32 right-20 text-6xl">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🎄</div>
        <div className="absolute bottom-32 right-1/3 text-5xl">❄️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                🎁 Новогодняя распродажа!
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Настоящие ёлки с <span className="text-primary">доставкой</span> до двери
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Свежие новогодние ёлки премиум качества. Доставим в удобное для вас время прямо к празднику!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={onOrderClick}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Выбрать ёлку
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8"
              >
                <Icon name="Gift" size={20} className="mr-2" />
                Акции
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Доставка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Свежие ёлки</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://cdn.poehali.dev/projects/54060aa3-2281-4ae9-9a3a-21fefd8aaf8c/files/084343c1-59d7-4752-b9d5-55a026c65797.jpg"
                alt="Новогодняя ёлка"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                -20% 🎉
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
