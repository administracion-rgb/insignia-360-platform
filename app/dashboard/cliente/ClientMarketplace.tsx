'use client';
import React from 'react';
import { 
  Briefcase, Rocket, TrendingDown, Users, Building2, Infinity, Zap, 
  MousePointerClick, Star, ShieldCheck, FileBarChart, Ticket, ShoppingCart, 
  Check, Plus, MapPin, Globe, Sparkles 
} from 'lucide-react';

// --- AQUÍ ESTABA EL ERROR: Faltaba definir onOpenBgc ---
interface Props {
  coupon: string;
  discountPercent: number;
  onApplyCoupon: (val: string) => void;
  onAddToCart: (item: any) => void;
  // Agregamos esta línea para que acepte la función:
  onOpenBgc: (service: string, type: 'Estándar' | 'Urgente') => void;
}

// DATOS (Mismos datos que tenías)
const VACANCY_PLANS = [
  { id: 'semilla', name: "PLAN SEMILLA", price: 2065, icon: <Rocket size={24} />, color: "border-slate-200", features: ["3 Vacantes Activas", "15 Baterías Estándar", "Vigencia 3 Meses"] },
  { id: 'impulso', name: "PLAN IMPULSO", price: 5280, icon: <TrendingDown size={24} />, color: "border-[#00AEEF] ring-1 ring-[#00AEEF]/20", recommended: true, features: ["7 Vacantes Activas", "35 Baterías Estándar", "Vigencia 3 Meses"] },
  { id: 'startup', name: "PLAN STARTUP", price: 8995, icon: <Users size={24} />, color: "border-slate-200", features: ["15 Vacantes Activas", "75 Baterías Estándar", "Vigencia 3 Meses"] },
  { id: 'expansion', name: "PLAN EXPANSIÓN", price: 13530, icon: <Building2 size={24} />, color: "border-slate-200", features: ["25 Vacantes Activas", "125 Baterías Estándar", "Vigencia 3 Meses"] }
];
const CORPORATE_PLANS = [
  { id: 'unlimited_mes', name: "UNLIMITED MENSUAL", price: 5095, desc: "Acceso total 1 Mes.", features: ["Evaluaciones Ilimitadas", "Catálogo Élite", "3 Usuarios Admin"] },
  { id: 'unlimited_tri', name: "UNLIMITED TRIMESTRAL", price: 14215, desc: "Ahorro estratégico.", features: ["Evaluaciones Ilimitadas", "Catálogo Élite", "Soporte WhatsApp"] },
  { id: 'unlimited_sem', name: "UNLIMITED SEMESTRAL", price: 24750, desc: "Continuidad operativa.", features: ["Evaluaciones Ilimitadas", "Catálogo Élite", "Soporte VIP"] },
  { id: 'unlimited_anual', name: "UNLIMITED ANUAL", price: 45560, desc: "Máxima rentabilidad.", features: ["Evaluaciones Ilimitadas", "Catálogo Élite", "White Label"], highlight: true }
];
const CREDIT_CATALOG = [
  { id: 'cred_ind', name: "Prueba Individual", price: 299, icon: <MousePointerClick size={20} />, desc: "1 Prueba técnica" },
  { id: 'cred_op', name: "Batería Operativa", price: 769, icon: <Users size={20} />, desc: "3 Pruebas (Staff)" },
  { id: 'cred_prem', name: "Batería Premium", price: 1155, icon: <Star size={20} />, desc: "3 Pruebas (Directivos)", highlight: true },
  { id: 'cred_hon', name: "Módulo Honestidad", price: 475, icon: <ShieldCheck size={20} />, desc: "Blindaje Ético" },
  { id: 'cred_buro', name: "Check Buró Crédito", price: 139, icon: <FileBarChart size={20} />, desc: "Historial Financiero" },
];
// Precios para BGC en el Marketplace
const BGC_PRICES = { presencial: { std: 1275, urg: 1695 }, digital: { std: 990, urg: 1275 } };

// --- COMPONENTE CORREGIDO ---
export default function ClientMarketplace({ 
  coupon, 
  discountPercent, 
  onApplyCoupon, 
  onAddToCart,
  onOpenBgc // <--- Recibimos la función aquí
}: Props) {
  
  const getDiscountedPrice = (price: number) => Math.floor(price * (1 - discountPercent));

  return (
    <div className="animate-in zoom-in-95 duration-500 space-y-12">
        
        {/* Header + CUPÓN */}
        <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-slate-800 uppercase italic tracking-tighter">Marketplace <span className="text-[#00AEEF]">Corporativo</span></h2>
            <div className="mt-6 relative max-w-sm mx-auto group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Ticket size={18} /></div>
                <input type="text" value={coupon} onChange={(e) => onApplyCoupon(e.target.value)} placeholder="INSIGNIA20" className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-sm font-black uppercase tracking-widest text-center outline-none focus:border-[#00AEEF] transition-all shadow-sm group-hover:shadow-md"/>
                {discountPercent > 0 && (<div className="absolute -right-3 -top-3 bg-[#00AEEF] text-[#001233] text-[10px] font-black px-3 py-1 rounded-full animate-bounce shadow-md">-{discountPercent * 100}%</div>)}
            </div>
            <p className="text-[10px] text-slate-400 mt-3 font-medium"><span className="block mb-1 text-amber-500 font-bold uppercase tracking-wide">* Códigos no acumulables</span></p>
        </div>

        {/* 1. PLANES POR VACANTE */}
        <div>
            <h3 className="text-lg font-black text-slate-800 uppercase italic tracking-tight mb-6 flex items-center gap-2"><Briefcase size={20} className="text-indigo-600" /> Planes por Vacante</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {VACANCY_PLANS.map((p) => (
                    <div key={p.id} className={`relative bg-white border rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-[#00AEEF] hover:shadow-xl transition-all group ${p.color}`}>
                        {p.recommended && <div className="absolute top-0 left-0 w-full bg-[#00AEEF] text-[#001233] text-center text-[9px] font-black uppercase py-1 tracking-widest">Recomendado</div>}
                        <div className="pt-4">
                            <div className="mb-4 p-3 bg-slate-50 rounded-xl w-fit text-slate-700 group-hover:bg-[#00AEEF] group-hover:text-white transition-colors">{p.icon}</div>
                            <h4 className="text-lg font-black text-slate-800 uppercase italic leading-tight">{p.name}</h4>
                            <div className="mt-2 flex items-baseline gap-2">
                                {discountPercent > 0 && <span className="text-sm line-through text-slate-300 font-bold">${p.price.toLocaleString()}</span>}
                                <span className="text-2xl font-bold text-slate-900">${getDiscountedPrice(p.price).toLocaleString()}</span>
                                <span className="text-[10px] text-slate-400 font-bold">MXN</span>
                            </div>
                            <ul className="mt-6 space-y-2">{p.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500"><Check size={12} className="text-[#00AEEF] shrink-0 mt-0.5" /> {f}</li>))}</ul>
                        </div>
                        <button onClick={() => onAddToCart({ id: p.id, name: p.name, price: p.price, type: 'Plan' })} className="mt-8 w-full py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase hover:bg-[#00AEEF] transition-colors flex items-center justify-center gap-2"><ShoppingCart size={14} /> Agregar</button>
                    </div>
                ))}
            </div>
        </div>

        {/* 2. CORPORATIVO UNLIMITED */}
        <div className="bg-[#001233] rounded-[3rem] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
            <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-8 flex items-center gap-2 relative z-10"><Infinity size={24} className="text-[#00AEEF]" /> Corporativo Unlimited</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {CORPORATE_PLANS.map((cp) => (
                    <div key={cp.id} className={`bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 hover:border-[#00AEEF]/50 transition-all group ${cp.highlight ? 'ring-2 ring-[#00AEEF] bg-white/10' : ''}`}>
                        <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">{cp.name}</h4>
                        <p className="text-[10px] text-blue-200/70 mb-4 h-8">{cp.desc}</p>
                        <div className="flex items-baseline gap-2 mb-6">
                            {discountPercent > 0 && <span className="text-xs line-through text-white/30 font-bold">${cp.price.toLocaleString()}</span>}
                            <span className="text-2xl font-bold text-white">${getDiscountedPrice(cp.price).toLocaleString()}</span>
                            <span className="text-[9px] text-white/40">MXN</span>
                        </div>
                        <ul className="space-y-2 mb-6">{cp.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-[10px] text-white/60"><div className="w-1 h-1 bg-[#00AEEF] rounded-full" /> {f}</li>))}</ul>
                        <button onClick={() => onAddToCart({ id: cp.id, name: cp.name, price: cp.price, type: 'Plan' })} className={`w-full py-2.5 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${cp.highlight ? 'bg-[#00AEEF] text-[#001233] hover:bg-white' : 'bg-white/10 text-white hover:bg-white hover:text-[#001233]'}`}><ShoppingCart size={14} /> Agregar</button>
                    </div>
                ))}
            </div>
        </div>

        {/* 3. BACKGROUND CHECKS (SECCIÓN DESTACADA) */}
        <div>
            <h3 className="text-lg font-black text-slate-800 uppercase italic tracking-tight mb-6 flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#00AEEF]" /> Background Check 360°
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* ESTUDIO PRESENCIAL */}
                <div className="bg-[#001233] rounded-[2rem] p-8 relative overflow-hidden border border-[#00AEEF]/20 group hover:border-[#00AEEF] transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><MapPin size={100} className="text-white" /></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div><h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Estudio Presencial</h4><span className="text-[10px] font-bold text-[#00AEEF] border border-[#00AEEF]/30 px-2 py-1 rounded uppercase tracking-wider mt-2 inline-block">CDMX y EDOMEX</span></div>
                            <div className="p-3 bg-white/10 rounded-xl text-[#00AEEF]"><MapPin size={24} /></div>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white/5 rounded-xl p-4 flex justify-between items-center border border-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => onOpenBgc('Estudio Presencial', 'Estándar')}>
                                <div><p className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-widest">Servicio Estándar</p><p className="text-[9px] text-slate-400 italic">3 a 5 días hábiles</p></div>
                                <div className="text-right flex flex-col items-end">
                                    {discountPercent > 0 && <span className="text-[9px] line-through text-white/30">${BGC_PRICES.presencial.std.toLocaleString()}</span>}
                                    <div className="flex items-center gap-2">
                                        <p className="text-xl font-black text-white">${getDiscountedPrice(BGC_PRICES.presencial.std).toLocaleString()}</p>
                                        <Plus size={16} className="text-[#00AEEF]" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#00AEEF]/10 rounded-xl p-4 flex justify-between items-center border border-[#00AEEF]/20 hover:bg-[#00AEEF]/20 transition-colors cursor-pointer" onClick={() => onOpenBgc('Estudio Presencial', 'Urgente')}>
                                <div><p className="text-[10px] font-bold text-white uppercase tracking-widest">Servicio Urgente</p><p className="text-[9px] text-[#00AEEF] italic">&lt; 3 días hábiles</p></div>
                                <div className="text-right flex flex-col items-end">
                                    {discountPercent > 0 && <span className="text-[9px] line-through text-white/30">${BGC_PRICES.presencial.urg.toLocaleString()}</span>}
                                    <div className="flex items-center gap-2">
                                        <p className="text-xl font-black text-white">${getDiscountedPrice(BGC_PRICES.presencial.urg).toLocaleString()}</p>
                                        <Plus size={16} className="text-[#00AEEF]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* VALIDACIÓN DIGITAL */}
                <div className="bg-gradient-to-br from-[#001a33] to-[#000f24] rounded-[2rem] p-8 relative overflow-hidden border border-white/10 group hover:border-[#00AEEF] transition-all">
                    <div className="absolute top-0 right-0 bg-[#00AEEF] text-[#001233] text-[9px] font-black uppercase px-4 py-2 rounded-bl-2xl tracking-widest">Toda la República</div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div><h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Validación Digital</h4><span className="text-[10px] font-bold text-emerald-400 border border-emerald-400/30 px-2 py-1 rounded uppercase tracking-wider mt-2 inline-block">Cobertura Nacional</span></div>
                            <div className="p-3 bg-white/10 rounded-xl text-[#00AEEF]"><Globe size={24} /></div>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white/5 rounded-xl p-4 flex justify-between items-center border border-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => onOpenBgc('Validación Digital', 'Estándar')}>
                                <div><p className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-widest">Digital Estándar</p></div>
                                <div className="text-right flex flex-col items-end">
                                    {discountPercent > 0 && <span className="text-[9px] line-through text-white/30">${BGC_PRICES.digital.std.toLocaleString()}</span>}
                                    <div className="flex items-center gap-2">
                                        <p className="text-xl font-black text-white">${getDiscountedPrice(BGC_PRICES.digital.std).toLocaleString()}</p>
                                        <Plus size={16} className="text-[#00AEEF]" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 flex justify-between items-center border border-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => onOpenBgc('Validación Digital', 'Urgente')}>
                                <div><p className="text-[10px] font-bold text-white uppercase tracking-widest">Digital Urgente</p></div>
                                <div className="text-right flex flex-col items-end">
                                    {discountPercent > 0 && <span className="text-[9px] line-through text-white/30">${BGC_PRICES.digital.urg.toLocaleString()}</span>}
                                    <div className="flex items-center gap-2">
                                        <p className="text-xl font-black text-white">${getDiscountedPrice(BGC_PRICES.digital.urg).toLocaleString()}</p>
                                        <Plus size={16} className="text-[#00AEEF]" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 bg-[#00AEEF] rounded-xl p-3 flex justify-between items-center text-[#001233]"><span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1"><Sparkles size={12} /> Ahorro Digital</span><span className="text-sm font-black">-${Math.floor(285 * (1-discountPercent))} MXN</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 4. CRÉDITOS INDIVIDUALES */}
        <div>
            <h3 className="text-lg font-black text-slate-800 uppercase italic tracking-tight mb-6 flex items-center gap-2"><Zap size={20} className="text-amber-500" /> Créditos On-Demand</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {CREDIT_CATALOG.map((c, i) => (
                    <div key={i} className={`bg-white border rounded-2xl p-4 flex flex-col justify-between hover:border-[#00AEEF] hover:shadow-md transition-all group ${c.highlight ? 'border-[#00AEEF] shadow-md' : 'border-slate-200'}`}>
                        <div><div className={`p-2 rounded-lg w-fit mb-3 ${c.highlight ? 'bg-[#00AEEF] text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-[#00AEEF] group-hover:text-white transition-colors'}`}>{c.icon}</div><h4 className="font-black text-slate-800 text-xs uppercase mb-1">{c.name}</h4><p className="text-[10px] text-slate-500 leading-tight mb-4 h-8 overflow-hidden">{c.desc}</p></div>
                        <button onClick={() => onAddToCart({ id: c.id, name: c.name, price: c.price, type: 'Credit' })} className="w-full py-2 bg-slate-900 text-white rounded-lg text-[10px] font-bold hover:bg-[#00AEEF] transition-colors flex justify-center gap-2 items-center"><ShoppingCart size={12} />{discountPercent > 0 ? <><span className="line-through opacity-50">${c.price}</span> ${getDiscountedPrice(c.price)}</> : `$${c.price} MXN`}</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}