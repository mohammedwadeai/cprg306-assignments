import React from 'react';


const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white shadow-md p-4 rounded-lg mb-4">
      <div className="font-semibold text-xl">{name}</div>
      <div className="text-gray-500">{category}</div>
      <div className="text-gray-600">Quantity: {quantity}</div>
    </li>
  );
};

export default Item;
