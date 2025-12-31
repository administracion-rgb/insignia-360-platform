'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, KeyRound 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';

export default function LoginPage() {
  const router = useRouter();
  
  // --- CORRECCIÓN AQUÍ ---
  // Usamos '||' para proveer valores falsos si las variables no están listas durante el build.
  // Esto evita el error: "Your project's URL and API key are required"
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
  );
  
  // ESTADOS DEL FLUJO
  const [step, setStep] = useState<'CREDENTIALS' | 'OTP'>('CREDENTIALS'); 
  const [isLoginMode, setIsLoginMode] = useState(true); 
  
  // DATOS
  const [formData, setFormData] = useState({ name: '', company: '', email: '', password: '' });
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']); 
  
  // UI
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel
  const slides = [
    { title: "Seguridad Bancaria", desc: "Autenticación de doble factor para proteger tu información corporativa.", author: "Insignia Security" },
    { title: "Portal Único", desc: "Gestiona todo tu capital humano desde un solo punto de acceso validado.", author: "Eficiencia 2025" },
    { title: "Datos Encriptados", desc: "Tus credenciales viajan seguras con cifrado de extremo a extremo.", author: "Compliance Tech" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // --- 1. ENVIAR CREDENCIALES ---
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLoginMode) {
        // LOGIN
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        router.push('/dashboard'); 
      } else {
        // REGISTRO
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: { full_name: formData.name, company: formData.company },
          },
        });
        if (error) throw error;
        setStep('OTP'); 
      }
    } catch (err: any) {
      setError(err.message || 'Error de autenticación');
    } finally {
      setIsLoading(false);
    }
  };

  // --- 2. VERIFICAR CÓDIGO (OTP) ---
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const token = otpCode.join('');
    
    try {
      const { error } = await supabase.auth.verifyOtp({
        email: formData.email,
        token: token,
        type: 'signup'
      });

      if (error) throw error;
      router.push('/dashboard'); 
    } catch (err: any) {
      setError('Código incorrecto o expirado.');
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

  return (
    <div className="min-h-screen w-full flex font-sans bg-white">
      {/* IZQUIERDA (MARKETING) */}
      <div className="hidden lg:flex w-1/2 bg-[#001233] relative flex-col justify-between p-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#001233] via-[#001233]/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity" />
        
        <div className="relative z-20 flex items-center gap-2"><div className="w-8 h-8 bg-[#00AEEF] rounded-lg flex items-center justify-center font-black text-[#001233]">I</div><span className="font-bold text-xl tracking-tight">INSIGNIA<span className="text-[#00AEEF]">360</span></span></div>
        
        <div className="relative z-20 max-w-lg mb-10">
           <div className="transition-opacity duration-500 ease-in-out">
              <h2 className="text-4xl font-black italic uppercase leading-tight mb-4 tracking-tight">{slides[currentSlide].title}</h2>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-6">"{slides[currentSlide].desc}"</p>
           </div>
           <div className="flex gap-2 mt-8">{slides.map((_, idx) => (<button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`} />))}</div>
        </div>
      </div>

      {/* DERECHA (FORMULARIO DINÁMICO) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8 animate-in slide-in-from-right-4 duration-500">
          
          {step === 'CREDENTIALS' ? (
            <>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{isLoginMode ? 'Bienvenido' : 'Crear Cuenta'}</h2>
                <p className="text-slate-500 text-sm">{isLoginMode ? 'Ingresa tus credenciales.' : 'Regístrate para validar tu identidad.'}</p>
              </div>

              <form onSubmit={handleAuth} className="space-y-5">
                {!isLoginMode && (
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1"><label className="text-[10px] font-black text-slate-500 uppercase ml-1">Nombre</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold outline-none focus:border-[#00AEEF]" onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
                     <div className="space-y-1"><label className="text-[10px] font-black text-slate-500 uppercase ml-1">Empresa</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold outline-none focus:border-[#00AEEF]" onChange={(e) => setFormData({...formData, company: e.target.value})} /></div>
                   </div>
                )}
                <div className="space-y-1"><label className="text-[10px] font-black text-slate-500 uppercase ml-1">Correo</label><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-11 py-3.5 text-sm font-bold outline-none focus:border-[#00AEEF]" onChange={(e) => setFormData({...formData, email: e.target.value})} /></div></div>
                <div className="space-y-1"><label className="text-[10px] font-black text-slate-500 uppercase ml-1">Contraseña</label><div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input required type={showPassword ? "text" : "password"} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-11 py-3.5 text-sm font-bold outline-none focus:border-[#00AEEF]" onChange={(e) => setFormData({...formData, password: e.target.value})} /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></div>
                
                {error && <p className="text-xs text-red-500 font-bold bg-red-50 p-2 rounded text-center">{error}</p>}
                
                <button type="submit" disabled={isLoading} className="w-full bg-[#001233] text-white py-4 rounded-xl font-black uppercase text-xs hover:bg-[#00AEEF] hover:text-[#001233] transition-all flex items-center justify-center gap-2">
                  {isLoading ? <Loader2 className="animate-spin" size={16} /> : <>{isLoginMode ? 'Ingresar' : 'Continuar'} <ArrowRight size={16} /></>}
                </button>
              </form>
              
              <div className="text-center pt-4"><button onClick={() => setIsLoginMode(!isLoginMode)} className="text-[#00AEEF] text-xs font-black uppercase hover:underline">{isLoginMode ? 'Crear Cuenta Corporativa' : 'Iniciar Sesión'}</button></div>
            </>
          ) : (
            <div className="text-center animate-in zoom-in-95">
               <div className="w-16 h-16 bg-blue-50 text-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-6"><KeyRound size={32} /></div>
               <h2 className="text-2xl font-black text-slate-900 uppercase italic mb-2">Código de Seguridad</h2>
               <p className="text-slate-500 text-sm mb-8 px-4">Hemos enviado un código de 6 dígitos a <br/><span className="font-bold text-slate-800">{formData.email}</span>.</p>

               <form onSubmit={handleVerifyOtp}>
                 <div className="flex justify-center gap-2 mb-8">
                    {otpCode.map((digit, idx) => (
                      <input key={idx} id={`otp-${idx}`} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpChange(idx, e.target.value)} className="w-12 h-14 border-2 border-slate-200 rounded-xl text-center text-2xl font-black text-slate-800 focus:border-[#00AEEF] focus:outline-none transition-all shadow-sm" />
                    ))}
                 </div>
                 {error && <p className="text-xs text-red-500 font-bold mb-4">{error}</p>}
                 <button type="submit" disabled={isLoading} className="w-full bg-[#00AEEF] text-[#001233] py-4 rounded-xl font-black uppercase text-xs hover:bg-[#001233] hover:text-white transition-all shadow-lg">{isLoading ? <Loader2 className="animate-spin mx-auto" size={16} /> : 'Verificar Acceso'}</button>
               </form>
               <button onClick={() => setStep('CREDENTIALS')} className="mt-6 text-slate-400 text-xs font-bold hover:text-slate-600">Volver / Corregir correo</button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}