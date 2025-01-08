import React from 'react';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Espresso', description: 'Rich and bold coffee.', price: '$3.00' },
    { id: 2, name: 'Latte', description: 'Creamy milk with espresso.', price: '$4.00' },
    { id: 3, name: 'Croissant', description: 'Buttery and flaky pastry.', price: '$2.50' },
  ];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;