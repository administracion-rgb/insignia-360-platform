'use client';
import { BrainCircuit, ShieldAlert, Check, ArrowRight, Activity, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-32 px-6 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Alto Impacto */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b0e14] text-white mb-6">
              <Activity size={12} className="text-[#e81c4f]" />
              <span className="font-black uppercase tracking-[0.4em] text-[9px]">Sistemas Operativos 2025</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-[#0b0e14] leading-[0.85]">
              Niveles de <br />
              <span className="text-[#e81c4f]">Blindaje Crítico</span>
            </h2>
          </div>
          <div className="md:text-right">
             <p className="text-gray-400 text-[10px] max-w-xs font-black uppercase tracking-[0.2em] leading-relaxed border-r-4 border-[#e81c4f] pr-6">
                Seleccione el protocolo de validación <br /> requerido para su unidad de negocio.
             </p>
          </div>
        </div>

        {/* Grilla de Módulos Técnicos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#0b0e14]/5 shadow-2xl">
          
          {/* --- MÓDULO A: PSICOMETRÍA --- */}
          <div className="bg-white p-12 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-gray-50 transition-all group flex flex-col relative overflow-hidden">
            <div className="mb-12">
              <div className="w-16 h-16 bg-[#0b0e14] flex items-center justify-center mb-8 group-hover:bg-[#e81c4f] transition-colors">
                <BrainCircuit className="text-white w-8 h-8" />
              </div>
              <p className="text-[#e81c4f] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Módulo A / IA Mental</p>
              <h3 className="text-3xl font-black italic uppercase text-[#0b0e14] mb-4 tracking-tighter leading-none">Psicometría <br/> Avanzada</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-bold uppercase tracking-tight">
                Evaluación técnica de comportamiento mediante algoritmos predictivos. Ideal para reclutamiento masivo.
              </p>
            </div>
            
            <div className="mt-auto">
              <Link href="/catalogo" className="flex items-center gap-3 text-[10px] font-black text-[#0b0e14] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                Explorar Catálogo <ArrowRight size={14} className="text-[#e81c4f]" />
              </Link>
            </div>
          </div>

          {/* --- NIVEL 360: EL PROTAGONISTA (NAVY & RED) --- */}
          <div className="bg-[#0b0e14] p-12 border-b lg:border-b-0 relative overflow-hidden flex flex-col group shadow-2xl z-10 md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#e81c4f]"></div>
            
            <div className="mb-12">
              <div className="w-16 h-16 bg-[#e81c4f] flex items-center justify-center mb-8">
                <ShieldAlert className="text-white w-8 h-8" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} className="text-[#e81c4f]" />
                <p className="text-[#e81c4f] text-[10px] font-black uppercase tracking-[0.3em]">Protocolo Integrado</p>
              </div>
              <h3 className="text-4xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none">Insignia <br/> Total 360°</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-bold uppercase tracking-tight">
                La solución definitiva. Fusión de investigación legal y profundidad psicológica en un solo reporte técnico.
              </p>
            </div>

            <div className="mt-auto">
              <div className="mb-8 p-4 bg-white/5 border-l-2 border-[#e81c4f]">
                <p className="text-[11px] text-[#e81c4f] font-black uppercase tracking-wider">Ahorro Directo del 40%</p>
              </div>
              <ul className="space-y-4 mb-10">
                {['Validación Biométrica', 'Cruce de Big Data', 'Certeza Legal'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[9px] text-white font-black uppercase tracking-[0.2em]">
                    <Check size={12} className="text-[#e81c4f]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-[#e81c4f] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#0b0e14] transition-all">
                Cotizar Protocolo 360°
              </button>
            </div>
          </div>

          {/* --- MÓDULO B: BACKGROUND CHECK --- */}
          <div className="bg-white p-12 hover:bg-gray-50 transition-all group flex flex-col relative overflow-hidden">
            <div className="mb-12">
              <div className="w-16 h-16 bg-[#0b0e14] flex items-center justify-center mb-8 group-hover:bg-[#e81c4f] transition-colors">
                <ShieldAlert className="text-white w-8 h-8" />
              </div>
              <p className="text-[#e81c4f] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Módulo B / BGC Legal</p>
              <h3 className="text-3xl font-black italic uppercase text-[#0b0e14] mb-4 tracking-tighter leading-none">Background <br/> Check</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-bold uppercase tracking-tight">
                Investigación masiva de antecedentes, listas negras y validación de entorno digital.
              </p>
            </div>
            
            <div className="mt-auto">
              <Link href="/background-check" className="flex items-center gap-3 text-[10px] font-black text-[#0b0e14] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                Ver Detalles BGC <ArrowRight size={14} className="text-[#e81c4f]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}