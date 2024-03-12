"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';


// Define variants for animations
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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
        <p
            className={`relative mt-5 mb-5 text-1xl md:text-2xl font-bold text-white transition-transform duration-300 ${
              hover ? 'scale-110' : 'scale-100'
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              animation: 'pulse 2s infinite',
              WebkitAnimation: 'pulse 2s infinite',
            }}
          >
            A call for peace, unity, and freedom.

          </p>
        

        <div>
          <Link className="mt-5 ml-12 relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-r from-green-500 via-black to-red-500 p-4 overflow-hidden text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110" href="https://www.aljazeera.com/news/2023/10/9/whats-the-israel-palestine-conflict-about-a-simple-guide">
          Discover Palestine's Plight
        <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        </Link>
        </div>
        <div><Link className="mt-5 ml-12 relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-r from-green-500 via-black to-red-500 p-4 overflow-hidden text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110" href="/">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            Back to Home
            <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
          
        </Link>
        </div>
      </div>
       
      {/* Scroll for more content */}
      <motion.div
        className="mt-10 text-white max-w-4xl mx-auto p-4 space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <iframe
          className="w-full rounded-lg shadow-xl"
          height="500"
          src="https://www.youtube.com/embed/6foH3Zc82ZQ"
          title="How Israel Was Created"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Additional Content */}
        <motion.div variants={itemVariants} className="text-lg space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding the Conflict:</h2>
          <p>
            The struggle for freedom in Palestine goes beyond political disputes, representing a deep humanitarian crisis that affects millions.
          </p>
          <motion.img 
            src="./Palestinians.png" 
            alt="Inspirational" 
            className="w-full h-auto rounded-lg shadow-lg"
            variants={itemVariants}
          />
          <p>
            Rooted in decades of history, the conflict encapsulates a fight for identity, home, and existence against overwhelming odds.
          </p>
          <p>
            Today, we stand at a crucial juncture, where understanding and empathy can pave the way for peace and reconciliation.
          </p>
        </motion.div>

        {/* Interactive element */}
        <motion.div variants={itemVariants} className="mt-8">
          <Link className="inline-block bg-gradient-to-r from-green-600 to-green-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" href="/take-action">
              Take Action Now
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default FreePalestine;

