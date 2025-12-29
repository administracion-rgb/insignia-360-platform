'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Planes', href: '/planes' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Nosotros', href: '/nosotros' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#001233]/90 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. LOGO */}
          <Link href="/" className="flex items-center gap-2 group shrink-0 relative z-50">
            <div className="p-2 bg-[#00AEEF] rounded-lg group-hover:shadow-[0_0_20px_rgba(0,174,239,0.5)] transition-all">
              <ShieldCheck className="text-[#001233]" size={24} />
            </div>
            <span className="text-white font-black text-xl tracking-tight uppercase italic hidden sm:block">
              Insignia<span className="text-[#00AEEF]">360</span>
            </span>
          </Link>

          {/* 2. MENÚ DE ESCRITORIO */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-xs xl:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group hover:text-white ${
                    isActive ? 'text-[#00AEEF]' : 'text-white/60'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00AEEF] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}

            {/* BOTÓN DE INGRESO ÚNICO (Simplificado) */}
            <Link href="/login">
              <button className="flex items-center gap-2 text-xs xl:text-sm font-bold uppercase tracking-widest text-white hover:text-[#00AEEF] transition-colors border border-white/20 px-6 py-2 rounded-full hover:border-[#00AEEF]/50 group">
                <User size={16} className="text-[#00AEEF] group-hover:text-white transition-colors" />
                Ingresar
              </button>
            </Link>
          </div>

          {/* 3. BOTÓN CONTACTO */}
          <div className="hidden lg:block shrink-0 ml-4">
            <Link href="/contacto">
              <button className="bg-white text-[#001233] px-6 py-2.5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#00AEEF] hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95">
                Contactar
              </button>
            </Link>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <button 
            className="lg:hidden text-white hover:text-[#00AEEF] transition-colors relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL (Simplificado) */}
      <div className={`fixed inset-0 bg-[#001233]/95 backdrop-blur-xl z-40 transition-transform duration-300 lg:hidden flex flex-col justify-center items-center gap-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-black uppercase tracking-widest ${
              pathname === link.href ? 'text-[#00AEEF]' : 'text-white hover:text-[#00AEEF]'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="w-20 h-px bg-white/20 my-4" />

        <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3 w-full max-w-xs py-3 rounded-xl border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/5">
           <User size={16} className="text-[#00AEEF]" /> Ingreso Usuarios
        </Link>

        <Link href="/contacto" onClick={() => setIsOpen(false)}>
          <button className="mt-4 bg-[#00AEEF] text-[#001233] px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest shadow-xl w-full max-w-xs">
            Contactar Experto
          </button>
        </Link>
      </div>
    </nav>
  );
}