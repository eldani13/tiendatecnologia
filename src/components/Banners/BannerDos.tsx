"use client";

import Image from "next/image";
import { bannerDos } from "@/data/BannerDos";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerDos() {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={false}
        autoplay={{ delay: 3000 }}
        className="swiper-container h-full"
      >
        {bannerDos.map((banner, index) => (
          <SwiperSlide key={index} className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col justify-between h-full min-h-[520px] px-6 py-10 text-center
             ${banner.white ? "bg-[#fff] text-black" : ""} 
             ${banner.dark ? "bg-[#2C2C2C] text-white" : ""} 
             ${banner.gray ? "bg-[#F9F9F9] text-black" : ""} 
             ${banner.grayDos ? "bg-[#EAEAEA] text-black" : ""}`}
            >
              <div className="flex flex-col justify-center items-center flex-1 w-full">
                <div className="mb-6">
                  <div className="w-[250px] h-[250px] flex justify-center items-center">
                    <Image
                      src={banner.image}
                      alt={banner.title}
                      width={250}
                      height={250}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl self-start font-semibold mb-2">
                  {banner.title}
                </h3>
                <p className="text-sm text-start text-[#909090] mb-4">
                  {banner.description}
                </p>
              </div>
              <button
                className={`self-start border px-5 py-2 rounded-2xl font-semibold transition mt-4 ${
                  banner.dark
                    ? "border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                    : "border-black text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                }`}
              >
                Shop Now
              </button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
