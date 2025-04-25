"use client";

import { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

export default function SeleccionarCatalogo() {
  const marcas = [
    { nombre: "Apple", cantidad: 110 },
    { nombre: "Samsung", cantidad: 125 },
    { nombre: "Xiaomi", cantidad: 68 },
    { nombre: "Poco", cantidad: 44 },
    { nombre: "OPPO", cantidad: 36 },
    { nombre: "Honor", cantidad: 10 },
    { nombre: "Motorola", cantidad: 34 },
    { nombre: "Nokia", cantidad: 22 },
    { nombre: "Realme", cantidad: 35 },
  ];

  const filtros = [
    "Battery capacity",
    "Screen type",
    "Screen diagonal",
    "Protection class",
    "Built-in memory",
  ];

  const [expanded, setExpanded] = useState<string | null>("Brand");
  const toggle = (name: string) => {
    setExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <aside className="w-full md:max-w-[240px]  md:block  flex-col gap-2 text-sm text-gray-800">
      <div>
        <div
          className="flex justify-between items-center cursor-pointer py-1.5 font-semibold border-b border-gray-200 text-gray-500"
          onClick={() => toggle("Brand")}
        >
          <span className="text-xs uppercase tracking-wide">Brand</span>
          <FaChevronDown
            className={`transition-transform duration-200 ${
              expanded === "Brand" ? "rotate-180" : ""
            }`}
            size={10}
          />
        </div>

        {expanded === "Brand" && (
          <div className="pt-2 flex flex-col gap-2">
            <div className="relative bg-gray-100 rounded-lg">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-1.5 text-sm rounded-md bg-transparent outline-none placeholder:text-gray-500 text-gray-800"
              />
              <FaSearch
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
                size={12}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              {marcas.map((marca) => (
                <label
                  key={marca.nombre}
                  className="flex items-center justify-between text-xs text-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 accent-black"
                    />
                    <span>{marca.nombre}</span>
                  </div>
                  <span className="text-gray-400 text-[11px]">
                    {marca.cantidad}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {filtros.map((filter) => (
        <div key={filter}>
          <div
            className="flex justify-between items-center cursor-pointer py-1.5 font-semibold border-b border-gray-200 text-black"
            onClick={() => toggle(filter)}
          >
            <span className="text-xs uppercase tracking-wide">{filter}</span>
            <FaChevronDown
              className={`transition-transform duration-200 ${
                expanded === filter ? "rotate-180" : ""
              }`}
              size={10}
            />
          </div>
        </div>
      ))}
    </aside>
  );
}
