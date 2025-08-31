import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import DhoniPersona from './components/DhoniPersona'

export default function App() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-green-700 via-emerald-600 to-blue-800 flex flex-col items-center justify-center text-white px-6">
    //   {/* Hero Section */}
    //   <div className="text-center max-w-2xl">
    //     <h1 className="text-6xl font-extrabold drop-shadow-lg">
    //       🏏 Welcome to <span className="text-yellow-300">CricketVerse</span>
    //     </h1>
    //     <p className="mt-6 text-lg text-gray-200">
    //       Celebrate the spirit of cricket with live scores, match updates, and fan moments.
    //     </p>

    //     {/* CTA */}
    //     <button className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-2xl shadow-lg hover:bg-yellow-300 transition">
    //       View Live Matches
    //     </button>
    //   </div>

    //   {/* Cards Section */}
    //   <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
    //     {/* Card 1 */}
    //     <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:scale-105 transition cursor-pointer">
    //       <h2 className="text-2xl font-bold text-yellow-300">Top Players</h2>
    //       <p className="mt-3 text-gray-200">Explore stats and highlights of your favorite cricketers.</p>
    //     </div>

    //     {/* Card 2 */}
    //     <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:scale-105 transition cursor-pointer">
    //       <h2 className="text-2xl font-bold text-yellow-300">Upcoming Matches</h2>
    //       <p className="mt-3 text-gray-200">Don’t miss the thrill of upcoming international and league games.</p>
    //     </div>

    //     {/* Card 3 */}
    //     <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:scale-105 transition cursor-pointer">
    //       <h2 className="text-2xl font-bold text-yellow-300">Fan Zone</h2>
    //       <p className="mt-3 text-gray-200">Join the cricket community and share your love for the game.</p>
    //     </div>
    //   </div>
    // </div>
    <DhoniPersona />
  )
}
