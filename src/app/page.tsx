import BannerDos from "@/components/Banners/BannerDos";
import BannerTres from "@/components/Banners/BannerTres";
import BannerUno from "@/components/Banners/BannerUno";
import CategoryCarousel from "@/components/Carousel/CategoryCarousel";
import Hero from "@/components/Header/Hero";
import Productos from "@/components/Productos/Productos";
import ProductosDescuentos from "@/components/Productos/ProductosDescuentos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Hero />
      <BannerUno />
      <CategoryCarousel />
      <Productos />
      <BannerDos />
      <ProductosDescuentos />
      <BannerTres />
    </main>
  );
}

