//page.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; 
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); 

  const handleAddItem = (newItem) => {
    setItems(currentItems => [...currentItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.replace(/,.*|\s\W.*$/g, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-8">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full bg-gradient-to-br from-blue-500 to-green-400 text-white transition-all hover:from-pink-500 hover:to-yellow-500 hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              Back to Home
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="space-y-4">
            <NewItem onAddItem={handleAddItem} />
          </div>
          
          <div className="space-y-4">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="space-y-4">
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;