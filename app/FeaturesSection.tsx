'use client';
import React from 'react';
import { Shield, Lock, Eye, FileCheck, Database, Server, CheckCircle2 } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { icon: Shield, title: "Validación de Identidad", desc: "Verificación biométrica y gubernamental de alta precisión para mitigar suplantaciones." },
    { icon: Database, title: "Antecedentes Legales", desc: "Búsqueda exhaustiva en boletines judiciales y registros nacionales en tiempo real." },
    { icon: Eye, title: "Análisis Predictivo", desc: "Evaluación de comportamiento y riesgos mediante modelos de inteligencia artificial avanzada." },
    { icon: FileCheck, title: "Referencias Laborales", desc: "Validación profesional directa con empleadores previos para confirmar trayectoria." },
    { icon: Lock, title: "Seguridad Bancaria", desc: "Datos protegidos con encriptación de grado militar y los más altos estándares bancarios." },
    { icon: Server, title: "Entrega en Tiempo Real", desc: "Generación de reportes técnicos en minutos para la toma de decisiones ágiles." },
  ];

  return (
    <section className="py-24 px-6 bg-insignia-blue relative overflow-hidden selection:bg-tech-accent/30">
      
      {/* 1. FONDO CYBER-CORPORATE (La Receta Secreta) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Gradiente profundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00181f] via-insignia-blue to-[#00181f]" />
        
        {/* Rejilla Tecnológica */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Focos de luz ambiental */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tech-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tech-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO: Estilo Dark Mode */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 text-tech-secondary rounded-full mb-6 border border-white/10 backdrop-blur-md animate-fade-in-up">
            <CheckCircle2 size={14} className="text-tech-accent" />
            <span className="font-bold uppercase tracking-widest text-[10px]">Infraestructura de Seguridad</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms]">
            Características del <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-accent to-tech-secondary">Blindaje 360</span>
          </h2>
          
          <p className="text-slate-400 font-medium text-lg leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            Nuestra plataforma integra múltiples capas de validación tecnológica para asegurar la integridad de su capital humano.
          </p>
        </div>

        {/* GRID DE CARACTERÍSTICAS: Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-tech-accent/30 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }} // Efecto cascada
            >
              <div className="flex flex-col items-start gap-8">
                
                {/* ICONO: Brillante sobre oscuro */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-tech-accent group-hover:text-white group-hover:bg-tech-accent transition-all duration-500 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                  <item.icon className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-white font-bold text-xl mb-4 tracking-tight group-hover:text-tech-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}