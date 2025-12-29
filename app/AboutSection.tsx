'use client';
import React from 'react';
import { ShieldCheck, ArrowRight, Award, Fingerprint, Brain, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  // Valores técnicos actualizados con el estilo visual del proyecto
  const values = [
    { 
      icon: <Brain size={28} />, 
      title: "Inteligencia Predictiva", 
      desc: "Modelos psicométricos avanzados que aseguran el ajuste cultural y el desempeño operativo.",
      // Estilo Hover: Borde Cyan Brillante
      className: "hover:border-[#00AEEF]/50 hover:shadow-[0_0_30px_rgba(0,174,239,0.2)] group"
    },
    { 
      icon: <Fingerprint size={28} />, 
      title: "Certeza Biométrica", 
      desc: "Evolucionamos el estudio socioeconómico a validaciones de identidad digital y legal en tiempo real.",
      // Estilo Hover: Borde Teal (Secundario)
      className: "hover:border-[#2dd4bf]/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] group"
    },
    { 
      icon: <Zap size={28} />, 
      title: "Fusión 360°", 
      desc: "La integración definitiva de rastro legal, validación de entorno y perfil psicológico en un solo reporte.",
      // Estilo Hover: Borde Blanco Puro
      className: "hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#001233]">
      
      {/* 1. FONDO CYBER (Continuidad con el resto del sitio) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradiente de profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001233] via-[#001a4d] to-[#001233]" />
        
        {/* Rejilla sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO: Estilo High-Tech */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#00AEEF]/10 text-[#00AEEF] rounded-full mb-8 border border-[#00AEEF]/20 backdrop-blur-md">
            <Award size={16} />
            <span className="font-black uppercase tracking-[0.2em] text-[10px]">Consultoría de Nueva Generación</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-[0.9] tracking-tighter mb-6">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-white animate-gradient-x">Misión</span>
          </h2>
          <p className="text-blue-100/70 text-xl max-w-3xl mx-auto font-medium">
            Construir la infraestructura de confianza digital más sólida de LATAM.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* BLOQUE IZQUIERDO: Tarjeta Principal */}
          <div className="relative group">
             {/* Efecto de borde brillante animado */}
             <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00AEEF] via-[#2dd4bf] to-[#00AEEF] rounded-[2.6rem] blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
             
             <div className="relative bg-[#001a4d]/80 p-10 md:p-14 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl h-full flex flex-col justify-center">
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 rounded-full blur-[80px]" />

                <h3 className="text-4xl font-black text-white mb-8 leading-none tracking-tight uppercase italic">
                  Especialistas en <br />
                  <span className="text-[#00AEEF]">Protección del Capital Humano.</span>
                </h3>
                
                <p className="text-blue-100/70 font-medium text-lg leading-relaxed mb-12">
                  Somos una firma especializada en redefinir la seguridad corporativa. Fusionamos tecnología, psicología e inteligencia legal para asegurar que su empresa escale sin riesgos operativos ni patrimoniales.
                </p>
                
                {/* Botón */}
                <Link href="/nosotros" className="inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-xs hover:text-[#00AEEF] transition-colors group/btn">
                  <span className="border-b-2 border-[#00AEEF] pb-1">Conocer Metodología</span> 
                  <ArrowRight size={18} className="text-[#00AEEF] group-hover/btn:translate-x-2 transition-transform" />
                </Link>
             </div>
          </div>

          {/* BLOQUE DERECHO: Tarjetas de Cristal */}
          <div className="space-y-6">
            {values.map((val, i) => (
              <div key={i} className={`p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-sm flex items-start gap-6 transition-all duration-500 ${val.className}`}>
                
                {/* Icono Brillante */}
                <div className="p-5 rounded-2xl bg-[#001233] border border-white/10 shrink-0 text-[#00AEEF] shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:text-white group-hover:border-[#00AEEF]/50">
                  {val.icon}
                </div>
                
                <div>
                  <h4 className="text-2xl font-black text-white mb-2 tracking-tight uppercase italic group-hover:text-[#00AEEF] transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-sm font-medium text-blue-100/60 leading-relaxed group-hover:text-white/90 transition-colors">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}