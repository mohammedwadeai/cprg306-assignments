"use client";

import React, { useState } from 'react';
import Item from './item'; 
import itemsData from './items.json'; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  
  const sortItems = (items) => {
    return items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const sortedItems = sortItems([...itemsData]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="flex justify-center mb-4 space-x-3">
        <button
          onClick={() => setSortBy("name")}
          className={`relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group ${sortBy === "name" ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-gray-400 to-blue-400"} text-white shadow-lg transition-all duration-300 ease-out hover:from-green-500 hover:to-blue-500 hover:scale-110`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 transition-transform duration-300 ${sortBy === "name" ? "rotate-0" : "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Sort by Name
          <span className={`absolute inset-0 ${sortBy === "name" ? "bg-white bg-opacity-20" : "bg-opacity-0"} group-hover:bg-opacity-0 transition-opacity duration-300`}></span>
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group ${sortBy === "category" ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-gray-400 to-blue-400"} text-white shadow-lg transition-all duration-300 ease-out hover:from-green-500 hover:to-blue-500 hover:scale-110`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 transition-transform duration-300 ${sortBy === "category" ? "rotate-0" : "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Sort by Category
          <span className={`absolute inset-0 ${sortBy === "category" ? "bg-white bg-opacity-20" : "bg-opacity-0"} group-hover:bg-opacity-0 transition-opacity duration-300`}></span>

        </button>
      </div>

      <ul className="space-y-4 animate-fadeIn">
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

