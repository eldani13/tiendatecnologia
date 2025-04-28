import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";

export default function Testimonios() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-black mb-6">Reviews</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex flex-row md:flex-col items-center justify-center bg-[#FAFAFA] rounded-2xl p-4 w-full md:w-auto text-center">
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-black mr-2 md:mr-0">
                4.8
              </span>
              <span className="text-gray-400 text-sm mb-2 md:mb-0 mr-2 md:mr-0">
                of 125 reviews
              </span>
            </div>

            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-[#FAFAFA] p-4 rounded-2xl w-full">
            {[
              { label: "Excellent", width: "w-[90%]", count: 100 },
              { label: "Good", width: "w-[80%]", count: 11 },
              { label: "Average", width: "w-[50%]", count: 3 },
              { label: "Below Average", width: "w-[40%]", count: 8 },
              { label: "Poor", width: "w-[20%]", count: 1 },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-24 text-sm text-black">{item.label}</span>
                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className={`bg-yellow-400 h-full ${item.width}`}></div>
                </div>
                <span className="w-6 text-sm text-gray-500">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Leave Comment"
            className="text-[#979797] w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-gray-500 bg-white"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 bg-[#FAFAFA] p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src="/perfil.png"
                    alt="perfil"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-sm">
                    Grace Carey
                  </h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-xs">24 January,2023</span>
            </div>
            <p className="text-sm text-gray-600">
              {
                "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!! 🖤"
              }
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-[#FAFAFA] p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src="/perfil.png"
                    alt="perfil"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-sm">
                    Ronald Richards
                  </h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-xs">24 January,2023</span>
            </div>
            <p className="text-sm text-gray-600">
              {
                "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamins') So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs."
              }
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-[#FAFAFA] p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src="/perfil.png"
                    alt="perfil"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-sm">
                    Darcy King
                  </h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-xs">24 January,2023</span>
            </div>
            <p className="text-sm text-gray-600">
              {
                "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition"
              }
            </p>

            <div className="flex gap-2 mt-2">
              <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="/prueba1.png"
                  alt="perfil"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="/prueba2.png"
                  alt="perfil"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-gray-700 text-sm">
            View More
            <HiChevronDown className="w-5 h-5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
