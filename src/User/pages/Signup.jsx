import React, { useState } from "react";
import { FaApple, FaEyeSlash, FaGoogle } from "react-icons/fa";
import registerdesktop from "../../assets/register_background.jpg";
import registerbackgroundmobile from "../../assets/register_background_mobile.jpg";
import Header from "../components/Header";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Signup Section */}
      <div className="relative min-h-screen pt-20 flex items-center justify-center px-4 overflow-hidden">
        
        {/* Desktop Background */}
        <img
          src={registerdesktop}
          alt=""
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />

        {/* Mobile Background */}
        <img
          src={registerbackgroundmobile}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] lg:hidden"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Card */}
        <div className="relative z-10 w-full max-w-md bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-white">
          
          <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">
            SIGN UP
          </h1>

          {/* Username */}
          <label className="text-sm">User Name</label>
          <input
            type="text"
            placeholder="User name"
            className="w-full mt-2 mb-4 px-4 py-3 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none"
          />

          {/* Email */}
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="Email address"
            className="w-full mt-2 mb-4 px-4 py-3 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none"
          />

          {/* Password */}
          <label className="text-sm">Password</label>
          <div className="relative mt-2 mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none"
            />
            <FaEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-600 cursor-pointer"
            />
          </div>

          {/* Confirm Password */}
          <label className="text-sm">Confirm password</label>
          <div className="relative mt-2 mb-6">
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none"
            />
            <FaEyeSlash className="absolute right-4 top-4 text-gray-600" />
          </div>

          {/* Signup Button */}
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-3 rounded-lg font-semibold mb-6">
            Signup
          </button>

          {/* Social Login */}
          <p className="text-center text-sm mb-3">Or continue with</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-black py-3 rounded-lg">
              <FaGoogle />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-black py-3 rounded-lg">
              <FaApple />
              Apple
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Signup;
