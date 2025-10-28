import { useState } from 'react';
import Header from '@/components/webapp/Header';
import Hero from '@/components/webapp/Hero';
import Catalog from '@/components/webapp/Catalog';
import Promotions from '@/components/webapp/Promotions';
import Contacts from '@/components/webapp/Contacts';
import Footer from '@/components/webapp/Footer';
import DeliveryModal from '@/components/webapp/DeliveryModal';

export interface Tree {
  id: string;
  name: string;
  height: string;
  price: number;
  image: string;
  description: string;
}

const Index = () => {
  const [selectedTree, setSelectedTree] = useState<Tree | null>(null);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);

  const handleOrderClick = (tree: Tree) => {
    setSelectedTree(tree);
    setIsDeliveryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50">
      <Header />
      <Hero onOrderClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} />
      <Catalog onOrderClick={handleOrderClick} />
      <Promotions />
      <Contacts />
      <Footer />
      <DeliveryModal 
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
        tree={selectedTree}
      />
    </div>
  );
};

export default Index;
