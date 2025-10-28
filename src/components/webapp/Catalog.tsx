import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import type { Tree } from '@/pages/Index';

interface CatalogProps {
  onOrderClick: (tree: Tree) => void;
}

const trees: Tree[] = [
  {
    id: '1',
    name: 'Ель классическая',
    height: '150-170 см',
    price: 2500,
    image: 'https://cdn.poehali.dev/projects/54060aa3-2281-4ae9-9a3a-21fefd8aaf8c/files/084343c1-59d7-4752-b9d5-55a026c65797.jpg',
    description: 'Пушистая зелёная ель с приятным хвойным ароматом'
  },
  {
    id: '2',
    name: 'Ель премиум',
    height: '180-200 см',
    price: 3500,
    image: 'https://cdn.poehali.dev/projects/54060aa3-2281-4ae9-9a3a-21fefd8aaf8c/files/a56f449c-f03d-4126-84a0-d3c1c31588f2.jpg',
    description: 'Роскошная ель с густыми ветвями, идеальна для больших помещений'
  },
  {
    id: '3',
    name: 'Сосна сибирская',
    height: '170-190 см',
    price: 2800,
    image: 'https://cdn.poehali.dev/projects/54060aa3-2281-4ae9-9a3a-21fefd8aaf8c/files/084343c1-59d7-4752-b9d5-55a026c65797.jpg',
    description: 'Сибирская сосна с длинными иголками и насыщенным ароматом'
  },
  {
    id: '4',
    name: 'Ель компактная',
    height: '120-140 см',
    price: 1800,
    image: 'https://cdn.poehali.dev/projects/54060aa3-2281-4ae9-9a3a-21fefd8aaf8c/files/a56f449c-f03d-4126-84a0-d3c1c31588f2.jpg',
    description: 'Компактная ёлочка для небольших квартир'
  },
  {
    id: '5',
    name: 'Пихта благородная',
    height: '160-180 см',
    price: 4200,
    image: 'https://cdn.poehali.dev/projects/54060aa3-2281-4ae9-9a3a-21fefd8aaf8c/files/084343c1-59d7-4752-b9d5-55a026c65797.jpg',
    description: 'Элитная пихта с серебристым оттенком иголок'
  },
  {
    id: '6',
    name: 'Ель голубая',
    height: '150-170 см',
    price: 3800,
    image: 'https://cdn.poehali.dev/projects/54060aa3-2281-4ae9-9a3a-21fefd8aaf8c/files/a56f449c-f03d-4126-84a0-d3c1c31588f2.jpg',
    description: 'Уникальная голубая ель, станет украшением вашего дома'
  }
];

const Catalog = ({ onOrderClick }: CatalogProps) => {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наш каталог ёлок
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальную ёлку для своего праздника
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trees.map((tree) => (
            <Card key={tree.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tree.image} 
                  alt={tree.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {tree.height}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{tree.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{tree.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Truck" size={16} />
                  <span>Бесплатная доставка</span>
                </div>
              </CardContent>
              
              <CardFooter className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-primary">{tree.price}₽</div>
                  <div className="text-sm text-muted-foreground">с доставкой</div>
                </div>
                <Button 
                  onClick={() => onOrderClick(tree)}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Заказать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
