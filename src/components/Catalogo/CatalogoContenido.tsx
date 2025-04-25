import { useSearchParams } from "next/navigation";
import { productos } from "@/data/Productos";
import { useState } from "react";

const PRODUCTS_PER_PAGE = 12;

export default function CatalogoContenido() {
  const searchParams = useSearchParams();
  const categoriaSeleccionada = searchParams.get("categoria");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = categoriaSeleccionada
    ? productos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      )
    : productos;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className="text-gray-500 text-sm flex gap-2">
      <span>Home</span> / <span>Category</span>{" "}
      {categoriaSeleccionada && (
        <>
          / <span className="text-black">{categoriaSeleccionada}</span>
        </>
      )}
    </div>
  );
}
