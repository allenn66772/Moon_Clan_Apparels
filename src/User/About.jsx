import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg">
          Where fashion meets confidence. We create styles that move with
          trends, culture, and individuality.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To redefine modern fashion by blending elegance, comfort,
              and bold design for every generation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              We craft trend-forward collections that empower individuals
              to express themselves authentically.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
            <p className="text-gray-300 leading-relaxed">
              Premium quality, modern aesthetics, and designs inspired
              directly from global runways.
            </p>
          </div>

        </div>
      </div>

     

    </div>
  );
}

export default About;
