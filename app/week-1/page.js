"use client"
import React, { useState } from 'react';
import Link from "next/link";


const FreePalestine = () => {
  const [hover, setHover] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 via-black to-red-500 p-4 overflow-hidden">
      <div className="text-center">
        <div className="relative">
          <h1
            className={`relative text-6xl md:text-8xl font-bold text-white transition-transform duration-300 ${
              hover ? 'scale-110' : 'scale-100'
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              animation: 'pulse 2s infinite',
              WebkitAnimation: 'pulse 2s infinite',
            }}
          >
            FREE PALESTINE
          </h1>
        </div>
        <p className="text-white text-xl mt-8 font-light">
          A call for peace, unity, and freedom.
        </p>
        <div><Link className="mt-5 ml-12 relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-r from-green-500 via-black to-red-500 p-4 overflow-hidden text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110" href="/">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            Back to Home
            <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
          
        </Link>
        </div>
      </div>
    </main>
  );
};

export default FreePalestine;

