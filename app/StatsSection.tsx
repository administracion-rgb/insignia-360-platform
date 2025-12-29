'use client';
import React from 'react';

export default function StatsSection() {
  const stats = [
    { num: "2010", label: "Historial de Datos", desc: "Bases de datos legales actualizadas desde 2010." },
    { num: "+5,000", label: "Validaciones Exitosas", desc: "Procesos de blindaje completados con éxito." },
    { num: "+50", label: "Corporativos", desc: "Empresas blindadas bajo nuestro sello de calidad." },
    { num: "99.8%", label: "Precisión de IA", desc: "Efectividad en el análisis predictivo de talento." },
  ];

  return (
    <section className="bg-insignia-blue py-32 relative overflow-hidden">
      {/* Visual de Fondo: Elementos circulares desenfocados */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-tech-accent rounded-full blur-[150px]" />
          <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Grilla de Datos Técnicos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center group">
              {/* Número: Fuente Montserrat con tracking ajustado */}
              <h4 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-tech-accent transition-colors duration-500">
                {s.num}
              </h4>
              
              {/* Etiqueta: Acento en Cian Tech */}
              <p className="text-tech-accent font-bold text-[11px] uppercase tracking-[0.3em] mb-4">
                {s.label}
              </p>
              
              {/* Descripción: Tipografía Montserrat limpia y legible */}
              <p className="text-white/60 text-xs font-medium leading-relaxed max-w-[200px]">
                {s.desc}
              </p>
              
              {/* Línea decorativa de precisión */}
              <div className="mt-8 h-1 w-0 bg-tech-accent group-hover:w-12 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}