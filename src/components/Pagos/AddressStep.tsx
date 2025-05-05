"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import CheckoutSteps from "../items/ItemsPagos";
import { motion } from "framer-motion";

interface AddressStepProps {
  onNext: () => void;
}

interface Address {
  id: number;
  label: string;
  type: "HOME" | "OFFICE";
  address: string;
  phone: string;
}

const addresses: Address[] = [
  {
    id: 1,
    label: "2118 Thornridge",
    type: "HOME",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    phone: "(209) 555-0104",
  },
  {
    id: 2,
    label: "Headoffice",
    type: "OFFICE",
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    phone: "(704) 555-0127",
  },
];

export default function AddressStep({ onNext }: AddressStepProps) {
  const [selectedId, setSelectedId] = useState<number>(1);

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 sm:px-8 pt-12 pb-20 font-sans text-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CheckoutSteps currentStep={1} />

      <h2 className="text-lg sm:text-xl font-semibold mb-6">Select Address</h2>

      <div className="space-y-4">
        {addresses.map((addr) => (
          <motion.div
            key={addr.id}
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-md border gap-4 sm:gap-0 ${
              selectedId === addr.id
                ? "bg-gray-100 border-black"
                : "bg-gray-50 border-gray-200"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex space-x-4 w-full">
              <input
                type="radio"
                checked={selectedId === addr.id}
                onChange={() => setSelectedId(addr.id)}
                className="mt-1 accent-black shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 font-semibold">
                  <span>{addr.label}</span>
                  <span className="text-xs bg-black text-white px-2 py-0.5 rounded">
                    {addr.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{addr.address}</p>
                <p className="text-sm text-gray-600">{addr.phone}</p>
              </div>
            </div>
            <div className="flex space-x-4 sm:mt-0">
              <button>
                <RiPencilFill className="text-gray-500 hover:text-black" />
              </button>
              <button>
                <FaTimes className="text-gray-500 hover:text-red-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="my-8">
        <div className="border-t border-dashed border-gray-300 pt-6 flex justify-center">
          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-black">
            <span className="text-xl font-bold">+</span>
            <span>Add New Address</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-10 mt-10">
        <button className="w-full sm:w-auto border border-black px-10 py-3 rounded text-base font-medium hover:bg-gray-100">
          Back
        </button>
        <button
          className="w-full sm:w-auto bg-black text-white px-10 py-3 rounded text-base font-medium hover:bg-gray-800"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
