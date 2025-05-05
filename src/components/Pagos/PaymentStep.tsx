"use client";

import { useCart } from "@/context/CartContext";
import CheckoutSteps from "../items/ItemsPagos";
import PaymentMethodSelector from "../items/PaymentMethodSelector";
import { useState } from "react";
import CardPaymentForm from "../MetodosDePago/CardPaymentForm";
import CashOnDeliveryInfo from "../MetodosDePago/CashOnDeliveryInfo";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  onBack: () => void;
}

export default function PaymentStep({ onBack }: Props) {
  const { cartItems } = useCart();
  const [method, setMethod] = useState<"card" | "cash">("card");

  const parsePrice = (priceStr: string) =>
    parseFloat(priceStr.replace("$", ""));

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantity,
    0
  );
  const estimatedTax = 50;
  const shipping = 29;
  const total = subtotal + estimatedTax + shipping;

  const message = `Hola, quiero confirmar mi pedido contra entrega:\n\n${cartItems
    .map((item) => `• ${item.title} x${item.quantity} - ${item.price}`)
    .join("\n")}\n\nSubtotal: $${subtotal.toFixed(
    2
  )}\nTax: $${estimatedTax}\nShipping: $${shipping}\nTOTAL: $${total.toFixed(
    2
  )}`;

  const whatsappUrl = `https://wa.me/573011940150?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="block md:hidden">
        <CheckoutSteps currentStep={3} />
      </div>

      <motion.div
        className="hidden md:block bg-white p-6 rounded-xl border"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CheckoutSteps currentStep={3} />
        <h2 className="text-lg font-semibold mb-4 text-black">Summary</h2>
        <div className="space-y-3">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <p className="text-sm text-black">{item.title}</p>
              </div>
              <p className="font-semibold text-black">{item.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p className="mb-1 font-medium">Address</p>
          <p>1131 Dusty Townline, Jacksonville, TX 40322</p>

          <p className="mt-4 font-medium">Shipment method</p>
          <p>Free</p>

          <div className="mt-6 text-black space-y-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated shipping & Handling</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between text-base font-semibold mt-3">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold mb-4 text-black">Payment</h2>
        <PaymentMethodSelector onChange={setMethod} />

        <motion.div
          key={method}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {method === "card" ? <CardPaymentForm /> : <CashOnDeliveryInfo />}
        </motion.div>

        <div className="mt-6 w-full flex flex-col sm:flex-row gap-4">
          <button
            onClick={onBack}
            className="w-full sm:w-auto border border-black text-black px-10 py-3 rounded hover:bg-gray-100"
          >
            Back
          </button>

          {method === "card" ? (
            <button
              onClick={() => alert("Pago procesado")}
              className="w-full sm:w-auto bg-black text-white px-10 py-3 rounded hover:bg-gray-800"
            >
              Pay
            </button>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 text-white px-10 py-3 rounded text-center hover:bg-green-600 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
