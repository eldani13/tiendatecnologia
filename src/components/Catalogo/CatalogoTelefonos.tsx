"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { productos } from "@/data/Productos";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import SeleccionarCatalogo from "./SeleccionarCatalogo";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiSliders } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const PRODUCTS_PER_PAGE = 12;

export default function CatalogoPage() {
  const searchParams = useSearchParams();
  const categoriaSeleccionada = searchParams.get("categoria");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = categoriaSeleccionada
    ? productos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      )
    : productos;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${
            currentPage === i
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }

    if (totalPages > 5) {
      buttons.push(
        <span key="dots" className="text-gray-400 px-1">
          ...
        </span>,
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm font-medium"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-col gap-4 p-6 mt-16">
      <main className="max-w-[1200px] mx-auto flex flex-col gap-4">
        <div className="text-gray-500 text-sm flex gap-2">
          <span>Home</span> / <span>Category</span>{" "}
          {categoriaSeleccionada && (
            <>
              / <span className="text-black">{categoriaSeleccionada}</span>
            </>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className=" hidden md:block">
            <SeleccionarCatalogo />
          </div>

          <section className="flex-1 grid   gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="md:hidden w-full flex justify-between items-center gap-4">
                <button
                  className="flex items-center gap-2 text-black border border-gray-300 rounded px-3 py-2 text-sm w-full justify-between"
                  onClick={() => setShowMobileFilters(true)}
                >
                  Filters
                  <FiSliders className="w-4 h-4" />
                </button>

                <div className="relative w-full">
                  <select className="flex items-center gap-2 text-black border border-gray-300 rounded px-3 py-2 text-sm w-full appearance-none bg-white pr-10">
                    <option>By rating</option>
                    <option>By price: Low to High</option>
                    <option>By price: High to Low</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <span className="text-md text-gray-700 hidden md:block">
                Selected Products: <b>{filteredProducts.length}</b>
              </span>

              <span className="text-md text-gray-700 md:hidden mt-2">
                Selected Products: <b>{filteredProducts.length}</b>
              </span>

              <div className="hidden md:flex items-center gap-4 relative ">
                <select className="flex items-center gap-2 text-black border border-gray-300 rounded px-3 py-2 text-sm w-full justify-between appearance-none bg-white pr-10">
                  <option>By rating</option>
                  <option>By price: Low to High</option>
                  <option>By price: High to Low</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden"
                >
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="bg-white w-full h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between px-4 py-4 border-b">
                      <button
                        onClick={() => setShowMobileFilters(false)}
                        className="text-black text-2xl font-light"
                      >
                        <FiArrowLeft className="w-6 h-6" />
                      </button>

                      <h2 className="text-lg font-semibold text-black">
                        Filters
                      </h2>

                      <div className="w-6" />
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
                      <SeleccionarCatalogo />
                    </div>

                    <div className="p-4 border-t bg-white">
                      <button
                        onClick={() => setShowMobileFilters(false)}
                        className="w-full bg-black text-white py-3 rounded-lg font-medium text-sm"
                      >
                        Apply
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[400px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((producto, index) => (
                  <Link key={producto.id} href={`/producto/${producto.id}`}>
                    <motion.div
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
                      <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
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
                  </Link>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-20">
                  <p className="text-xl font-semibold">No products found</p>
                  <p className="text-sm mt-2">Try adjusting your filters.</p>
                </div>
              )}
            </motion.div>

            {paginatedProducts.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-4 select-none">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 text-gray-600 disabled:opacity-40"
                >
                  <HiChevronLeft className="text-lg" />
                </button>

                {renderPageButtons()}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 text-gray-600 disabled:opacity-40"
                >
                  <HiChevronRight className="text-lg" />
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
