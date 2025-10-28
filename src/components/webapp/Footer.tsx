import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Trees" size={32} className="text-secondary" />
              <h3 className="text-xl font-bold">ЁлкиШоп</h3>
            </div>
            <p className="text-muted-foreground">
              Лучшие новогодние ёлки с доставкой по всему городу
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Ели классические</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Ели премиум</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Сосны</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Пихты</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">О компании</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Доставка и оплата</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Гарантии</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Контакты</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-green-400 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="Instagram" size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-yellow-400 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="Facebook" size={20} className="text-white" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Принимаем к оплате:</p>
              <div className="flex gap-2">
                <Icon name="CreditCard" size={24} className="text-muted-foreground" />
                <Icon name="Wallet" size={24} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 ЁлкиШоп. Все права защищены. С Новым Годом! 🎄✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
