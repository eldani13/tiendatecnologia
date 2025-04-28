import { Suspense } from "react";
import CatalogoPage from "@/components/Catalogo/CatalogoTelefonos";

export default function Catalogo() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Suspense fallback={<div>Cargando catálogo...</div>}>
        <CatalogoPage />
      </Suspense>
    </main>
  );
}
