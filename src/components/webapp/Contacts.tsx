import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Напишите нам</CardTitle>
              <CardDescription>Ответим в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <Input type="tel" placeholder="Телефон" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Textarea placeholder="Ваше сообщение" rows={4} />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 22:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-green-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@yolkishop.ru</p>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-yellow-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Ёлочная, д. 1</p>
                  <p className="text-sm text-muted-foreground mt-1">Пункт самовывоза работает 24/7</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-r from-red-50 to-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">Доставка 24/7</h3>
                    <p className="text-muted-foreground">Привезём ёлку в любое время!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
