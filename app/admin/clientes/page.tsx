'use client';
import React, { useState, useEffect } from 'react';
import { Plus, X, Loader2, Save, Zap, FileText, Crown, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

function ModalAltaDefinitiva({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  
  type Estrategia = 'unitario' | 'pack_20' | 'saas_micro' | 'saas_startup' | 'saas_growth' | 'saas_pro' | 'saas_corp' | 'mayorista_saldo';
  const [estrategia, setEstrategia] = useState<Estrategia>('unitario');
  const [compraESE, setCompraESE] = useState({ cantidad: 0, precioUnitario: 800, totalPagar: 0 });

  const [formData, setFormData] = useState({
    nombre_empresa: '',
    contacto_nombre: '',
    email_contacto: '',
    tests_disponibles: 0,
    limite_vacantes: 1,
    limite_candidatos_mes: 0,
    es_ilimitado_tests: false
  });

  // Lógica de Ratios SaaS
  useEffect(() => {
    const configs: Record<Estrategia, Partial<typeof formData>> = {
      unitario: { tests_disponibles: 1, limite_vacantes: 1, limite_candidatos_mes: 0, es_ilimitado_tests: false },
      pack_20: { tests_disponibles: 20, limite_vacantes: 3, limite_candidatos_mes: 0, es_ilimitado_tests: false },
      saas_micro: { tests_disponibles: 0, limite_vacantes: 3, limite_candidatos_mes: 12, es_ilimitado_tests: true },
      saas_startup: { tests_disponibles: 0, limite_vacantes: 5, limite_candidatos_mes: 30, es_ilimitado_tests: true },
      saas_growth: { tests_disponibles: 0, limite_vacantes: 10, limite_candidatos_mes: 80, es_ilimitado_tests: true },
      saas_pro: { tests_disponibles: 0, limite_vacantes: 20, limite_candidatos_mes: 200, es_ilimitado_tests: true },
      saas_corp: { tests_disponibles: 0, limite_vacantes: 50, limite_candidatos_mes: 500, es_ilimitado_tests: true },
      mayorista_saldo: { tests_disponibles: 1000, limite_vacantes: 999, limite_candidatos_mes: 0, es_ilimitado_tests: false },
    };
    setFormData(prev => ({ ...prev, ...configs[estrategia] }));
  }, [estrategia]);

  const calcularPrecioESE = (cantidad: number) => {
    let precio = 800;
    if (cantidad >= 50) precio = 700;
    else if (cantidad >= 10) precio = 770;
    setCompraESE({ cantidad, precioUnitario: precio, totalPagar: cantidad * precio });
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let fechaVencimiento = new Date();
    if (estrategia.includes('saas')) fechaVencimiento.setMonth(fechaVencimiento.getMonth() + 1);
    else fechaVencimiento = new Date(2099, 0, 1); 

    const { error } = await supabase.from('clientes').insert([{
      nombre_empresa: formData.nombre_empresa,
      contacto_nombre: formData.contacto_nombre,
      email_contacto: formData.email_contacto,
      plan_psico: estrategia,
      tests_disponibles: formData.tests_disponibles,
      limite_vacantes_activas: formData.limite_vacantes,
      creditos_ese_disponibles: compraESE.cantidad, 
      fecha_vencimiento: fechaVencimiento,
      estado: 'activo'
    }]);

    setLoading(false);
    if (error) alert('Error: ' + error.message);
    else { onSuccess(); onClose(); }
  };

  return (
    <div className="fixed inset-0 bg-insignia-blue/95 backdrop-blur-md z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-7xl overflow-hidden flex flex-col max-h-[95vh] border border-white/20">
        
        {/* HEADER CORPORATIVO */}
        <div className="bg-insignia-blue p-8 flex justify-between items-center text-white shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="text-tech-accent" size={20} />
              <h3 className="font-bold text-2xl tracking-tight">Protocolo de Alta Comercial 360°</h3>
            </div>
            <p className="text-white/60 text-sm font-medium">Gestión de licencias y blindaje de capital humano.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition"><X size={28} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 bg-slate-50/50">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* DATOS GENERALES: Tarjeta Blanca */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="space-y-1">
                 <label className="text-[10px] font-bold text-insignia-blue uppercase tracking-widest ml-1">Razón Social</label>
                 <input required type="text" className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-tech-accent focus:border-transparent outline-none transition" placeholder="Empresa de México S.A." value={formData.nombre_empresa} onChange={(e) => setFormData({...formData, nombre_empresa: e.target.value})} />
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] font-bold text-insignia-blue uppercase tracking-widest ml-1">Contacto Principal</label>
                 <input required type="text" className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-tech-accent outline-none" placeholder="Director de RRHH" value={formData.contacto_nombre} onChange={(e) => setFormData({...formData, contacto_nombre: e.target.value})} />
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] font-bold text-insignia-blue uppercase tracking-widest ml-1">Email Administrativo</label>
                 <input required type="email" className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-tech-accent outline-none" placeholder="admin@empresa.com" value={formData.email_contacto} onChange={(e) => setFormData({...formData, email_contacto: e.target.value})} />
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* --- IZQUIERDA: SELECTOR DE ESTRATEGIA (Azul Tech) --- */}
                <div className="lg:col-span-8 space-y-8">
                    
                    {/* PAGO ÚNICO */}
                    <div>
                        <p className="text-xs font-bold text-insignia-blue uppercase mb-4 flex items-center gap-2"><Zap size={14} className="text-tech-accent"/> Adquisición por Saldo (Sin Recurrencia)</p>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                              { id: 'unitario', label: 'Unitario', detail: '1 Test • $90' },
                              { id: 'pack_20', label: 'Pack 20', detail: 'Ahorro PyME' },
                              { id: 'mayorista_saldo', label: 'Mayorista', detail: 'Saldo 1000+', dark: true }
                            ].map((opt) => (
                              <div 
                                key={opt.id}
                                onClick={() => setEstrategia(opt.id as Estrategia)} 
                                className={`cursor-pointer border-2 p-4 rounded-2xl transition-all duration-300 ${
                                  estrategia === opt.id 
                                  ? 'border-tech-accent bg-cyan-50 shadow-md' 
                                  : opt.dark ? 'bg-insignia-blue text-white border-insignia-blue' : 'bg-white border-slate-100 hover:border-tech-accent/30'
                                }`}
                              >
                                  <div className={`font-bold text-sm ${estrategia === opt.id ? 'text-insignia-blue' : ''}`}>{opt.label}</div>
                                  <div className="text-[10px] opacity-60 font-medium">{opt.detail}</div>
                              </div>
                            ))}
                        </div>
                    </div>

                    {/* ESCALERA SAAS */}
                    <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50">
                        <p className="text-xs font-bold text-insignia-blue uppercase mb-6 flex items-center gap-2"><Crown size={16} className="text-tech-accent"/> Suscripciones Mensuales (Inteligencia Recurrente)</p>
                        <div className="space-y-3">
                            {[
                              { id: 'saas_micro', level: 'MICRO', name: 'Plan Micro', price: '$790', vac: '3', tests: '12' },
                              { id: 'saas_startup', level: 'STARTUP', name: 'Plan Despegue', price: '$1,490', vac: '5', tests: '30' },
                              { id: 'saas_growth', level: 'GROWTH', name: 'Plan Crecimiento', price: '$2,490', vac: '10', tests: '80' },
                              { id: 'saas_pro', level: 'PRO', name: 'Plan Consolidado', price: '$3,990', vac: '20', tests: '200' },
                              { id: 'saas_corp', level: 'CORP', name: 'Plan Corporate', price: '$6,990', vac: '50', tests: '500', gold: true },
                            ].map((tier) => (
                              <div 
                                key={tier.id}
                                onClick={() => setEstrategia(tier.id as Estrategia)} 
                                className={`cursor-pointer p-4 rounded-2xl flex justify-between items-center transition-all border-2 ${
                                  estrategia === tier.id 
                                  ? 'bg-cyan-50 border-tech-accent' 
                                  : 'bg-slate-50 border-transparent hover:bg-slate-100'
                                }`}
                              >
                                <div className="flex items-center gap-4">
                                    <div className={`px-3 py-1 rounded-lg text-[10px] font-bold w-20 text-center ${tier.gold ? 'bg-amber-100 text-amber-700' : 'bg-insignia-blue/10 text-insignia-blue'}`}>
                                      {tier.level}
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-insignia-blue">{tier.name} <span className="text-tech-accent ml-2">{tier.price}</span></div>
                                        <div className="text-[10px] text-slate-400 font-medium">Protocolo Mensual Activo.</div>
                                    </div>
                                </div>
                                <div className="text-right text-xs flex gap-8">
                                    <div className="text-center"><b className="block text-insignia-blue text-sm">{tier.vac}</b> Vacantes</div>
                                    <div className="text-center"><b className="block text-insignia-blue text-sm">{tier.tests}</b> Tests/Mes</div>
                                </div>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- DERECHA: MONEDERO ESE (Cian Tech) --- */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full">
                      <h4 className="font-bold text-insignia-blue flex items-center gap-3 mb-4"><FileText size={22} className="text-tech-accent"/> Monedero BGC</h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-8">
                          Créditos para Estudios Socioeconómicos y Background Checks. Validez permanente.
                      </p>
                      
                      <div className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 space-y-6">
                          <div>
                              <label className="text-[10px] font-bold text-insignia-blue uppercase block mb-3 text-center">Cantidad de Créditos</label>
                              <input 
                                  type="number" 
                                  className="w-full p-4 text-center font-bold text-3xl rounded-2xl border-2 border-slate-200 text-insignia-blue focus:border-tech-accent outline-none transition shadow-inner bg-white" 
                                  placeholder="0"
                                  onChange={(e) => calcularPrecioESE(parseInt(e.target.value) || 0)}
                              />
                          </div>

                          {compraESE.cantidad > 0 && (
                              <div className="space-y-3 pt-4 border-t border-slate-200 animate-in fade-in slide-in-from-bottom-2">
                                  <div className="flex justify-between text-xs font-bold">
                                      <span className="text-slate-400">Precio Unitario:</span>
                                      <span className="text-insignia-blue">${compraESE.precioUnitario}</span>
                                  </div>
                                  <div className="flex justify-between items-end">
                                      <span className="font-bold text-sm text-insignia-blue">Inversión Total:</span>
                                      <span className="font-black text-2xl text-tech-accent">${compraESE.totalPagar.toLocaleString()}</span>
                                  </div>
                              </div>
                          )}
                      </div>
                      
                      <div className="mt-8 p-4 bg-insignia-blue/5 rounded-xl text-[10px] text-insignia-blue/60 font-bold text-center leading-relaxed">
                          Escala de Precios BGC:<br/>
                          1-9: $800 | 10-49: $770 | 50+: <span className="text-tech-accent">$700</span>
                      </div>
                    </div>
                </div>
            </div>

            {/* ACCIONES FINALES */}
            <div className="flex justify-end gap-5 pt-8 border-t border-slate-100">
                <button type="button" onClick={onClose} className="px-8 py-3 text-slate-400 hover:text-insignia-blue font-bold text-sm transition">Cancelar</button>
                <button type="submit" disabled={loading} className="bg-tech-accent text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-insignia-blue transition-all shadow-lg shadow-tech-accent/30 flex items-center gap-3">
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                  PROCESAR ALTA 360° <ChevronRight size={16} />
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ClientesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <div className="py-10 space-y-10">
        <div className="flex justify-between items-end border-b border-slate-100 pb-8">
          <div>
            <h1 className="text-4xl font-bold text-insignia-blue mb-2">Cartera de Clientes</h1>
            <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">Gestión de Activos y Validación 360°</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="btn-pill-primary">
            <Plus size={20}/> NUEVA VENTA
          </button>
        </div>
        
        <div className="bg-white p-20 text-center border-2 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400 font-bold italic">
          [ Listado de Clientes Activos - Protocolo de Seguridad 2025 ]
        </div>
  
        <ModalAltaDefinitiva isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={() => {}} />
      </div>
    );
}