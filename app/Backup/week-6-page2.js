"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(currentItems => [...currentItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      {/* Layout Container */}
      <div className="flex flex-col w-full h-full">
        {/* Top Bar for Back to Home Link */}
        <div className="w-full flex justify-end mb-4">
          <Link className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-br from-blue-500 to-green-400 text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            Back to Home
            <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex justify-between items-start">
          {/* ItemList centered but leans to the left */}
          <div className="w-2/3">
            <ItemList items={items} />
          </div>

          {/* NewItem to the right */}
          <div className="w-1/3">
            <NewItem onAddItem={handleAddItem} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
