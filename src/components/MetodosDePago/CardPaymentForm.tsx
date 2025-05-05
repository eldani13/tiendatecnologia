import { FcSimCardChip } from "react-icons/fc";
import { SiMastercard } from "react-icons/si";

export default function CardPaymentForm() {
    return (
      <main>
         <div className="bg-black text-white p-4 rounded-xl w-80 h-52 mb-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <FcSimCardChip size={32} />
            <div className="flex space-x-1">
              <div className="w-6 h-10 bg-gray-700 rounded-md rotate-12 opacity-30" />
              <div className="w-6 h-10 bg-gray-700 rounded-md rotate-12 opacity-30" />
            </div>
          </div>
          <p className="text-xl font-mono tracking-widest">
            4085 9536 8475 9530
          </p>
          <div className="mt-auto flex justify-between items-end pt-10">
            <p className="text-sm">Cardholder</p>
            <SiMastercard size={32} className="text-white" />
          </div>
        </div>

        <form className="space-y-4 max-w-sm">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full border rounded px-4 py-2 text-black"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border rounded px-4 py-2 text-black"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Exp.Date"
              className="w-1/2 border rounded px-4 py-2 text-black"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 border rounded px-4 py-2 text-black"
            />
          </div>
          <div className="flex items-center space-x-2 mb-6">
            <input
              type="checkbox"
              id="sameAddress"
              className="form-checkbox accent-black"
            />
            <label htmlFor="sameAddress" className="text-sm text-black">
              Same as billing address
            </label>
          </div>
        </form>
      </main>
    );
  }
  