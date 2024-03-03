// item.js
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
      <div className="p-5">
        <p className="text-lg font-semibold tracking-wide text-gray-600">{name}</p>
        <p className="text-indigo-500">{category}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
      </div>
    </li>
  );
};

export default Item;
