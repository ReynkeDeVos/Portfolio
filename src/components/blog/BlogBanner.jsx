import React from 'react';

const BlogBanner = () => {
  return (
    <div className="relative mb-6 flex h-32 w-full items-center justify-center overflow-hidden rounded-md md:h-40 lg:h-48">
        {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden rounded-md">
        <div className="h-full w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
      </div>
        {/* Overlay */}
      <div className="absolute inset-0 rounded-md bg-black opacity-40"></div>

      {/* Banner Content */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-3xl font-extrabold text-white drop-shadow-md md:text-4xl lg:text-5xl">
          Pixels & Code: Renke's Guide to Web Development and Tech
        </h1>
        <p className="mt-2 text-lg text-gray-200 drop-shadow-sm md:text-xl lg:text-2xl">
          Insights into Tech, Linux, WebDev, and Beyond
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
