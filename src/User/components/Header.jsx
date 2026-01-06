import React, { useState } from "react";
import { FaBell, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";

function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <header className="w-full h-20 bg-gray-300 flex items-center px-4 md:px-8 relative z-50">
        
        {/* LEFT – Logo */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            Moonclan Apparels
          </h1>
        </div>

        {/* CENTER – Search (MD and above) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 rounded-full focus:outline-none shadow shadow-black"
            />
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
          </div>
        </div>

        {/* RIGHT – Icons */}
        <div className="flex-1 flex justify-end items-center gap-6">

          {/* Search Icon (SM only) */}
          <button
            className="md:hidden text-xl"
            onClick={() => setShowMobileSearch(true)}
          >
            <FaSearch />
          </button>

          {/* Cart Icon */}
          <FaShoppingCart className="text-xl cursor-pointer" />

          {/* Notification Icon */}
          <FaBell className="text-xl cursor-pointer" />
        </div>
      </header>

      {/* MOBILE SEARCH BAR */}
      {showMobileSearch && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-gray-200 p-4 z-40 shadow-md">
          <div className="relative">
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-10 rounded-full focus:outline-none"
            />
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
            <FaTimes
              className="absolute right-4 top-3 text-gray-600 cursor-pointer"
              onClick={() => setShowMobileSearch(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
