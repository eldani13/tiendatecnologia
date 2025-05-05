"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const parsePrice = (priceStr: string) =>
    parseFloat(priceStr.replace("$", ""));

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantity,
    0
  );
  const estimatedTax = 50;
  const shipping = 29;
  const total = subtotal + estimatedTax + shipping;

  return (
    <motion.section
    className="bg-white w-full px-4 py-10"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-10 max-w-screen-xl">
      <div className="order-1 lg:order-1 lg:col-span-2">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            No hay productos en el carrito
          </p>
        ) : (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 items-center border-b pb-6 sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-contain w-24 h-24"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-black text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">#{item.id}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full sm:w-auto gap-4">
                  <div className="flex items-center gap-2 border px-2 py-1 rounded">
                    <button
                      className="text-xl px-2 text-black"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span className="text-black">{item.quantity}</span>
                    <button
                      className="text-xl px-2 text-black"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right font-medium text-lg text-black w-16">
                    {item.price}
                  </div>

                  <button
                    className="text-gray-400 hover:text-black text-xl"
                    onClick={() => removeFromCart(item.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="order-2 lg:order-2 lg:col-span-1 w-full">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 w-full max-w-full lg:max-w-sm mx-auto">
          <h3 className="text-xl font-semibold text-black mb-6">
            Order Summary
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-sm text-[#545454]">
                Discount code / Promo code
              </span>
              <input
                type="text"
                placeholder="Code"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="space-y-2">
              <span className="text-sm text-[#545454]">
                Your bonus card number
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Card Number"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="px-4 py-3 border border-gray-300 rounded-md text-sm text-black hover:bg-gray-100">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-black">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#545454]">
              <span>Estimated Tax</span>
              <span>${estimatedTax}</span>
            </div>
            <div className="flex justify-between text-[#545454]">
              <span>Estimated shipping & Handling</span>
              <span>${shipping}</span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-6 border-t pt-4 text-black">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            href="/detallesdepago"
            className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 text-sm font-medium block text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  </motion.section>
  );
}
