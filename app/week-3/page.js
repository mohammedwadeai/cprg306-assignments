// page.js
import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white text-center mb-6 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-600">
        Surprising Shopping List
      </h1>
      <ItemList />
    </main>
  );
};

export default Page;
