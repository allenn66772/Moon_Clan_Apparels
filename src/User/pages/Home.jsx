import React from 'react'
import {  FiSliders } from "react-icons/fi";
import Header from '../components/Header';

function Home() {
  return (
    <>
    <Header/>
   <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-300 px-4 py-6">

        {/* Title + Filter */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">See Our Collection</h2>
          <FiSliders className="text-xl" />
        </div>

        {/* Banner */}
        <div className="w-full h-45 md:h-75 rounded-2xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd53"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-6 overflow-x-auto md:overflow-visible">
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
            ALL
          </button>
          <button className="bg-gray-100 px-5 py-2 rounded-full text-sm">
            MEN
          </button>
          <button className="bg-gray-100 px-5 py-2 rounded-full text-sm">
            WOMEN
          </button>
          <button className="bg-gray-100 px-5 py-2 rounded-full text-sm">
            PANT
          </button>
        </div>

        {/* NEW IN */}
        <h3 className="text-lg font-semibold mb-4">NEW IN</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-200 h-55 rounded-2xl relative">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              PANT ₹300
            </span>
          </div>

          <div className="bg-gray-200 h-55 rounded-2xl relative">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              TOP ₹300
            </span>
          </div>

          <div className="bg-gray-200 h-55 rounded-2xl relative">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              PANT ₹300
            </span>
          </div>

          <div className="bg-gray-200 h-55 rounded-2xl relative hidden lg:block">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              TOP ₹300
            </span>
          </div>
        </div>

        {/* MEN */}
        <h3 className="text-lg font-semibold mb-4">MEN</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-gray-200 h-60 rounded-2xl relative">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              T-SHIRT ₹300
            </span>
          </div>

          <div className="bg-gray-200 h-60 rounded-2xl relative">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              T-SHIRT ₹300
            </span>
          </div>

          <div className="bg-gray-200 h-60 rounded-2xl relative">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              PANT ₹300
            </span>
          </div>

          <div className="bg-gray-200 h-60 rounded-2xl relative hidden lg:block">
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              T-SHIRT ₹300
            </span>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home