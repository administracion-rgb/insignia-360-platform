'use client';
import React from 'react';
import { Check, Target, Users, ShieldCheck, ChevronRight, MousePointerClick, Star, Layers, Brain } from 'lucide-react';

export default function CatalogDetails() {
  // CONFIGURACIÓN DE 4 TARJETAS: Enfoque en combinaciones y jerarquía solicitada
  const profiles = [
    {
      title: "Prueba Individual",
      icon: <MousePointerClick size={24} />,
      desc: "Compra unitaria para validación puntual de conocimientos o rasgos específicos de personal operativo y staff.",
      tests: ["IQ: Barsit o Beta III", "Conducta: Cleaver o DISC", "Integridad: Honestidad", "Valores: Zavic o IPV"],
      color: "bg-blue-50 text-insignia-blue",
      tag: "Evaluación Única"
    },
    {
      title: "Batería Operativa",
      icon: <Users size={24} />,
      desc: "Diagnóstico 360° para operarios y staff. Mide agilidad mental, reacción bajo presión y confiabilidad técnica.",
      tests: ["Combo A: Barsit + Cleaver", "Combo B: Beta III + DISC", "Add-on Honestidad Incl.", "Reporte Ejecutivo"],
      color: "bg-cyan-50 text-tech-accent",
      tag: "Staff y Campo"
    },
    {
      title: "Batería Premium",
      icon: <Star size={24} />,
      desc: "Evaluación de élite para mandos medios y gerencia. Analiza toma de decisiones estratégica y capacidad de mando.",
      tests: ["Liderazgo: Moss o LIFO", "IQ: Terman Merrill", "Personalidad: 16PF o Gordon", "Efectividad: Reddin"],
      color: "bg-indigo-50 text-indigo-600",
      tag: "Gerencia y TI",
      highlight: true
    },
    {
      title: "Módulo Honestidad",
      icon: <ShieldCheck size={24} />,
      desc: "Blindaje ético profundo para puestos de confianza. Analiza apego a normas y mitigación de riesgos patrimoniales.",
      tests: ["Escala de Sinceridad", "Detección de Riesgos", "Valores Corporativos", "Blindaje ético 360°"],
      color: "bg-slate-100 text-insignia-blue",
      tag: "Puestos de Confianza"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden selection:bg-tech-accent/30">
      {/* Elementos decorativos de fondo estilo Blue Tech */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-tech-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-insignia-blue/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado: Montserrat Bold y Acento Cian */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-insignia-blue/5 text-insignia-blue rounded-full mb-6 border border-insignia-blue/10">
             <ShieldCheck size={14} className="text-tech-accent" />
             <span className="font-bold uppercase tracking-widest text-[10px]">Protocolo A: Inteligencia Psicométrica</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-insignia-blue mb-6 tracking-tight leading-tight">
            Diccionario de <span className="text-tech-accent">Combinaciones</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Ofrecemos múltiples configuraciones para cada nivel jerárquico, permitiéndole elegir la batería que mejor se adapte a su perfil de puesto.
          </p>
        </div>

        {/* Grid de Perfiles: Tarjetas reestructuradas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className={`bg-white p-8 rounded-[2rem] border ${profile.highlight ? 'border-tech-accent shadow-2xl shadow-tech-accent/20' : 'border-slate-100 shadow-xl shadow-slate-200/50'} flex flex-col group hover:shadow-2xl hover:shadow-tech-accent/10 hover:-translate-y-2 transition-all duration-300 relative`}>
              
              {profile.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tech-accent text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Recomendado para TI
                </div>
              )}

              {/* Icono con fondo dinámico */}
              <div className={`w-14 h-14 ${profile.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-tech-accent group-hover:text-white transition-all duration-500`}>
                {profile.icon}
              </div>
              
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-tech-accent mb-2">{profile.tag}</p>
              <h3 className="text-xl font-bold text-insignia-blue mb-4 tracking-tight italic uppercase">
                {profile.title}
              </h3>
              
              <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium min-h-[4rem]">
                {profile.desc}
              </p>
              
              <div className="text-[10px] font-bold text-insignia-blue/40 uppercase tracking-widest mb-4">Configuraciones Sugeridas:</div>
              <ul className="space-y-4 mb-10 flex-grow pt-6 border-t border-slate-50">
                {profile.tests.map((test, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-tech-accent shrink-0 mt-0.5" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{test}</span>
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center justify-between w-full group/btn text-[11px] font-bold uppercase tracking-widest text-insignia-blue hover:text-tech-accent transition-colors">
                Ver Ficha Técnica <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Banner de Paquete Personalizado (Restaurado) */}
        <div className="mt-24 p-10 bg-insignia-blue rounded-[2.5rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-insignia-blue/20 text-white relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tech-accent/20 rounded-full blur-3xl" />
          <div className="max-w-xl relative z-10">
             <h4 className="text-2xl font-bold mb-2 tracking-tight uppercase italic">¿Necesita un paquete a la medida?</h4>
             <p className="text-sm font-medium text-white/70">Configuramos la batería de pruebas exacta mezclando los tests necesarios según la criticidad de sus vacantes.</p>
          </div>
          <button className="relative z-10 px-12 py-5 bg-tech-accent hover:bg-white hover:text-insignia-blue text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(0,174,239,0.3)] transition-all active:scale-95">
             Consultar con un Experto
          </button>
        </div>

      </div>
    </section>
  );
}