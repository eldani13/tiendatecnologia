"use client";

import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { productos } from "@/data/Productos";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Productos() {
  const { addToCart } = useCart();
  return (
    <div className="bg-white py-8 px-4 max-w-7xl mx-auto">
      <div className="flex space-x-8 mb-6 text-lg font-medium">
        <span className="text-black border-b-2 border-black pb-2">
          New Arrival
        </span>
        <span className="text-gray-500">Bestseller</span>
        <span className="text-gray-500">Featured Products</span>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {productos.map((producto, index) => (
          <motion.div
            key={producto.id}
            className="bg-[#F6F6F6] border rounded-lg p-4 flex flex-col items-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={producto.image}
              alt={producto.title}
              width={144}
              height={144}
              className="object-contain mb-4"
            />
            <h3 className="text-center text-sm font-medium mb-2 text-black truncate w-full max-w-[250px]">
              {producto.title}
            </h3>
            <p className="text-lg font-semibold mb-4 text-black">
              {producto.price}
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
             onClick={() => addToCart(producto)}>
              Buy Now
            </button>
            <div className="absolute top-4 right-4">
              {producto.liked ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-400" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
