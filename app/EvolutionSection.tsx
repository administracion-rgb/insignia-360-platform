'use client';
import React from 'react';
import { Zap, Clock, ShieldCheck, Search, XCircle, CheckCircle2 } from 'lucide-react';

export default function EvolutionSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden selection:bg-tech-accent/30">
      {/* 1. FONDO DECORATIVO SUTIL */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tech-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-insignia-blue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO: Título claro y directo */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-insignia-blue mb-6 tracking-tight">
            La Evolución del <span className="text-tech-accent">Blindaje</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Deje atrás la incertidumbre. Compare y descubra por qué la validación digital es el nuevo estándar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* TARJETA IZQUIERDA: Método Tradicional (El Problema) */}
          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-200 shadow-xl flex flex-col relative group">
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <XCircle size={40} className="text-red-300" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-400 mb-10 flex items-center gap-3">
              Método Tradicional
            </h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-red-50 text-red-400 rounded-lg shrink-0 group-hover:bg-red-100 transition-colors">
                   <Clock size={20} />
                </div>
                <div>
                  <p className="text-slate-600 font-bold text-sm uppercase tracking-wider">3-5 Días de Espera</p>
                  <p className="text-slate-400 text-xs mt-1 font-medium">Burocracia y tiempos muertos operativos.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-red-50 text-red-400 rounded-lg shrink-0 group-hover:bg-red-100 transition-colors">
                   <Search size={20} />
                </div>
                <div>
                  <p className="text-slate-600 font-bold text-sm uppercase tracking-wider">Entrevistas Subjetivas</p>
                  <p className="text-slate-400 text-xs mt-1 font-medium">Resultados vulnerables a sesgos humanos.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* TARJETA DERECHA: Insignia 360 (La Solución - Estilo Cyber) */}
          <div className="relative p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,38,117,0.4)] flex flex-col overflow-hidden text-white group transition-transform hover:-translate-y-2 border border-white/10 bg-insignia-blue">
            
            {/* Fondo Cyber-Tech integrado */}
            <div className="absolute inset-0 bg-gradient-to-br from-insignia-blue to-[#001a4d] z-0" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 z-0 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-tech-accent/30 rounded-full blur-[80px] z-0" />

            <div className="absolute top-6 right-6 text-tech-accent animate-pulse">
                <CheckCircle2 size={40} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3 relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Insignia 360 Digital</span>
            </h3>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-tech-accent/10 text-tech-accent rounded-xl shrink-0 border border-tech-accent/30 shadow-[0_0_15px_rgba(0,174,239,0.2)] backdrop-blur-md">
                   <Zap size={20} className="fill-current" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-[0.2em] drop-shadow-md">Tiempo Real / 24 Horas</p>
                  <p className="text-blue-100/70 text-xs mt-1 font-medium italic">Agilidad crítica para puestos de alta demanda.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-tech-accent/10 text-tech-accent rounded-xl shrink-0 border border-tech-accent/30 shadow-[0_0_15px_rgba(0,174,239,0.2)] backdrop-blur-md">
                   <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-[0.2em] drop-shadow-md">IA & Big Data Validation</p>
                  <p className="text-blue-100/70 text-xs mt-1 font-medium italic">Precisión científica del 99.8% sin sesgos.</p>
                </div>
              </li>
            </ul>

            <div className="mt-auto pt-10 relative z-10 border-t border-white/10">
               <p className="text-center text-tech-accent font-bold text-xs uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(0,174,239,0.5)]">
                 Ahorro Operativo del 40%
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}