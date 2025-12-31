'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, Loader2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// CORRECCIÓN: Importamos desde la nueva librería moderna
import { createBrowserClient } from '@supabase/ssr';

export default function LoginPage() {
  const router = useRouter();
  
  // INICIALIZACIÓN CORRECTA DE SUPABASE (Versión Moderna)
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: ''
  });

  // --- DATOS DEL CARRUSEL ---
  const slides = [
    { title: "Validación de Confianza 360°", desc: "La plataforma líder en Latinoamérica para background checks y psicometría automatizada.", author: "Insignia Soluciones" },
    { title: "Toma decisiones basadas en datos", desc: "Reduce la rotación de personal hasta un 40% con nuestros filtros de integridad predictiva.", author: "Estadística 2024" },
    { title: "Cumplimiento Normativo Total", desc: "Todos nuestros procesos cumplen con la Ley Federal de Protección de Datos y normas STPS.", author: "Legal Compliance" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // --- LÓGICA DE AUTENTICACIÓN ---
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        // INICIAR SESIÓN
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        router.push('/dashboard');
      } else {
        // REGISTRARSE
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
              company: formData.company,
            },
          },
        });
        if (error) throw error;
        
        // Mensaje de éxito
        alert('Cuenta creada exitosamente. Bienvenido.');
        router.push('/dashboard');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Error de credenciales.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex font-sans bg-white">
      
      {/* COLUMNA IZQUIERDA (MARKETING) */}
      <div className="hidden lg:flex w-1/2 bg-[#001233] relative overflow-hidden flex-col justify-between p-12 text-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Office Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001233] via-[#001233]/80 to-transparent" />
        </div>
        <div className="relative z-10 flex items-center gap-2">
           <div className="w-8 h-8 bg-[#00AEEF] rounded-lg flex items-center justify-center font-black text-[#001233]">I</div>
           <span className="font-bold text-xl tracking-tight">INSIGNIA<span className="text-[#00AEEF]">360</span></span>
        </div>
        <div className="relative z-10 max-w-lg mb-10">
           <div className="transition-opacity duration-500 ease-in-out">
              <h2 className="text-4xl font-black italic uppercase leading-tight mb-4 tracking-tight">{slides[currentSlide].title}</h2>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-6">"{slides[currentSlide].desc}"</p>
              <div className="flex items-center gap-2"><div className="h-px w-8 bg-[#00AEEF]" /><span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">{slides[currentSlide].author}</span></div>
           </div>
           <div className="flex gap-2 mt-8">{slides.map((_, idx) => (<button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`} />))}</div>
        </div>
      </div>

      {/* COLUMNA DERECHA (FORMULARIO) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          
          <div className="lg:hidden flex justify-center mb-8"><span className="font-black text-2xl text-[#001233] italic uppercase">Insignia<span className="text-[#00AEEF]">360</span></span></div>

          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{isLogin ? 'Bienvenido de nuevo' : 'Comienza tu prueba'}</h2>
            <p className="text-slate-500 text-sm">{isLogin ? 'Ingresa tus credenciales corporativas.' : 'Únete a las empresas líderes en seguridad laboral.'}</p>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-5">
            {!isLogin && (
               <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
                 <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nombre</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:bg-white transition-all" placeholder="Tu nombre" onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
                 <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Empresa</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:bg-white transition-all" placeholder="Razón Social" onChange={(e) => setFormData({...formData, company: e.target.value})} /></div>
               </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Correo Corporativo</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-11 py-3.5 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/5 focus:bg-white transition-all placeholder:text-slate-400" placeholder="nombre@empresa.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                 <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contraseña</label>
                 {isLogin && <a href="#" className="text-[10px] font-bold text-[#00AEEF] hover:underline">¿Olvidaste tu contraseña?</a>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input required type={showPassword ? "text" : "password"} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-11 py-3.5 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/5 focus:bg-white transition-all placeholder:text-slate-400" placeholder="••••••••" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
              </div>
            </div>

            {error && <p className="text-xs font-bold text-red-500 bg-red-50 p-2 rounded-lg text-center">{error}</p>}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#001233] text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-[#00AEEF] hover:text-[#001233] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <><Loader2 size={16} className="animate-spin" /> Procesando...</>
              ) : (
                <>{isLogin ? 'Ingresar al Portal' : 'Crear Cuenta'} <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <div className="text-center pt-4">
             <p className="text-xs text-slate-500 font-medium">
               {isLogin ? '¿No tienes una cuenta corporativa?' : '¿Ya tienes cuenta?'} 
               <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="ml-2 text-[#00AEEF] font-black uppercase hover:underline">
                 {isLogin ? 'Solicitar Acceso' : 'Inicia Sesión'}
               </button>
             </p>
          </div>

        </div>
      </div>
    </div>
  );
}