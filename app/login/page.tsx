'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Mail, ArrowRight, 
  Eye, EyeOff, AlertCircle 
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // --- LÓGICA DE REDIRECCIÓN CORREGIDA ---
    setTimeout(() => {
      if (!formData.email.includes('@')) {
        setError('Por favor ingresa un correo válido.');
        setIsLoading(false);
        return;
      }

      // IMPORTANTE: Ahora todos van a /dashboard para evitar el error 404
      // Guardamos en el log para saber qué perfil se detectó
      if (formData.email.includes('admin')) {
         console.log("Acceso como ADMINISTRADOR");
      } else {
         console.log("Acceso como CLIENTE");
      }
      
      router.push('/dashboard'); 
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#001233] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#003399_0%,transparent_70%)] opacity-40" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="p-3 bg-[#00AEEF] rounded-xl shadow-[0_0_30px_rgba(0,174,239,0.4)]">
              <ShieldCheck className="text-[#001233]" size={32} />
            </div>
            <span className="text-white font-black text-2xl tracking-tight uppercase italic">
              Insignia<span className="text-[#00AEEF]">360</span>
            </span>
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white uppercase italic tracking-wide mb-2">Portal Único</h2>
            <p className="text-blue-100/60 text-sm font-medium">Ingresa tus credenciales</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-3">Usuario</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="email" required value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#001233]/50 border border-white/10 text-white rounded-xl py-3.5 pl-11 pr-4 focus:border-[#00AEEF]/50 outline-none transition-all"
                  placeholder="admin@insignia.com o cliente@test.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-3">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} required value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-[#001233]/50 border border-white/10 text-white rounded-xl py-3.5 pl-11 pr-12 focus:border-[#00AEEF]/50 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-xs font-bold">
                <AlertCircle size={14} /> {error}
              </div>
            )}

            <button type="submit" disabled={isLoading} className="w-full bg-[#00AEEF] hover:bg-white text-[#001233] font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)] flex items-center justify-center gap-2 disabled:opacity-50">
              {isLoading ? 'Cargando...' : 'Entrar al Panel'} <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}