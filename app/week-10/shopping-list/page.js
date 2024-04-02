//page.js
"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; 
import { useEffect, useState } from 'react'; 
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service'; 

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  // Initialize items state as empty array since we will fetch them from Firestore
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Fetch items from Firestore when the component mounts and when the user changes
  useEffect(() => {
    if (user) {
      const loadItems = async () => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      };

      loadItems().catch(console.error);
    } else {
      router.push('../week-10/page'); 
    }
  }, [user, router]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const itemId = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id: itemId }]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.replace(/,.*|\s\W.*$/g, '');
    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="flex justify-end mb-8">
        <Link href="/" className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-br from-blue-500 to-green-400 text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          Back to Home
          <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="flex flex-col w-full lg:w-1/3">
          <NewItem onAddItem={handleAddItem} />
        </div>
        
        <div className="flex flex-col w-full lg:w-1/3 mr">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex flex-col w-full lg:w-1/3">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;
