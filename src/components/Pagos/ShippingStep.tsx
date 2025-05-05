import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import CheckoutSteps from "../items/ItemsPagos";
import { motion } from "framer-motion";

interface ShippingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ShippingStep({ onNext, onBack }: ShippingStepProps) {
  const [selectedOption, setSelectedOption] = useState("free");

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 sm:px-8 pt-12 pb-20 font-sans text-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CheckoutSteps currentStep={2} />

      <h2 className="text-lg sm:text-xl font-semibold mb-6 text-black">
        Shipment Method
      </h2>

      <div className="space-y-4">
        {[
          {
            key: "free",
            title: "Free",
            desc: "Regulary shipment",
            date: "17 Oct, 2023",
            price: null,
          },
          {
            key: "express",
            title: "$8.50",
            desc: "Get your delivery as soon as possible",
            date: "1 Oct, 2023",
            price: "$8.50",
          },
          {
            key: "schedule",
            title: "Schedule",
            desc: "Pick a date when you want to get your delivery",
            date: "Select Date",
            icon: <IoChevronDown />,
          },
        ].map((opt) => (
          <motion.div
            key={opt.key}
            onClick={() => setSelectedOption(opt.key)}
            className={`flex flex-col sm:flex-row justify-between text-black items-start sm:items-center border rounded-lg px-4 py-4 cursor-pointer gap-2 sm:gap-0 ${
              selectedOption === opt.key ? "border-black" : "border-gray-300"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mt-1">
                {selectedOption === opt.key && (
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                )}
              </div>
              <div>
                <p className="font-medium">{opt.title}</p>
                <p className="text-gray-500 text-sm">{opt.desc}</p>
              </div>
            </div>
            <p className="text-sm font-semibold sm:text-right text-gray-600 flex items-center gap-2">
              {opt.date} {opt.icon}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 mt-16">
        <button
          className="w-full sm:w-auto border border-black px-10 py-3 rounded text-base font-medium hover:bg-gray-100"
          onClick={onBack}
        >
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
