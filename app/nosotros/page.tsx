'use client';
import React from 'react';
import { 
  Award, Target, Users, Zap, ShieldCheck, 
  ArrowRight, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

// --- CORRECCIÓN DE IMPORTACIONES ---
import Navbar from '@/components/ui/Navbar'; 
import Footer from '../Footer'; 
// -----------------------------------

export default function AboutPage() {
  
  const values = [
    { 
      icon: <Target size={32} />, 
      title: "Objetivo Claro", 
      desc: "Optimizar su desempeño e incrementar la rentabilidad mediante la disminución de riesgos operativos.",
      className: "hover:border-[#00AEEF]/50 hover:shadow-[0_0_30px_rgba(0,174,239,0.2)]"
    },
    { 
      icon: <Users size={32} />, 
      title: "Capital Humano", 
      desc: "Creemos que el primer paso para alcanzar algo es creer en ello. Potenciamos a las personas.",
      className: "hover:border-[#2dd4bf]/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]"
    },
    { 
      icon: <Zap size={32} />, 
      title: "Agilidad", 
      desc: "Diseñamos soluciones ágiles al alcance de su presupuesto, adaptadas a la realidad de su negocio.",
      className: "hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
    }
  ];

  return (
    <main className="min-h-screen bg-[#001233] selection:bg-[#00AEEF]/30 selection:text-white font-sans antialiased">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#003399_0%,transparent_60%)]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Award size={16} className="text-[#00AEEF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Nuestra Firma</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black italic uppercase text-white mb-8 tracking-tighter leading-[0.9]">
            Transformando <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">México</span>
          </h1>
          
          <p className="text-blue-100/70 text-xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Somos una consultoría empresarial joven y dinámica. Nacemos de la necesidad constante de soluciones integrales que permitan a nuestros clientes alcanzar sus objetivos.
          </p>
        </div>
      </section>

      {/* --- FILOSOFÍA (Cards Interactivas) --- */}
      <section className="py-24 px-6 bg-[#001a4d]/30 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className={`group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 relative overflow-hidden flex flex-col ${val.className}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/10 rounded-full blur-[50px] group-hover:bg-[#00AEEF]/20 transition-all" />
                
                <div className="relative z-10">
                  <div className="p-4 bg-[#001233] w-fit rounded-2xl text-[#00AEEF] mb-6 shadow-lg border border-white/5 group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">{val.title}</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CITA / MANIFIESTO --- */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Sparkles className="text-[#00AEEF] mx-auto mb-8 animate-pulse" size={40} />
          <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
            "Cualquier persona que deja de aprender es vieja, ya tenga 20 u 80 años. Cualquier persona que sigue aprendiendo se mantiene joven."
          </blockquote>
          <cite className="text-[#00AEEF] font-black uppercase tracking-widest not-italic text-sm">
            — Henry Ford
          </cite>
        </div>
      </section>

      {/* --- CTA FINAL: ¿POR QUÉ NOSOTROS? --- */}
      <section className="py-24 px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00AEEF] to-[#001233] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/10">
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply" />
          
          <div className="relative z-10 flex flex-col items-center">
            <ShieldCheck size={60} className="text-white mb-8" />
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
              ¿Por qué Nosotros?
            </h2>
            <p className="text-blue-100 text-lg font-medium mb-10 max-w-2xl leading-relaxed">
              Porque diseñamos e implementamos soluciones reales. No vendemos "paquetes", vendemos la tranquilidad de saber que su empresa está en manos expertas.
            </p>
            
            <Link href="/contacto">
              <button className="bg-white text-[#001233] px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-3">
                Empezar Ahora <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}