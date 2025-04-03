const MenuFilter = ({ activeFilter, setActiveFilter }) => {
    const filters = [
      { id: 'all', label: 'All', icon: '/assets/images/menu-1.png' },
      { id: 'breakfast', label: 'Breakfast', icon: '/assets/images/menu-2.png' },
      { id: 'lunch', label: 'Lunch', icon: '/assets/images/menu-3.png' },
      { id: 'dinner', label: 'Dinner', icon: '/assets/images/menu-4.png' },
    ];
  
    return (
      <div className="menu-tab text-center mb-8">
        <ul className="filters flex justify-center space-x-8 relative">
          {filters.map(filter => (
            <li 
              key={filter.id}
              className={`filter cursor-pointer flex flex-col items-center ${
                activeFilter === filter.id ? 'text-orange-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <img src={filter.icon} alt={filter.label} className="h-12 mb-2" />
              {filter.label}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MenuFilter;