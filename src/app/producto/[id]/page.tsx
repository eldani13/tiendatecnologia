"use client";

import { useParams } from "next/navigation";
import { productos } from "@/data/Productos";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaTruck, FaBox } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import {
  FaMobileAlt,
  FaMicrochip,
  FaCamera,
  FaCameraRetro,
  FaBatteryFull,
} from "react-icons/fa";

export default function ProductoPage() {
  const { id } = useParams();
  const producto = productos.find((item) => item.id.toString() === id);

  if (!producto) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold text-gray-700">
          Producto no encontrado 😥
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-16">
      <div className="text-gray-500 text-sm mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /
        <Link href="/catalogo" className="hover:underline ml-1">
          Catalog
        </Link>{" "}
        /
        <Link href="/catalogo/smartphones" className="hover:underline ml-1">
          Smartphones
        </Link>{" "}
        /
        <Link href="/catalogo/apple" className="hover:underline ml-1">
          Apple
        </Link>{" "}
        /<span className="text-black font-semibold ml-1">{producto.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex lg:flex-col gap-4">
            {[producto.image].map((img, idx) => (
              <div key={idx} className=" p-2 rounded-md">
                <Image
                  src={img}
                  alt="Miniatura"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <Image
            src={producto.image || "/default-image.png"}
            alt={producto.title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <h1 className="text-3xl font-bold text-black">{producto.title}</h1>

          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-black">{producto.price}</p>
          </div>

          <div className="flex gap-5">
            <p className="font-semibold mb-2 text-black">Select color:</p>
            <div className="flex gap-2">
              {["black", "purple", "red", "yellow", "gray"].map(
                (color, idx) => (
                  <div
                    key={idx}
                    className={`w-6 h-6 rounded-full cursor-pointer`}
                    style={{ backgroundColor: color }}
                  ></div>
                )
              )}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {["128GB", "256GB", "512GB", "1TB"].map((size, idx) => (
              <button
                key={idx}
                className="border text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: <FaMobileAlt size={20} className="text-gray-600" />,
                label: "Screen size",
                value: producto.characteristics.screenSize,
              },
              {
                icon: <FaMicrochip size={20} className="text-gray-600" />,
                label: "CPU",
                value: producto.characteristics.cpu,
              },
              {
                icon: <FaCamera size={20} className="text-gray-600" />,
                label: "Main camera",
                value: producto.characteristics.mainCamera,
              },
              {
                icon: <FaCameraRetro size={20} className="text-gray-600" />,
                label: "Front-camera",
                value: producto.characteristics.frontCamera,
              },
              {
                icon: <FaBatteryFull size={20} className="text-gray-600" />,
                label: "Battery capacity",
                value: producto.characteristics.battery,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-[#F4F4F4] rounded-lg"
              >
                {item.icon}
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">{item.label}</span>
                  <span className="text-sm text-gray-700 font-medium">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-4">
            {producto.descripcion ||
              "Enhanced capabilities thanks to an enlarged display of 6.7 inches..."}
          </p>

          <div className="flex w-full gap-4 mt-8">
            <button className="flex-1 flex justify-center items-center gap-2 h-14 border-2 border-black text-black rounded-lg font-semibold hover:bg-gray-100 transition">
              <FaHeart className="text-lg" /> Add to Wishlist
            </button>
            <button className="flex-1 flex justify-center items-center gap-2 h-14 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              <FaShoppingCart className="text-lg" /> Add to Cart
            </button>
          </div>

          <div className="grid grid-cols-3  gap-6 text-center mt-10 text-gray-600 text-sm">
            <div className="flex flex-col items-center">
              <FaTruck size={32} className="text-[#797979] mb-2" />
              <p className="font-semibold">Free Delivery</p>
              <p className="text-xs text-gray-400">1-2 days</p>
            </div>

            <div className="flex flex-col items-center">
              <FaBox size={32} className="text-[#797979] mb-2" />
              <p className="font-semibold">In Stock</p>
              <p className="text-xs text-gray-400">Today</p>
            </div>

            <div className="flex flex-col items-center">
              <MdOutlineVerified size={32} className="text-[#797979] mb-2" />
              <p className="font-semibold">Guaranteed</p>
              <p className="text-xs text-gray-400">1 year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
