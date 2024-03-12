"use client" 
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120 }
  }
};


const FreePalestine = () => {
  const [hover, setHover] = useState(false);
  const [actionHover, setActionHover] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 via-black to-red-500 overflow-hidden">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
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
      </main>

      {/* Additional content that appears as you scroll */}
      <motion.section
        className="text-white max-w-4xl mx-auto p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <iframe
          className="w-full rounded-lg shadow-xl my-8"
          height="500"
          src="https://www.youtube.com/embed/6foH3Zc82ZQ"
          title="How Israel Was Created"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Dynamically appearing content */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding the Conflict:</h2>
                  </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800">
            The struggle for <span className="font-bold text-red-500">freedom</span> in<span className="font-semibold text-green-700"> Palestine</span>  goes beyond political disputes, representing a deep humanitarian crisis that affects millions.

            </p>
          </motion.div>

        <motion.img 
          src="./Palestinians.png" 
          alt="Inspirational" 
          variants={itemVariants}
          className="my-8 w-full max-h-80 object-cover rounded-lg shadow-lg"
        />

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800">
            Rooted in decades of history, the conflict encapsulates a fight for identity, home, and existence against overwhelming odds.

            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-5 max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800">
            Today, we stand at a crucial juncture, where understanding and empathy can pave the way for peace and reconciliation.

            </p>
          </motion.div>
          


          <motion.div
            className="mt-8 mb-8 flex justify-center items-center p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <Link className={`inline-block bg-gradient-to-r from-red-500 via-black to-green-500 text-white font-bold py-5 px-16 rounded-full shadow-lg transform transition-all duration-300 ease-out ${
                  actionHover ? 'scale-110' : 'scale-100'
                } hover:shadow-xl`}
                onMouseEnter={() => setActionHover(true)}
                onMouseLeave={() => setActionHover(false)}
                style={{
                  animation: `${actionHover ? 'none' : 'pulse 2s infinite'}`,
                  WebkitAnimation: `${actionHover ? 'none' : 'pulse 2s infinite'}`,
                }} href="https://uscpr.org/take-action/" passHref>
              
                Take Action Now
              
            </Link>
          </motion.div>



        <div className="text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800">
              In <span className="font-semibold text-green-600">Palestine</span>, there's a longing for something we all cherish: <span className="font-bold text-red-500">freedom</span>.
              Imagine waking up every day in hope for peace, in a place where laughter once filled the air. These hopes aren't just dreams; they're the heartbeats of every Palestinian.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800">
              The <span className="font-semibold text-green-700">olive trees</span> in Palestine tell a story. They've seen laughter, tears, and hopes for a better tomorrow. These trees remind us of <span className="font-bold text-yellow-500">strength</span> and <span className="font-bold text-blue-500">resilience</span>, standing tall through the storms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800">
              Palestine's call for freedom is a call to us all. It's about standing up for what's right, for justice, and for peace. Every voice, every action, no matter how small, helps light the path towards a brighter future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800">
              This isn't just about a place far away; it's about humanity, about supporting each other in the quest for peace and dignity. It's a reminder that together, we can make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-4xl p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-800 mb-">
              Let's stand with Palestine. Let's turn our empathy into action. Your support can bring hope to those waiting for their day of peace. Join us in the movement for a free and peaceful Palestine.
            </p>
          </motion.div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>

      </motion.section>
    </div>
  );
};

export default FreePalestine;
