"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#211C24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 mt-28">
        <motion.div
          className="text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <p className="text-sm font-semibold text-gray-400 mb-2">
            Pro.Beyond.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            <span className="font-thin">iPhone 14</span>{" "}
            <span className="font-bold">Pro</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Created to change everything for the better. For everyone.
          </p>
          <Link
            href="#"
            className="inline-block mt-6 px-6 py-2 border border-white rounded-2xl text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Shop Now
          </Link>
        </motion.div>

        <motion.div
          className="w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:mt-0"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Image
            src="/telefono.png"
            alt="iPhone 14 Pro"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
