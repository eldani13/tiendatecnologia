"use client";

import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#", label: "About" },
  { href: "#", label: "Contact Us" },
  { href: "#", label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <Image src="/Logo.png" alt="logo" width={50} height={50} />

        <motion.button
          className="lg:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </motion.button>

        <div className="hidden lg:flex items-center justify-between w-full ml-6">
          <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 w-64">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium ml-8">
            {navLinks.map(({ href, label, active }) => (
              <Link
                key={label}
                href={href}
                className={
                  active
                    ? "text-black"
                    : "text-gray-400 hover:text-black transition"
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6 text-2xl text-black ml-8">
            <FiHeart className="cursor-pointer" />
            <div className="relative">
              <Link href="/pagos">
                <FiShoppingCart className="cursor-pointer" />
              </Link>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
            <FiUser className="cursor-pointer" />
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className="lg:hidden bg-white px-4 pb-6 flex flex-col gap-6 border-t border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 w-full mt-4 lg:mt-0">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map(({ href, label, active }) => (
              <Link
                key={label}
                href={href}
                className={`py-2 ${
                  active ? "text-black" : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-around text-2xl text-black pt-4 border-t border-gray-200">
            <FiHeart
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
            <div
              className="relative flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <Link href="/pagos">
                <FiShoppingCart className="text-2xl cursor-pointer" />
              </Link>
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
            <FiUser
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </motion.div>
      )}
    </header>
  );
}
