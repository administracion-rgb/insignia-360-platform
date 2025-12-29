'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
// IMPORTACIÓN CORREGIDA: Usamos tu cliente personalizado para evitar errores de módulos
import { supabase } from '@/lib/supabaseClient';
import { Ticket, UserPlus } from 'lucide-react';

export default function RegistroPage() {
  const searchParams = useSearchParams();
  
  // Captura parámetros de la URL de forma segura
  const initialPlan = searchParams.get('plan') || 'Ninguno';
  const initialCoupon = searchParams.get('coupon') || '';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Crear el usuario en el sistema de Autenticación de Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      alert("Error en el registro: " + authError.message);
      setIsSubmitting(false);
      return;
    }

    if (authData.user) {
      // 2. Guardar perfil con el cupón vinculado para atribución de aliados
      const { error: profileError } = await supabase.from('profiles').insert([
        {
          id: authData.user.id,
          full_name: formData.fullName,
          company_name: formData.company,
          selected_plan: initialPlan,
          applied_coupon: initialCoupon,
          created_at: new Date().toISOString()
        }
      ]);

      if (profileError) {
        console.error("Error al crear perfil:", profileError.message);
      }

      // 3. Incrementar el uso del cupón automáticamente en el Dashboard
      if (initialCoupon) {
        const { error: rpcError } = await supabase.rpc('increment_coupon_uses', { 
          target_code: initialCoupon 
        });
        if (rpcError) console.error("Error al contar cupón:", rpcError.message);
      }
      
      alert("¡Registro exitoso! Bienvenido a Insignia 360. Cupón aplicado: " + (initialCoupon || "Ninguno"));
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-slate-100">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-600 text-white rounded-2xl mb-4 shadow-lg shadow-blue-200">
            <UserPlus size={24} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Crea tu Cuenta</h1>
          <p className="text-slate-500 font-medium">Plan seleccionado: <span className="text-blue-600 font-black tracking-tight">{initialPlan}</span></p>
        </div>

        {/* INDICADOR DE CUPÓN ACTIVO - LEGIBILIDAD MEJORADA */}
        {initialCoupon && (
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl mb-6 flex items-center gap-3">
            <Ticket className="text-emerald-600 rotate-45" size={20} />
            <p className="text-xs font-black text-emerald-700 uppercase tracking-widest">
              Cupón de Aliado Activado: {initialCoupon}
            </p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" placeholder="Nombre Completo" required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-slate-900 outline-none focus:border-blue-500 transition-all"
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
          <input 
            type="email" placeholder="Correo Corporativo" required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-slate-900 outline-none focus:border-blue-500 transition-all"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Contraseña de Acceso" required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-slate-900 outline-none focus:border-blue-500 transition-all"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50"
          >
            {isSubmitting ? 'Procesando...' : 'Finalizar Registro'}
          </button>
        </form>
      </div>
    </main>
  );
}