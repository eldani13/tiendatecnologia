import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import CheckoutSteps from "../items/ItemsPagos";

interface ShippingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ShippingStep({ onNext, onBack }: ShippingStepProps) {
  const [selectedOption, setSelectedOption] = useState("free");

  return (
    <div className="max-w-3xl mx-auto px-8 pt-12 pb-20 font-sans text-black">
        <CheckoutSteps  currentStep={2}/>
      <h2 className="text-lg font-semibold mb-6 text-black">Shipment Method</h2>

      <div className="space-y-4">
        <div
          onClick={() => setSelectedOption("free")}
          className={`flex justify-between text-black items-center border rounded-lg px-4 py-4 cursor-pointer ${
            selectedOption === "free" ? "border-black" : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
              {selectedOption === "free" && (
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              )}
            </div>
            <div>
              <p className="font-medium">Free</p>
              <p className="text-gray-500 text-sm">Regulary shipment</p>
            </div>
          </div>
          <p className="text-sm font-semibold">17 Oct, 2023</p>
        </div>

        <div
          onClick={() => setSelectedOption("express")}
          className={`flex justify-between text-black items-center border rounded-lg px-4 py-4 cursor-pointer ${
            selectedOption === "express" ? "border-black" : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
              {selectedOption === "express" && (
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              )}
            </div>
            <div>
              <p className="font-medium">$8.50</p>
              <p className="text-gray-500 text-sm">
                Get your delivery as soon as possible
              </p>
            </div>
          </div>
          <p className="text-sm font-semibold">1 Oct, 2023</p>
        </div>

        <div
          onClick={() => setSelectedOption("schedule")}
          className={`flex justify-between text-black items-center border rounded-lg px-4 py-4 cursor-pointer ${
            selectedOption === "schedule" ? "border-black" : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
              {selectedOption === "schedule" && (
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              )}
            </div>
            <div>
              <p className="font-medium">Schedule</p>
              <p className="text-gray-500 text-sm">
                Pick a date when you want to get your delivery
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-3">
            Select Date
            <IoChevronDown />
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-6 mt-16">
        <button
          className="border border-black px-10 py-3 rounded text-lg font-medium hover:bg-gray-100"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-black text-white px-10 py-3 rounded text-lg font-medium hover:bg-gray-800"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
