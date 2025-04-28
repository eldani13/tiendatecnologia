import React from "react";
import { HiChevronDown } from "react-icons/hi";

export default function ProductDetails() {
  return (
    <section className="bg-[#FAFAFA] w-full px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4 text-black">Details</h2>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          {
            "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many."
          }
        </p>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold mb-4 text-black">Screen</h3>
          <div className="divide-y divide-gray-200 text-sm text-gray-700">
            <div className="flex justify-between py-3">
              <span>Screen diagonal</span>
              <span>6.7&quot;</span>
            </div>
            <div className="flex justify-between py-3">
              <span>The screen resolution</span>
              <span>2796x1290</span>
            </div>
            <div className="flex justify-between py-3">
              <span>The screen refresh rate</span>
              <span>120 Hz</span>
            </div>
            <div className="flex justify-between py-3">
              <span>The pixel density</span>
              <span>460 ppi</span>
            </div>
            <div className="flex justify-between py-3">
              <span>Screen type</span>
              <span>OLED</span>
            </div>
            <div className="flex py-3">
              <div className="w-full text-gray-700">Additionally</div>
              <ul className="list-none space-y-1 text-gray-700 text-right">
                <li>Dynamic Island</li>
                <li>Always-On display</li>
                <li>HDR display</li>
                <li>True Tone</li>
                <li>Wide color (P3)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-xl font-semibold mb-4 text-black">CPU</h3>
          <div className="divide-y divide-gray-200 text-sm text-gray-700">
            <div className="flex justify-between py-3">
              <span>CPU</span>
              <span>A16 Bionic</span>
            </div>
            <div className="flex justify-between py-3">
              <span>Number of cores</span>
              <span>6</span>
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
