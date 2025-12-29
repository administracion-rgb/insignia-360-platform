'use client';
import React from 'react';

export default function SectionHeader({ tag, title, highlight }: { tag: string, title: string, highlight: string }) {
  return (
    <div className="text-center mb-24 px-4 flex flex-col items-center">
      
      {/* Tag de Protocolo: Estilo Técnico Aeronáutico */}
      <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#0b0e14] text-white mb-8 border-l-4 border-[#e81c4f] shadow-lg">
        <div className="w-1.5 h-1.5 bg-[#e81c4f] rounded-full animate-pulse" />
        <span className="font-black uppercase tracking-[0.4em] text-[9px] italic">
          {tag}
        </span>
      </div>

      {/* Título de Impacto: Tipografía Pesada e Industrial */}
      <h2 className="text-5xl md:text-8xl font-black italic uppercase text-[#0b0e14] leading-[0.85] tracking-tighter max-w-5xl">
        {title} <br />
        <span className="text-[#e81c4f]">{highlight}</span>
      </h2>
      
      {/* Elemento decorativo de precisión */}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-0.5 w-12 bg-[#0b0e14]/10" />
        <div className="h-1.5 w-1.5 bg-[#e81c4f] rotate-45" />
        <div className="h-0.5 w-12 bg-[#0b0e14]/10" />
      </div>
    </div>
  );
}