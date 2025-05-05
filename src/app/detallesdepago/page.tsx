"use client";

import { useState } from "react";
import AddressStep from "@/components/Pagos/AddressStep";
import ShippingStep from "@/components/Pagos/ShippingStep";
import PaymentStep from "@/components/Pagos/PaymentStep";

export default function DetallesDePagos() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <main className="-full min-h-screen flex justify-center items-center px-4 py-8 ">
      <div className="w-full max-w-screen-xl">
        {step === 1 && <AddressStep onNext={handleNext} />}
        {step === 2 && <ShippingStep onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <PaymentStep onBack={handleBack} />}
      </div>
    </main>
  );
}
