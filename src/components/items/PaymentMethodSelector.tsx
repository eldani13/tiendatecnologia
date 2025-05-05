import { useState } from "react";

interface Props {
  onChange: (method: "card" | "cash") => void;
}

export default function PaymentMethodSelector({ onChange }: Props) {
  const [selected, setSelected] = useState<"card" | "cash">("card");

  const handleSelect = (method: "card" | "cash") => {
    setSelected(method);
    onChange(method);
  };

  return (
    <div className="flex space-x-4 mb-6 pb-2 text-black">
      <button
        className={`font-semibold border-b-2 ${
          selected === "card" ? "border-black" : "border-transparent text-gray-500"
        }`}
        onClick={() => handleSelect("card")}
      >
        Credit / Debit
      </button>
      <button
        className={`font-semibold border-b-2 ${
          selected === "cash" ? "border-black" : "border-transparent text-gray-500"
        }`}
        onClick={() => handleSelect("cash")}
      >
        Cash on delivery
      </button>
    </div>
  );
}
