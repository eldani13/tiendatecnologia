import ProductoPage from "@/components/Productos/ProductosPaga";
import ProductDetails from "@/components/Detalles/ProductDetails";
import Testimonios from "@/components/Detalles/Testimonios";
import ProductosRelacionados from "@/components/Productos/ProductosRelacionados";

export default function Productos() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <ProductoPage />
      <ProductDetails />
      <Testimonios/>
      <ProductosRelacionados/>
    </main>
  );
}
