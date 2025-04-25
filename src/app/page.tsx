"use client";

import BannerDos from "@/components/Banners/BannerDos";
import BannerTres from "@/components/Banners/BannerTres";
import BannerUno from "@/components/Banners/BannerUno";
import CategoryCarousel from "@/components/Carousel/CategoryCarousel";
import Hero from "@/components/Header/Hero";
import Productos from "@/components/Productos/Productos";
import ProductosDescuentos from "@/components/Productos/ProductosDescuentos";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/catalogo?categoria=${encodeURIComponent(category)}`);
  };


  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Hero />
      <BannerUno />
      <CategoryCarousel onSelectCategory={handleCategoryClick} />
      <Productos />
      <BannerDos />
      <ProductosDescuentos />
      <BannerTres />
    </main>
  );
}

