import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const promotions = [
  {
    id: '1',
    title: 'Скидка 20% на первый заказ',
    description: 'Оформите свой первый заказ и получите скидку 20% на любую ёлку',
    icon: 'Gift',
    color: 'from-primary to-red-400'
  },
  {
    id: '2',
    title: 'Бесплатная доставка',
    description: 'При заказе от 2000₽ доставка бесплатно в любое время',
    icon: 'Truck',
    color: 'from-secondary to-green-400'
  },
  {
    id: '3',
    title: 'Утилизация в подарок',
    description: 'Закажите ёлку у нас — заберём старую бесплатно после праздников',
    icon: 'Recycle',
    color: 'from-accent to-yellow-400'
  },
  {
    id: '4',
    title: 'Украшения в комплекте',
    description: 'К каждой ёлке — набор новогодних игрушек в подарок',
    icon: 'Sparkles',
    color: 'from-primary to-secondary'
  }
];

const Promotions = () => {
  return (
    <section id="promotions" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Специальные предложения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выгодные акции и бонусы для наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <Card key={promo.id} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${promo.color}`} />
              
              <CardHeader className="text-center pt-8">
                <div className={`mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r ${promo.color} flex items-center justify-center`}>
                  <Icon name={promo.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">{promo.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-center text-base">
                  {promo.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
