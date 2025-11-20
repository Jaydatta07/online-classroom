import React from "react";
import "../../index.css"; // animations defined here

const HeroSection = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljm_jNjj8lzfbuuiselC8ps9o7RRZsEjt-A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv7CgRe7WzvNBTU97oVfUa_t2NbbTTHetAw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuiaujwrDvVPi5qiGV89rTb436JX5jnzl7A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlo0atjpHvc9WUi9lqAodgwnYYIJ9zhINGg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sKrmTKelSKHJhRElnrW_NkvxoThhLsRA8w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqGeqWgXfUuj5ezUTpXQYs7nMDhc_Ioyz8A&s",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-48 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 overflow-hidden">
      {/* ===== Left Brick Column ===== */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col pl-6 overflow-hidden h-[600px]">
        <div className="flex flex-col gap-6 animate-scroll-down ">
          {[...images, ...images].map((src, i) => (
            <img
              key={`left-${i}`}
              src={src}
              alt={`left-img-${i}`}
              className="rounded-xl shadow-md h-40 w-44"
            />
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col pl-56 overflow-hidden h-[600px]">
        <div className="flex flex-col gap-6 animate-scroll-up">
          {[...images, ...images].map((src, i) => (
            <img
              key={`left-${i}`}
              src={src}
              alt={`left-img-${i}`}
              className="rounded-xl shadow-md h-40 w-44"
            />
          ))}
        </div>
      </div>

      {/* ===== Center Text Content ===== */}
      <div className="z-10 text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Teach Online & <br />
          <span className="text-indigo-600">Manage Courses</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Create, schedule, and host live sessions with powerful collaboration tools.
        </p>
        <button className="px-10 py-3 bg-indigo-600 text-white font-semibold rounded-lg text-lg hover:bg-indigo-700 transition">
          START
        </button>
      </div>

      {/* ===== Right Brick Column ===== */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col pr-6 overflow-hidden h-[600px]">
        <div className="flex flex-col gap-6 animate-scroll-down">
          {[...images, ...images].map((src, i) => (
            <img
              key={`right-${i}`}
              src={src}
              alt={`right-img-${i}`}
              className="rounded-xl shadow-md h-40 w-44"
            />
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col pr-56 overflow-hidden h-[600px]">
        <div className="flex flex-col gap-6 animate-scroll-up">
          {[...images, ...images].map((src, i) => (
            <img
              key={`right-${i}`}
              src={src}
              alt={`right-img-${i}`}
              className="rounded-xl shadow-md h-40 w-44"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
