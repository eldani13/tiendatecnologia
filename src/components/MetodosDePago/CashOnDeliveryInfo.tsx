import { FaWhatsapp } from "react-icons/fa";

export default function CashOnDeliveryInfo() {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-green-300 bg-green-50 shadow-sm">
      <div className="p-2 bg-green-100 rounded-full text-green-600">
        <FaWhatsapp className="w-5 h-5" />
      </div>
      <div className="text-sm text-green-900">
        <p className="font-semibold">Cash on Delivery</p>
        <p>
          You will pay upon delivery. We will contact you via{" "}
          <span className="font-medium text-green-700">WhatsApp</span> to confirm your order.
        </p>
      </div>
    </div>
  );
}
