"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) { 
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substr(2, 9), 
      name,
      quantity,
      category
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-xl shadow-2xl space-y-6 shadow-lg transition-all duration-300 ease-out hover:scale-110">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Add New Item</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-white">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full p-2 rounded-md focus:ring focus:ring-opacity-50 focus:ring-offset-2 shadow-lg transition-all duration-300 ease-out hover:scale-110 text-gray-600" />
        </div>
        <div>
          <label htmlFor="quantity" className="text-white">Quantity</label>
          <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="mt-1 block w-full p-2 rounded-md focus:ring focus:ring-opacity-50 focus:ring-offset-2 shadow-lg transition-all duration-300 ease-out hover:scale-110 text-gray-600 " />
        </div>
        <div>
          <label htmlFor="category" className="text-white">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full p-2 rounded-md focus:ring focus:ring-opacity-50 focus:ring-offset-2 shadow-lg transition-all duration-300 ease-out hover:scale-110 text-gray-600">
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="Yemeni Food">Yemeni Food</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-75 shadow-lg transition-all duration-300 ease-out hover:scale-110">
        Submit
      </button>

    </form>
  );
}
