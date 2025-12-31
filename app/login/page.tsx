'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, 
  KeyRound, Phone, User, Building
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';

export default function LoginPage() {
  const router = useRouter();
  
  // Cliente de Supabase con detección de errores de entorno
  const supabase = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    // Si faltan las variables en Vercel, usamos placeholders para que no explote el build
    return createBrowserClient(
      url || 'https://placeholder.supabase.co', 
      key || 'placeholder-key'
    );
  }, []);
  
  const [step, setStep] = useState<'CREDENTIALS' | 'OTP'>('CREDENTIALS'); 
  const [isLoginMode, setIsLoginMode] = useState(true); 
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', password: '' });
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']); 
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Seguridad Bancaria", desc: "Autenticación de doble factor para proteger tu información.", author: "Insignia Security" },
    { title: "Portal Único", desc: "Gestiona todo tu capital humano desde un solo punto.", author: "Eficiencia 2025" },
    { title: "Cumplimiento Total", desc: "Procesos bajo la Ley de Protección de Datos y normas STPS.", author: "Legal Compliance" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Verificación de variables en tiempo de ejecución
    if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder') || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
        setError('Error de configuración: Las llaves de Supabase no están cargadas en Vercel.');
        setIsLoading(false);
        return;
    }

    try {
      if (isLoginMode) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        router.push('/dashboard'); 
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: { 
            data: { full_name: formData.name, company: formData.company, phone: formData.phone },
            emailRedirectTo: `${window.location.origin}/auth/callback`
          },
        });
        if (error) throw error;
        setStep('OTP'); 
      }
    } catch (err: any) {
      // Si el error es Failed to fetch, es 100% problema de las variables de entorno o red
      setError(err.message === 'Failed to fetch' 
        ? 'No se pudo conectar con el servidor. Verifica tu conexión o las variables en Vercel.' 
        : err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const token = otpCode.join('');
    try {
      // Usamos el correo del formulario para validar
      const { error } = await supabase.auth.verifyOtp({ 
        email: formData.email, 
        token, 
        type: 'signup' 
      });
      if (error) throw error;
      router.push('/dashboard'); 
    } catch (err: any) {
      setError('Código incorrecto o expirado. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);
    if (value && index < 5) document.getElementById(`otp-${index + 1}`)?.focus();
  };

  // ESTILO DE INPUT REFORZADO:
  // 1. Color de texto negro puro (#000000)
  // 2. Desactivamos el estilo de autocompletado azul del navegador
  const inputBaseStyle = `
    w-full bg-white border-2 border-slate-300 
    text-black placeholder:text-slate-400 
    rounded-xl text-sm font-black outline-none 
    focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 
    transition-all shadow-sm
    autofill:shadow-[0_0_0_30px_white_inset]
    autofill:text-fill-black
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="min-h-screen w-full flex font-sans bg-white">
      <div className="hidden lg:flex w-1/2 bg-[#001233] relative flex-col justify-between p-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#001233] via-[#001233]/80 to-transparent z-10" />
        <div className="relative z-20 flex items-center gap-2">
           <div className="w-10 h-10 bg-[#00AEEF] rounded-xl flex items-center justify-center font-black text-[#001233] text-xl">I</div>
           <span className="font-bold text-2xl tracking-tighter uppercase italic">Insignia<span className="text-[#00AEEF]">360</span></span>
        </div>
        <div className="relative z-20 max-w-lg mb-10">
           <h2 className="text-5xl font-black italic uppercase leading-none mb-4 tracking-tighter">{slides[currentSlide].title}</h2>
           <p className="text-blue-100/80 text-lg italic">"{slides[currentSlide].desc}"</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-8 animate-in slide-in-from-bottom-4 duration-700">
          
          {step === 'CREDENTIALS' ? (
            <>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-black text-[#001233] tracking-tighter uppercase italic mb-2">{isLoginMode ? 'Bienvenido' : 'Crear Cuenta'}</h2>
                <p className="text-slate-500 font-medium">Ingresa tus datos para continuar.</p>
              </div>

              <form onSubmit={handleAuth} className="space-y-4">
                {!isLoginMode && (
                   <div className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                          <input type="text" required style={{color: 'black'}} className={`${inputBaseStyle} px-11 py-3.5`} placeholder="Nombre" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                       </div>
                       <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                          <input type="text" required style={{color: 'black'}} className={`${inputBaseStyle} px-11 py-3.5`} placeholder="Empresa" onChange={(e) => setFormData({...formData, company: e.target.value})} />
                       </div>
                     </div>
                     <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input type="tel" required style={{color: 'black'}} className={`${inputBaseStyle} px-11 py-3.5`} placeholder="Teléfono" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                     </div>
                   </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="email" required style={{color: 'black'}} className={`${inputBaseStyle} px-11 py-3.5`} placeholder="Correo" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input required type={showPassword ? "text" : "password"} style={{color: 'black'}} className={`${inputBaseStyle} px-11 py-3.5`} placeholder="Contraseña" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                
                {error && <p className="text-xs font-bold text-red-500 bg-red-50 p-3 rounded-xl border border-red-100 text-center">{error}</p>}
                
                <button type="submit" disabled={isLoading} className="w-full bg-[#001233] text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-[#00AEEF] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                  {isLoading ? <Loader2 className="animate-spin" size={16} /> : <>{isLoginMode ? 'Ingresar' : 'Continuar'} <ArrowRight size={16} /></>}
                </button>
              </form>
              
              <div className="text-center pt-4">
                <button onClick={() => { setIsLoginMode(!isLoginMode); setError(''); }} className="text-[#00AEEF] text-xs font-black uppercase hover:underline">
                  {isLoginMode ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center animate-in zoom-in-95 duration-500">
               <div className="w-20 h-20 bg-blue-50 text-[#00AEEF] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm"><KeyRound size={40} /></div>
               <h2 className="text-3xl font-black text-[#001233] uppercase italic mb-2">Validación</h2>
               <p className="text-slate-500 font-medium mb-8 px-4">Código de 6 dígitos enviado a <span className="text-[#001233] font-bold">{formData.email}</span></p>

               <form onSubmit={handleVerifyOtp} className="space-y-8">
                 <div className="flex justify-center gap-2">
                    {otpCode.map((digit, idx) => (
                      <input 
                        key={idx} id={`otp-${idx}`} type="text" maxLength={1} value={digit} 
                        style={{ color: 'black' }}
                        onChange={(e) => handleOtpChange(idx, e.target.value)} 
                        className="w-12 h-16 border-2 border-slate-200 rounded-xl text-center text-3xl font-black text-black focus:border-[#00AEEF] focus:bg-blue-50/30 outline-none transition-all" 
                      />
                    ))}
                 </div>
                 {error && <p className="text-xs font-bold text-red-500">{error}</p>}
                 <button type="submit" disabled={isLoading} className="w-full bg-[#00AEEF] text-[#001233] py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-[#001233] hover:text-white transition-all shadow-lg">
                    {isLoading ? 'Validando...' : 'Verificar Código'}
                 </button>
               </form>
               <button onClick={() => setStep('CREDENTIALS')} className="mt-8 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-600 underline">Volver al registro</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}