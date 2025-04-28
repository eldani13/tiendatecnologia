"use client";

import Image from "next/image";
import { productosrelacionados } from "@/data/ProductosRelacionados";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProductosRelacionados() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-10 text-center text-black">
          Related Products
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {productosrelacionados.map((producto, index) => (
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

              <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition-colors">
                Buy Now
              </button>

              <div className="absolute top-4 right-4">
                <FaRegHeart className="text-gray-400" size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
