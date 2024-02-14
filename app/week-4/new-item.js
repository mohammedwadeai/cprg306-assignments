"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log({ name, quantity, category });
    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-xl shadow-2xl space-y-6">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Add New Item</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-white">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full p-2 rounded-md focus:ring focus:ring-opacity-50 focus:ring-offset-2" />
        </div>
        <div>
          <label htmlFor="quantity" className="text-white">Quantity</label>
          <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="mt-1 block w-full p-2 rounded-md focus:ring focus:ring-opacity-50 focus:ring-offset-2" />
        </div>
        <div>
          <label htmlFor="category" className="text-white">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full p-2 rounded-md focus:ring focus:ring-opacity-50 focus:ring-offset-2">
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
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-75">
        Submit
      </button>
      <div>
        <Link className="ml-6 relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-br from-blue-500 to-green-400 text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110" href="/">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            Back to Home
            <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
          
        </Link>
        </div>
    </form>
  );
}
