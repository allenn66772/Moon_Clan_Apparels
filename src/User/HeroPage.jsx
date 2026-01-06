import React from "react";
import heroImgMobile from "../assets/heropage.jpg"
import heroImgDesktop from "../assets/heroDesktop.jpg"
import About from "./About";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
   <>
        <div className="h-100vh w-full bg-black">
          <div className="relative min-h-screen flex items-center">
    
            {/* Background Image */}
            <img
              src={heroImgDesktop} // place image in public folder
              alt="Fashion Hero"
              className="
                absolute inset-0 w-full h-full 
                object-cover 
                object-center 
                hidden lg:block
              "
            />
            {/* mobile */}
           
            <img
              src={heroImgMobile} // place image in public folder
              alt="Fashion Hero"
              className="
                absolute inset-0 w-full h-full 
                object-cover 
                object-[center_25%] 
                lg:hidden 
              "
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
    
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
    
                {/* Left Content */}
                <div className="text-white space-y-6">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                    Runway Ready:
                    <span className="block">Where Trends Begin</span>
                  </h1>
    
                  <p className="text-gray-200 max-w-md text-lg">
                    Step into the styles setting the season’s pace.
                  </p>
    
                  <Link to="/register" className="
                    mt-4 px-8 py-3 
                    bg-white text-black 
                    rounded-xl font-semibold 
                    hover:bg-gray-200 transition
                    w-fit
                  ">
                    Get Started
                  </Link>
                </div>
    
                {/* Right Spacer (Desktop balance) */}
                <div className="hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      <About/>
   </>
    
  );
}

export default HeroPage;
