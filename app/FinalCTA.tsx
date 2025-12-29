'use client';
import React from 'react';
import { ChevronRight, ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    // USAMOS EL MISMO FONDO #001233 PARA CONTINUIDAD PERFECTA CON EL RESTO DE LA PÁGINA
    <section className="relative py-32 flex items-center justify-center overflow-hidden bg-[#001233] perspective-1000 -mt-1">
      
      {/* ==================== CAPA 1: PUENTE DE FUSIÓN SUPERIOR ==================== */}
      {/* Esto suaviza la unión con la sección anterior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#001233] to-transparent z-20 pointer-events-none" />

      {/* ==================== CAPA 2: ATMÓSFERA CYBER ==================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#000a1f]" />
        {/* Luz radial inferior (Amanecer digital) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[100%] bg-[radial-gradient(ellipse_at_bottom,#003399_0%,#001a4d_50%,transparent_100%)] opacity-50" />
        {/* Rejilla 3D con perspectiva */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(70deg)_translateY(20%)] [mask-image:linear-gradient(to_top,black_40%,transparent_100%)] opacity-20 animate-pulse-glow" />
      </div>

      {/* ==================== CAPA 3: NÚCLEO ANIMADO ==================== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none opacity-30 z-0 mix-blend-screen">
         <div className="absolute inset-0 border border-dashed border-tech-secondary/30 rounded-full animate-spin-slow" />
         <div className="absolute inset-[20%] border border-dotted border-tech-accent/20 rounded-full animate-spin-reverse-slow" />
      </div>

      {/* ==================== CAPA 4: ICONOS FLOTANTES ==================== */}
      <div className="absolute top-20 left-[10%] opacity-30 animate-float-slow hidden lg:block">
        <ShieldCheck size={50} className="text-[#00AEEF] drop-shadow-[0_0_15px_rgba(0,174,239,0.5)]" />
      </div>
      <div className="absolute bottom-20 right-[10%] opacity-30 animate-float-medium hidden lg:block">
        <Activity size={50} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
      </div>

      {/* ==================== CAPA 5: CONTENIDO PRINCIPAL ==================== */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* BADGE DE CIERRE */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#00AEEF] mb-10 backdrop-blur-md shadow-[0_0_30px_rgba(0,174,239,0.2)] animate-fade-in-up hover:scale-105 transition-transform duration-300 ring-1 ring-white/5 cursor-default">
          <CheckCircle2 size={16} className="text-[#00AEEF] drop-shadow-[0_0_8px_rgba(0,174,239,0.8)]" />
          <span className="text-white font-bold text-[11px] uppercase tracking-[0.3em]">
            Blindaje Corporativo 2025
          </span>
        </div>

        {/* TÍTULO DE IMPACTO */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tighter drop-shadow-2xl animate-fade-in-up [animation-delay:200ms]">
          ¿Listo para elevar el <br/> 
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-[#00AEEF]/20 blur-2xl rounded-full transform scale-x-110"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-white animate-gradient-x bg-[length:200%_auto]">
              estándar de seguridad?
            </span>
          </span>
        </h2>
        
        {/* TEXTO */}
        <p className="text-xl md:text-2xl text-blue-100/80 mb-16 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Únete a los corporativos que ya toman decisiones de contratación más rápidas y seguras con la infraestructura de Insignia 360.
        </p>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up [animation-delay:600ms] w-full">
          
          <Link href="/demo" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00AEEF] to-cyan-400 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
            <button className="relative w-full sm:w-auto bg-[#001a4d] text-white font-bold text-lg px-14 py-5 rounded-full flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] transition-all border border-white/10">
               Solicitar Auditoría Gratuita
               <ChevronRight size={22} className="text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <div className="flex flex-col items-center sm:items-start gap-2 group cursor-default pl-4 md:border-l border-white/10">
             <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:text-[#00AEEF] transition-colors">
               <Zap size={16} className="text-[#00AEEF] fill-current" /> Respuesta en 24h
             </div>
             <p className="text-slate-400 text-[10px] font-medium uppercase tracking-tighter">
               Sin compromiso. Auditoría 100% digital.
             </p>
          </div>
        </div>
      </div>

      {/* DETALLE INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent shadow-[0_0_20px_rgba(0,174,239,0.5)]" />
    </section>
  );
}