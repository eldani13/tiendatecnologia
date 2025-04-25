"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BannerUno() {
  return (
    <section className="bg-white">
      <div className="hidden lg:grid grid-cols-3 grid-rows-2 w-full mx-auto">
        <motion.div
          className="lg:col-span-2 row-span-1 bg-white flex items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="/playstation.png"
            alt="Playstation 5"
            width={360}
            height={360}
            className="object-contain"
          />
          <div className="ml-6 min-w-0">
            <h2 className="text-[clamp(2rem,5vw,5rem)] font-semibold text-black">
              Playstation 5
            </h2>
            <p className="text-[clamp(0.9rem,2vw,1.25rem)] text-gray-500 mt-2 max-w-xs">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex lg:col-start-3 lg:row-span-2 bg-[#EDEDED] items-center justify-between py-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="p-10 flex flex-col justify-center min-w-[300px] max-w-[400px]">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-light text-black">
              Macbook <span className="font-bold">Air</span>
            </h2>
            <p className="text-[clamp(0.8rem,1.8vw,1.125rem)] text-gray-600 mt-4 max-w-xl">
              {"The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."}
            </p>
            <div className="flex ">
              <Link
                href="#"
                className="mt-6 px-6 py-2 rounded-2xl border border-black text-black font-semibold  hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <Image
            src="/macbook.png"
            alt="Macbook Air"
            width={290}
            height={500}
            className="hidden md:block object-contain"
          />
        </motion.div>

        <motion.div
          className="lg:col-span-1 bg-[#EDEDED] flex items-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="/airpodsmax.png"
            alt="AirPods Max"
            width={110}
            height={270}
            className="object-contain"
          />
          <div className="ml-20 min-w-0">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-medium text-black flex flex-col">
              Apple <span className="font-bold">AirPods</span> <span>Max</span>
            </h2>
            <p className="text-[clamp(0.8rem,1.6vw,1rem)] text-gray-500 mt-2">
              {"Computational audio. Listen, it's powerful"}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-1 bg-[#353535] text-white flex items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="/visionpro.png"
            alt="Vision Pro"
            width={130}
            height={190}
            className="object-contain"
          />
          <div className="ml-20 min-w-0">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] text-white flex flex-col">
              Apple <br />
              Vision <span className="font-bold">Pro</span>
            </h2>
            <p className="text-[clamp(0.8rem,1.6vw,1rem)] text-gray-300 mt-2">
              An immersive way to experience entertainment
            </p>
          </div>
        </motion.div>
      </div>

      <div className="block lg:hidden overflow-y-auto">
        <div className="flex flex-col items-stretch">
          <motion.div
            className="w-full h-[500px] bg-[#EDEDED]  p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image
              src="/audifonos.png"
              alt="AirPods Max"
              width={200}
              height={200}
              className="mb-4 object-contain"
            />
            <h2 className="text-4xl font-medium text-black">
              Apple <span className="font-bold">AirPods Max</span>
            </h2>
            <p className="text-gray-600 text-sm mt-4">
              {"Computational audio. Listen, it's powerful."}
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[500px] bg-[#353535] text-white  p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image
              src="/gafasvision.png"
              alt="Vision Pro"
              width={200}
              height={200}
              className="mb-4 object-contain"
            />
            <h2 className="text-4xl text-white">
              Apple <span className="font-bold">Vision Pro</span>
            </h2>
            <p className="text-gray-300 text-sm mt-4">
              An immersive way to experience entertainment.
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[500px] bg-white  p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image
              src="/playstation-mobile.png"
              alt="PlayStation 5"
              width={200}
              height={200}
              className="mb-4 object-contain"
            />
            <h2 className="text-4xl text-black">
              Sony <span className="font-bold">PlayStation 5</span>
            </h2>
            <p className="text-gray-600 text-sm mt-4">
              Play Has No Limits. Experience the next-gen gaming.
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[500px] bg-[#EDEDED]  p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image
              src="/mac.png"
              alt="Macbook Air"
              width={200}
              height={200}
              className="mb-4 object-contain"
            />
            <h2 className="text-4xl font-light text-black">
              Macbook <span className="font-bold">Air</span>
            </h2>
            <p className="text-gray-600 text-sm mt-4">
              {"The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."}
            </p>
            <Link
              href="#"
              className="inline-block mt-4 px-4 py-2 border border-black rounded text-black hover:bg-black hover:text-white transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
