'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { 
  ShieldCheck, User, Mail, Building2, Phone, 
  ArrowRight, CheckCircle2, Lock 
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Importaciones estructurales
import Navbar from '@/components/ui/Navbar'; 
import Footer from '../Footer'; 

// --- COMPONENTE INTERNO DEL FORMULARIO (Aquí usamos useSearchParams) ---
function RegistrationForm() {
  const searchParams = useSearchParams();
  const planSeleccionado = searchParams.get('plan') || 'Registro General';
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registrando usuario para:", planSeleccionado, formData);
    // Aquí iría la lógica de conexión con Supabase
  };

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-2xl mx-auto relative overflow-hidden">
      
      {/* Etiqueta del Plan */}
      <div className="absolute top-0 right-0 bg-[#00AEEF] text-[#001233] px-6 py-2 rounded-bl-2xl font-black uppercase text-xs tracking-widest shadow-lg">
        {planSeleccionado}
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-black text-white italic uppercase tracking-tight mb-2">Alta de Cuenta</h2>
        <p className="text-blue-100/60 text-sm font-medium">Complete sus datos corporativos para iniciar.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-3">Nombre Completo</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#001233]/50 border border-white/10 text-white rounded-xl py-3.5 pl-11 pr-4 focus:border-[#00AEEF]/50 outline-none transition-all uppercase placeholder:text-white/20"
                placeholder="Ej. Roberto Sánchez"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-3">Empresa</label>
            <div className="relative group">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" required
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-[#001233]/50 border border-white/10 text-white rounded-xl py-3.5 pl-11 pr-4 focus:border-[#00AEEF]/50 outline-none transition-all uppercase placeholder:text-white/20"
                placeholder="Razón Social"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-3">Correo Corporativo</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="email" required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#001233]/50 border border-white/10 text-white rounded-xl py-3.5 pl-11 pr-4 focus:border-[#00AEEF]/50 outline-none transition-all placeholder:text-white/20"
                placeholder="contacto@empresa.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-3">Teléfono</label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="tel" required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-[#001233]/50 border border-white/10 text-white rounded-xl py-3.5 pl-11 pr-4 focus:border-[#00AEEF]/50 outline-none transition-all placeholder:text-white/20"
                placeholder="55 1234 5678"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-3">Contraseña Maestra</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="password" required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full bg-[#001233]/50 border border-white/10 text-white rounded-xl py-3.5 pl-11 pr-4 focus:border-[#00AEEF]/50 outline-none transition-all placeholder:text-white/20"
              placeholder="••••••••••••"
            />
          </div>
        </div>

        <button type="submit" className="w-full bg-[#00AEEF] hover:bg-white text-[#001233] font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)] flex items-center justify-center gap-2 mt-6">
          Crear Cuenta Empresarial <ArrowRight size={18} />
        </button>
        
        <p className="text-center text-[10px] text-white/30 font-bold uppercase tracking-widest mt-4">
          Al registrarte aceptas nuestros términos de servicio y privacidad.
        </p>
      </form>
    </div>
  );
}

// --- PÁGINA PRINCIPAL (Export Default) ---
export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#001233] selection:bg-[#00AEEF]/30 selection:text-white font-sans antialiased">
      <Navbar />

      <section className="relative pt-44 pb-20 px-4 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b from-[#001a4d] to-[#001233]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />
        </div>

        <div className="relative z-10 w-full">
          {/* AQUÍ ESTÁ LA SOLUCIÓN: Suspense envuelve al componente que lee los params */}
          <Suspense fallback={
            <div className="text-center py-20">
               <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#00AEEF] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
               <p className="text-[#00AEEF] font-bold mt-4 uppercase tracking-widest text-xs">Cargando formulario...</p>
            </div>
          }>
            <RegistrationForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}