"use client";
import React from 'react';
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context'; 

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error during GitHub sign in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <div className="text-center">
          <p className="text-black mb-4 text-xl font-medium">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded bg-red-500 text-white hover:bg-red-700 transition-colors duration-200"
          >
            Log Out
          </button>
          <div className="mt-4">
            
            <a href="/week-8/shopping-list" className="inline-block px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-200" >
                Go to Shopping List
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="px-6 py-2 rounded bg-green-500 text-white hover:bg-green-700 transition-colors duration-200"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
};

export default LandingPage;
