import { useState } from 'react';
import { menuItems } from '../../assets/data/menuItems';
import MenuFilter from './MenuFilter';
import MenuItem from './MenuItem';

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <section className="our-menu section bg-light bg-[url('/assets/images/menu-bg.png')] bg-repeat" id="menu">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="sec-sub-title mb-3 text-orange-600 font-medium">our menu</p>
          <h2 className="text-4xl font-bold mb-4">
            wake up early, <span className="text-orange-600">eat fresh & healthy</span>
          </h2>
          <div className="flex justify-center mb-6">
            <img src="/assets/images/title-shape.svg" alt="" />
          </div>
        </div>
        
        <MenuFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;