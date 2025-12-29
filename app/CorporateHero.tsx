'use client';
import React from 'react';
import { ChevronRight, PlayCircle, Zap, ShieldCheck, Cpu, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CorporateHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#001233] perspective-1000 pt-32 md:pt-40"> 
      {/* CAMBIO 1: Agregué pt-32 (padding top) para empujar el contenido hacia abajo y librar el Navbar */}

      {/* ==================== CAPA 1: FONDO BASE ==================== */}
      <div className="absolute inset-0 bg-[#001233] z-0" />

      {/* ==================== CAPA 2: LUZ RADIAL ==================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,#003399_0%,transparent_60%)] opacity-60" />
      </div>

      {/* ==================== CAPA 3: GRID 3D ==================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-[linear-gradient(to_bottom,transparent_0%,#00e5ff_100%)] [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_translateY(-10%)] [mask-image:linear-gradient(to_top,black_20%,transparent_100%)] opacity-20" />
      </div>

      {/* ==================== CAPA 4: EL NÚCLEO DE INTELIGENCIA ==================== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none opacity-40 mix-blend-screen">
         <div className="absolute inset-0 border-[1px] border-white/10 rounded-full animate-spin-slow" />
         <div className="absolute inset-[15%] border-[2px] border-dashed border-tech-accent/20 rounded-full animate-spin-reverse-slow" />
         <div className="absolute inset-[30%] border-[1px] border-tech-secondary/30 rounded-full animate-pulse shadow-[0_0_50px_rgba(45,212,191,0.2)]" />
      </div>

      {/* ==================== CAPA 5: CONTENIDO PRINCIPAL ==================== */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge Flotante */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#001a4d]/50 border border-tech-accent/20 text-tech-accent mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,174,239,0.2)] animate-fade-in-up cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent"></span>
          </span>
          <span className="font-bold uppercase tracking-[0.2em] text-[10px]">La Mejor Tecnología al Mejor Precio</span>
        </div>

        {/* Título Principal */}
        <h1 className="relative text-6xl md:text-8xl lg:text-[7rem] font-black text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl animate-fade-in-up [animation-delay:200ms] select-none">
          VALIDACIÓN <br />
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-3xl bg-tech-accent/20 rounded-full transform scale-y-50 skew-x-12 translate-y-4"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-tech-accent to-tech-secondary animate-gradient-x bg-[length:200%_auto]">
              INTELIGENTE.
            </span>
          </span>
        </h1>
        
        {/* Descripción */}
        <div className="relative max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-[#001a4d]/30 border border-white/5 backdrop-blur-sm animate-fade-in-up [animation-delay:400ms]">
          <p className="text-blue-100/90 text-lg md:text-2xl font-medium leading-relaxed text-balance">
            Fusionamos la <span className="text-white font-bold decoration-tech-accent underline decoration-2 underline-offset-4">Psicometría</span> con el <span className="text-white font-bold decoration-tech-secondary underline decoration-2 underline-offset-4">Background Check</span> en una infraestructura digital blindada.
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full animate-fade-in-up [animation-delay:600ms]">
          <Link href="/planes" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-tech-accent to-tech-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <button className="relative w-full sm:w-auto bg-[#001233] text-white font-bold text-lg px-12 py-5 rounded-full flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/10">
              Conocer Planes & Precios
              <ChevronRight size={20} className="text-tech-accent group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <Link href="/catalogo" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto group px-12 py-5 rounded-full border border-white/20 hover:bg-white/5 hover:border-tech-accent/50 text-white font-bold text-lg transition-all flex items-center justify-center gap-3 backdrop-blur-md">
              <PlayCircle size={22} className="text-tech-secondary group-hover:scale-110 transition-transform" /> 
              Explorar Soluciones
            </button>
          </Link>
        </div>

        {/* Footer del Hero - Iconos de confianza */}
        <div className="mt-20 w-full flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 animate-fade-in-up [animation-delay:800ms] pb-32">
            <div className="flex items-center gap-3 text-xs font-bold text-slate-300 uppercase tracking-widest group cursor-default hover:text-white transition-colors">
                <div className="p-2 bg-white/5 rounded-lg ring-1 ring-white/10"><Lock size={16} className="text-tech-accent"/></div>
                <span>Datos Encriptados</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-slate-300 uppercase tracking-widest group cursor-default hover:text-white transition-colors">
                <div className="p-2 bg-white/5 rounded-lg ring-1 ring-white/10"><Zap size={16} className="text-tech-secondary"/></div>
                <span>Resultados &lt; 72 hrs</span>
            </div>
             <div className="flex items-center gap-3 text-xs font-bold text-slate-300 uppercase tracking-widest group cursor-default hover:text-white transition-colors">
                <div className="p-2 bg-white/5 rounded-lg ring-1 ring-white/10"><Cpu size={16} className="text-white"/></div>
                <span>IA Predictiva</span>
            </div>
        </div>

      </div>

      {/* Degradado inferior para fusión suave */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#001233] via-[#001233] to-transparent z-20 pointer-events-none" />
    </section>
  );
}