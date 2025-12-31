'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, Check, 
  Building2, User, Loader2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Para navegar

export default function LoginPage() {
  const router = useRouter();
  
  // ESTADOS
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(''); // Estado de error

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

  // --- LÓGICA DE AUTENTICACIÓN (FORMULARIO) ---
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // 1. Validación simple
    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos requeridos.');
      setIsLoading(false);
      return;
    }

    if (!isLogin && (!formData.name || !formData.company)) {
      setError('Nombre y Empresa son obligatorios para el registro.');
      setIsLoading(false);
      return;
    }

    // 2. Simulación de Red (Aquí conectarías Supabase después)
    console.log(isLogin ? "Iniciando sesión..." : "Registrando usuario...", formData);

    setTimeout(() => {
      // 3. Redirección al Dashboard
      // (Podemos guardar un flag en localStorage si queremos persistencia básica)
      localStorage.setItem('userRole', formData.email.includes('admin') ? 'SUPERADMIN' : 'CLIENTE');
      router.push('/dashboard');
    }, 1500); // 1.5 segundos de espera para efecto realista
  };

  // --- LÓGICA DE AUTENTICACIÓN (SOCIAL) ---
  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    console.log(`Conectando con ${provider}...`);
    
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
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

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{isLogin ? 'Bienvenido de nuevo' : 'Comienza tu prueba'}</h2>
            <p className="text-slate-500 text-sm">{isLogin ? 'Ingresa tus credenciales para acceder al panel.' : 'Únete a las empresas líderes en seguridad laboral.'}</p>
          </div>

          {/* Botones Social */}
          <div className="grid grid-cols-2 gap-4">
             <button disabled={isLoading} onClick={() => handleSocialLogin('Google')} className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-sm font-bold text-slate-600 disabled:opacity-50">
               <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
               Google
             </button>
             <button disabled={isLoading} onClick={() => handleSocialLogin('Microsoft')} className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-sm font-bold text-slate-600 disabled:opacity-50">
               <svg className="w-5 h-5" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"/><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>
               Microsoft
             </button>
          </div>

          <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold tracking-widest">O continúa con email</span></div></div>

          {/* Formulario */}
          <form onSubmit={handleEmailAuth} className="space-y-5">
            {!isLogin && (
               <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
                 <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nombre</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:bg-white transition-all" placeholder="Tu nombre" onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
                 <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Empresa</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:bg-white transition-all" placeholder="Razón Social" onChange={(e) => setFormData({...formData, company: e.target.value})} /></div>
               </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-11 py-3.5 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/5 focus:bg-white transition-all placeholder:text-slate-400" placeholder="nombre@empresa.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                 <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contraseña</label>
                 {isLogin && <a href="#" className="text-[10px] font-bold text-[#00AEEF] hover:underline">¿Olvidaste tu contraseña?</a>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type={showPassword ? "text" : "password"} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-11 py-3.5 text-sm font-bold text-slate-800 outline-none focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/5 focus:bg-white transition-all placeholder:text-slate-400" placeholder="••••••••" onChange={(e) => setFormData({...formData, password: e.target.value})} />
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