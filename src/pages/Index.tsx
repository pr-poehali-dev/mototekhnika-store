import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const motorcycles = [
    {
      id: 1,
      name: 'Harley Davidson Street 750',
      price: '890 000 ₽',
      image: '/img/6f964c63-363c-4ee6-84f5-144daa0258f3.jpg',
      specs: ['750cc', '53 л.с.', '233 кг'],
      inStock: true
    },
    {
      id: 2,
      name: 'Yamaha MT-07',
      price: '750 000 ₽',
      image: '/img/0038a68c-60bb-4ea8-ad8c-16aa0d849f10.jpg',
      specs: ['689cc', '73 л.с.', '184 кг'],
      inStock: true
    },
    {
      id: 3,
      name: 'Honda CBR600RR',
      price: '1 200 000 ₽',
      image: '/placeholder.svg',
      specs: ['599cc', '118 л.с.', '194 кг'],
      inStock: false
    }
  ];

  const atvs = [
    {
      id: 4,
      name: 'Polaris Sportsman 570',
      price: '1 100 000 ₽',
      image: '/img/342f54d6-2936-4d15-a100-89a095e84225.jpg',
      specs: ['567cc', '44 л.с.', '4WD'],
      inStock: true
    },
    {
      id: 5,
      name: 'Can-Am Outlander 650',
      price: '1 350 000 ₽',
      image: '/placeholder.svg',
      specs: ['649cc', '62 л.с.', '4WD'],
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-roboto">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold font-oswald text-foreground">MOTO STORE</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#motorcycles" className="text-foreground hover:text-primary transition-colors">Мотоциклы</a>
              <a href="#atvs" className="text-foreground hover:text-primary transition-colors">Квадроциклы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-moto-dark via-moto-charcoal to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-oswald text-white mb-6 leading-tight">
              МОЩЬ И
              <span className="text-primary block">СКОРОСТЬ</span>
            </h1>
            <p className="text-xl text-muto-silver mb-8 max-w-2xl">
              Премиальная мототехника для настоящих ценителей. 
              Мотоциклы и квадроциклы ведущих мировых брендов с гарантией качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">
                <Icon name="Zap" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-moto-silver text-moto-silver hover:bg-moto-silver hover:text-black">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-moto-metal/20 to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-oswald mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Официальная гарантия на всю технику до 3 лет</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-oswald mb-2">Сервисное обслуживание</h3>
              <p className="text-muted-foreground">Профессиональный сервис и техническое обслуживание</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-oswald mb-2">Оригинальные запчасти</h3>
              <p className="text-muted-foreground">Только оригинальные запчасти от производителей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Motorcycles Section */}
      <section id="motorcycles" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold font-oswald">Мотоциклы</h2>
            <Button variant="outline">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcycles.map((bike) => (
              <Card key={bike.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-card border-border">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-full object-cover"
                  />
                  {bike.inStock ? (
                    <Badge className="absolute top-3 left-3 bg-primary">В наличии</Badge>
                  ) : (
                    <Badge variant="secondary" className="absolute top-3 left-3">Под заказ</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-oswald">{bike.name}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {bike.specs.map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{bike.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ATVs Section */}
      <section id="atvs" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold font-oswald">Квадроциклы</h2>
            <Button variant="outline">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {atvs.map((atv) => (
              <Card key={atv.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-background border-border">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={atv.image} 
                    alt={atv.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary">В наличии</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-oswald">{atv.name}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {atv.specs.map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{atv.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts & Delivery */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold font-oswald mb-8">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Мотостроительная, 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="delivery">
              <h2 className="text-4xl font-bold font-oswald mb-8">Доставка</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Truck" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">По Москве и МО</h3>
                    <p className="text-muted-foreground">Бесплатная доставка при заказе от 50 000 ₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Globe" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">По России</h3>
                    <p className="text-muted-foreground">Транспортными компаниями, стоимость рассчитывается индивидуально</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Shield" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Страхование</h3>
                    <p className="text-muted-foreground">Полное страхование груза при транспортировке</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
                <h3 className="text-lg font-bold font-oswald">MOTO STORE</h3>
              </div>
              <p className="text-muted-foreground">Премиальная мототехника для настоящих ценителей</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Мотоциклы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Квадроциклы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Экипировка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Запчасти</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Сервис</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тест-драйв</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Трейд-ин</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Финансирование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@motostore.ru</li>
                <li>г. Москва, ул. Мотостроительная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MOTO STORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;