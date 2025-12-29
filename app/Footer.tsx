'use client';
import { Shield, Linkedin, Globe, Mail, Phone, ArrowUpRight, CheckCircle2, Users, FileText, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    // FONDO: #001233 para continuidad perfecta con FinalCTA
    <footer className="bg-[#001233] pt-32 pb-12 px-6 text-white border-t border-white/5 relative overflow-hidden">
      
      {/* ==================== CAPA 1: ATMÓSFERA DE FONDO ==================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tech-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#000a1f] to-transparent opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 relative z-10">
        
        {/* COLUMNA 1: IDENTIDAD (4 columnas de ancho) */}
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-3 mb-8 group w-fit">
            <div className="bg-gradient-to-br from-tech-accent to-tech-secondary p-2.5 rounded-xl shadow-lg shadow-tech-accent/20 group-hover:shadow-tech-accent/40 transition-all duration-300 group-hover:scale-105">
               <Shield size={28} className="text-[#001233] fill-current" />
            </div>
            <span className="text-white font-black text-3xl tracking-tight">
              Insignia<span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-accent to-tech-secondary">360</span>
            </span>
          </Link>
          
          {/* Texto adaptado de tu imagen: Solución completa en gestión */}
          <p className="text-blue-100/70 leading-relaxed mb-10 font-medium text-lg">
            No solo ofrecemos selección de personal, sino una <span className="text-white font-bold">solución completa en gestión de talento humano</span>. Calidad reflejada en cada etapa del proceso.
          </p>
          
          <div className="flex gap-4">
            {[
              { icon: <Linkedin size={20} />, href: "#" },
              { icon: <Globe size={20} />, href: "https://insigniasoluciones.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-tech-accent hover:text-[#001233] transition-all duration-300 border border-white/10 group shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMNA 2: SERVICIOS PRINCIPALES (Adaptado a tus imágenes) (5 columnas de ancho) */}
        <div className="md:col-span-5">
          <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-3">
            <Briefcase size={18} className="text-tech-secondary" /> Soluciones en Capital Humano
          </h4>
          
          {/* Lista de servicios a doble columna para aprovechar espacio */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-blue-100/60 font-medium text-sm">
            {[
              { name: "Estudios Socioeconómicos", href: "/servicios/ese" },
              { name: "Headhunting & Executive Search", href: "/servicios/headhunting" },
              { name: "Reclutamiento y Selección", href: "/servicios/reclutamiento" },
              { name: "Pruebas Psicométricas", href: "/servicios/psicometria" },
              { name: "Consultoría en RR.HH.", href: "/servicios/consultoria" },
              { name: "Marketing de Recursos Humanos", href: "/servicios/marketing-rh" },
              { name: "Formación y Desarrollo", href: "/servicios/capacitacion" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-tech-accent flex items-start gap-2 group transition-all duration-300">
                  <ArrowUpRight size={14} className="mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-tech-secondary" />
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA 3: CONTACTO (3 columnas de ancho) */}
        <div className="md:col-span-3">
          <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-3">
            <Users size={18} className="text-tech-accent" /> Contacto
          </h4>
          <ul className="space-y-4">
            <li className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-tech-accent/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="p-2.5 bg-[#001233] rounded-lg text-tech-accent group-hover:scale-110 transition-transform"><Phone size={18} /></div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1 group-hover:text-tech-accent transition-colors">Atención Clientes</p>
                  <span className="text-white font-bold text-sm tracking-wide">+52 (55) 1234-5678</span>
                </div>
            </li>
            <li className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-tech-secondary/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="p-2.5 bg-[#001233] rounded-lg text-tech-secondary group-hover:scale-110 transition-transform"><Mail size={18} /></div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1 group-hover:text-tech-secondary transition-colors">Correo Oficial</p>
                  <span className="text-white font-bold text-sm tracking-wide">contacto@insignia360.com</span>
                </div>
            </li>
          </ul>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] font-bold uppercase tracking-widest relative z-10">
        <p className="hover:text-white transition-colors cursor-default">© 2025 Insignia Soluciones Integrales.</p>
        <div className="flex gap-8">
            <Link href="/privacidad" className="hover:text-tech-accent transition-colors">Aviso de Privacidad</Link>
            <Link href="/terminos" className="hover:text-tech-accent transition-colors">Términos de Servicio</Link>
        </div>
      </div>
      
      {/* Detalle final: Línea de gradiente inferior */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tech-accent via-tech-secondary to-tech-accent opacity-50" />
    </footer>
  );
}