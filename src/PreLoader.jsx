import React from "react";

function PreLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img
        src="https://blog-static.userpilot.com/blog/wp-content/uploads/2024/09/custom-preloader-example.gif"
        alt="preloader"
        className="w-24 h-24 object-contain"
      />
    </div>
  );
}

export default PreLoader;
