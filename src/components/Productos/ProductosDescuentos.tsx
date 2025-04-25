"use client";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { productosDescuentos } from "@/data/ProductosDescuentos";
import { motion } from "framer-motion"; 

export default function ProductosDescuentos() {
  return (
    <div className="bg-white py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-black">
        Discounts up to -50%
      </h2>
      
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {productosDescuentos.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} 
            className="bg-[#F6F6F6] rounded-lg shadow-sm p-4 flex flex-col items-center relative"
          >
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              <AiOutlineHeart size={20} />
            </button>

            <div className="w-[160px] h-[160px] flex justify-center items-center mb-4">
              <Image
                src={product.image}
                alt={product.title}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-center mb-2 text-black max-w-[170px] truncate">
              {product.title}
            </p>
            <p className="text-lg font-semibold mb-4 text-black">
              {product.price}
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md transition cursor-pointer">
              Buy Now
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
