'use client';
import React from 'react';
import { Fingerprint, Home, ShieldCheck, Zap } from 'lucide-react';

export default function SpecializedModules() {
  const modules = [
    { 
      id: "MOD-A1",
      title: "Validación Biométrica", 
      desc: "Seguridad de identidad con IA. Garantizamos que el candidato es quien dice ser mediante reconocimiento facial.",
      icon: <Fingerprint size={32} />,
      badge: "Inteligencia Digital"
    },
    { 
      id: "MOD-B2",
      title: "Validación de Entorno", 
      desc: "Verificación presencial y digital del entorno del candidato para roles de alta sensibilidad y manejo de activos.",
      icon: <Home size={32} />,
      badge: "Certeza Operativa"
    }
  ];

  return (
    // Fondo azul corporativo con patrón sutil
    <section className="py-24 bg-insignia-blue px-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 rounded-r-[10rem] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-tech-accent/5 rounded-l-[10rem] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado: Tipografía Montserrat limpia y centrada */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-tech-accent/10 text-tech-accent rounded-full mb-6 border border-tech-accent/20">
            <ShieldCheck size={14} />
            <span className="font-bold uppercase tracking-widest text-[10px]">Consultoría Especializada</span>
          </div>
          <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Módulos de <br />
            <span className="text-tech-accent">Precisión Técnica</span>
          </h3>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Soluciones diseñadas para mitigar riesgos críticos en la contratación de perfiles de alto nivel.
          </p>
        </div>

        {/* Grid de Módulos: Tarjetas blancas con sombra suave y acento cian */}
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <div key={i} className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100">
              
              {/* ID Técnico sutil */}
              <span className="absolute top-6 right-8 text-slate-300 font-bold text-xs tracking-widest uppercase group-hover:text-tech-accent transition-colors">
                {m.id}
              </span>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Icono: Fondo cian suave */}
                <div className="p-4 bg-tech-accent/10 rounded-2xl text-tech-accent group-hover:bg-tech-accent group-hover:text-white transition-all duration-300 shrink-0">
                  {m.icon}
                </div>
                
                <div>
                  {/* Título: Montserrat Bold en Azul Insignia */}
                  <h4 className="text-insignia-blue font-bold text-2xl mb-4 leading-tight">
                    {m.title}
                  </h4>
                  
                  {/* Descripción: Limpia y legible */}
                  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                    {m.desc}
                  </p>
                  
                  {/* Badge de Estatus */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
                    <Zap size={12} className="text-tech-accent" /> {m.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Certificación: Limpio y en el pie */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50">
          <div className="flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-widest">
            <Zap size={16} /> Procesamiento Seguro
          </div>
          <div className="flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-widest">
            <ShieldCheck size={16} /> Cumplimiento Legal 2025
          </div>
        </div>
      </div>
    </section>
  );
}