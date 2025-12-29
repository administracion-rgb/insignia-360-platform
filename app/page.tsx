// Rutas locales (archivos en la misma carpeta 'app')
import CorporateHero from "./CorporateHero";
import FinalCTA from "./FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. PORTADA DE ALTO IMPACTO (Enganche visual) */}
      <CorporateHero />
      
      {/* 2. CIERRE DIRECTO (Conversión) */}
      <FinalCTA />
    </div>
  );
}