'use client';
import React from 'react';
import { BrainCircuit, Scale, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden bg-insignia-blue">
      
      {/* 1. ATMÓSFERA DE PROFUNDIDAD: Blurs en Cian y Blanco */}
      <div className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-tech-accent/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-20 z-10">
        
        {/* --- COLUMNA IZQUIERDA: Propuesta de Valor --- */}
        <div className="flex-1 w-full text-center lg:text-left space-y-10">
          
          {/* Badge de Protocolo: Estilo Blue Tech */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-tech-accent animate-pulse shadow-[0_0_10px_#00AEEF]"></span>
            <span className="text-white/80 text-[10px] font-bold tracking-[0.3em] uppercase">
              Ecosistema de Validación Dual
            </span>
          </div>

          {/* TÍTULO: Montserrat Bold y Acento Cian */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            Psicometría <br />
            <span className="text-tech-accent"> & </span> <br />
            Blindaje Legal
          </h1>

          {/* Narrativa de Consultoría Dinámica */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 border-l-4 border-tech-accent/30 pl-8">
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed">
              Dos soluciones potentes en una sola infraestructura digital. <br className="hidden sm:block"/>
              Gestione <span className="text-white">Tests Psicométricos</span> o <span className="text-white">Background Checks</span> de forma independiente.
            </p>
            <div className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest">
              <Zap size={16} className="text-tech-accent" /> Activa el Reporte Fusión 360°
            </div>
          </div>

          {/* BOTONES PÍLDORA: Estilo BlueHome */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
            <button className="btn-pill-primary px-12 py-5 shadow-[0_10px_40px_rgba(0,174,239,0.3)]">
              Explorar Soluciones <ArrowRight size={18} />
            </button>
            
            <button className="px-12 py-5 rounded-full border-2 border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-all">
               Cotizar Proyectos
            </button>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: Tarjetas de Datos Limpias --- */}
        <div className="flex-1 w-full max-w-[550px] relative h-[550px] hidden lg:block">
            
            {/* Tarjeta 1: INTELIGENCIA (Módulo A) */}
            <div className="bg-white p-8 rounded-[2.5rem] absolute top-0 left-0 z-20 w-80 shadow-2xl shadow-insignia-blue/30 border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-tech-accent/10 rounded-2xl text-tech-accent">
                        <BrainCircuit size={28}/>
                    </div>
                    <div>
                        <h3 className="text-insignia-blue font-bold text-xl tracking-tight">Módulo A</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Inteligencia</p>
                    </div>
                </div>
                <div className="space-y-5">
                    {[
                      { label: "Liderazgo", val: "85%", color: "bg-tech-accent" },
                      { label: "Honestidad", val: "98%", color: "bg-insignia-blue" }
                    ].map((bar, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wide">
                          <span>{bar.label}</span> <span>{bar.val}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${bar.color} rounded-full transition-all duration-1000`} style={{ width: bar.val }}></div>
                        </div>
                      </div>
                    ))}
                </div>
            </div>

            {/* Tarjeta 2: BLINDAJE (Módulo B) */}
            <div className="bg-white p-8 rounded-[2.5rem] absolute bottom-10 right-0 z-30 w-80 shadow-2xl shadow-insignia-blue/30 border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-insignia-blue/5 rounded-2xl text-insignia-blue">
                        <Scale size={28}/>
                    </div>
                    <div>
                        <h3 className="text-insignia-blue font-bold text-xl tracking-tight">Módulo B</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Blindaje BGC</p>
                    </div>
                </div>
                <div className="space-y-4">
                    {[
                      { label: "Judicial", status: "LIMPIO" },
                      { label: "Historial", status: "0 MATCH" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <span className="text-[11px] text-slate-600 font-bold uppercase">{item.label}</span> 
                        <span className="text-tech-accent font-bold text-[10px] bg-tech-accent/10 px-3 py-1 rounded-full">{item.status}</span>
                      </div>
                    ))}
                </div>
            </div>

            {/* Círculo Central: LA FUSIÓN */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/5 rounded-full flex items-center justify-center z-0">
                <div className="absolute inset-0 bg-tech-accent/5 rounded-full blur-[100px] opacity-40"></div>
                <div className="text-center opacity-20 group">
                    <ShieldCheck size={80} className="text-white mx-auto mb-4 group-hover:text-tech-accent transition-colors" />
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white font-bold leading-relaxed">
                      Protocolo <br/> Integrado 360°
                    </p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}