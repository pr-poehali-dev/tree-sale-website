import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import type { Tree } from '@/pages/Index';
import { useToast } from '@/hooks/use-toast';

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  tree: Tree | null;
}

const timeSlots = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
  '18:00 - 20:00',
  '20:00 - 22:00'
];

const DeliveryModal = ({ isOpen, onClose, tree }: DeliveryModalProps) => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !name || !phone || !address) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заказ оформлен! 🎄',
      description: `${tree?.name} будет доставлена ${format(date, 'dd MMMM', { locale: ru })} в ${timeSlot}`,
    });

    onClose();
    setDate(undefined);
    setTimeSlot('');
    setName('');
    setPhone('');
    setAddress('');
  };

  if (!tree) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Оформление заказа
          </DialogTitle>
          <DialogDescription>
            Выберите дату и время доставки вашей ёлки
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="border-2 border-primary/20 rounded-lg p-4 bg-gradient-to-br from-red-50 to-green-50">
            <img 
              src={tree.image} 
              alt={tree.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2">{tree.name}</h3>
            <p className="text-muted-foreground mb-2">{tree.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{tree.height}</span>
              <span className="text-2xl font-bold text-primary">{tree.price}₽</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input 
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div>
              <Label htmlFor="address">Адрес доставки</Label>
              <Input 
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="ул. Примерная, д. 1, кв. 1"
              />
            </div>

            <div>
              <Label>Дата доставки</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left font-normal"
                  >
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {date ? format(date, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    locale={ru}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Время доставки</Label>
              <Select value={timeSlot} onValueChange={setTimeSlot}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Оформить заказ
            </Button>
          </form>
        </div>

        <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-4 flex items-start gap-3">
          <Icon name="Truck" size={24} className="text-accent flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold mb-1">Бесплатная доставка!</h4>
            <p className="text-sm text-muted-foreground">
              Доставим вашу ёлку точно в выбранное время. Наш курьер позвонит за 30 минут до приезда.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryModal;
