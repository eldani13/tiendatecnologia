"use client";

import {
  FaRegClock,
  FaRegKeyboard,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { CiCamera, CiDesktop } from "react-icons/ci";
import { LuGamepad2 } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
  { label: "Phones", icon: <IoPhonePortraitOutline size={28} /> },
  { label: "Smart Watches", icon: <FaRegClock size={28} /> },
  { label: "Cameras", icon: <CiCamera size={28} /> },
  { label: "Headphones", icon: <FaRegKeyboard size={28} /> },
  { label: "Computers", icon: <CiDesktop size={28} /> },
  { label: "Gaming", icon: <LuGamepad2 size={28} /> },
  { label: "TV", icon: <FaTv size={28} /> },
];

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        setScrolled(scrollPosition > 0);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center bg-[#FAFAFA]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-6xl px-6 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-black">
              Browse By Category
            </h2>
            <div className="flex gap-2">
              {scrolled && (
                <button
                  onClick={() => scroll("left")}
                  className="p-2 hover:bg-gray-100 rounded-full transition text-black"
                >
                  <FaChevronLeft size={18} />
                </button>
              )}
              <button
                onClick={() => scroll("right")}
                className="p-2 hover:bg-gray-100 rounded-full transition text-black"
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          ref={scrollRef}
          className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth pl-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center bg-[#f3f3f3] rounded-xl w-[120px] h-[130px] flex-shrink-0 hover:bg-gray-200 transition shadow-sm sm:w-[140px] sm:h-[150px] md:w-[160px] md:h-[170px] lg:w-[180px] lg:h-[190px]"
            >
              <div className="mb-2 text-black">{category.icon}</div>
              <span className="text-sm font-medium text-center text-black">
                {category.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
