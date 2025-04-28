import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src="/Logo1.png" alt="Logo" height={80} width={80} className=" mb-6" />
          <p className="text-gray-400 max-w-xs">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
          <div className="flex gap-4 mt-6 text-2xl">
            <FaTwitter className="cursor-pointer hover:text-gray-300 transition" />
            <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
            <FaTiktok className="cursor-pointer hover:text-gray-300 transition" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4">Assistance to the buyer</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
