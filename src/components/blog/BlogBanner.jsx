import React from "react";

const BlogBanner = () => {
  return (
    <div className="relative w-full h-32 md:h-40 lg:h-48 flex items-center justify-center overflow-hidden rounded-md mb-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 rounded-md overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">Renke's Blog</h1>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-200 drop-shadow-sm">
          Insights into Tech, Linux, WebDev, and Beyond
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
