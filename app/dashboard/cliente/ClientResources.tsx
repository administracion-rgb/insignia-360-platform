'use client';
import React from 'react';
import { Shield, MapPin, Globe, CreditCard } from 'lucide-react';

interface Props {
  activePlan: any;
  onOpenBgc: (service: string) => void;
}

export default function ClientResources({ activePlan, onOpenBgc }: Props) {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
        <div className="bg-[#001233] text-white rounded-3xl p-8 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/20 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10">
                <span className="bg-[#00AEEF] text-[#001233] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{activePlan.name}</span>
                <h2 className="text-3xl font-bold mt-4">Constructora Alpha</h2>
                <p className="text-blue-200 text-sm mt-1">Vigencia hasta el {activePlan.validUntil}</p>
            </div>
            <div className="flex gap-4 relative z-10 w-full md:w-auto">
                <div className="bg-white/5 p-4 rounded-2xl flex-1 md:w-40 backdrop-blur-sm border border-white/10">
                    <p className="text-[9px] uppercase tracking-widest text-blue-200 mb-2">Vacantes</p>
                    <div className="flex items-end gap-1 mb-2"><span className="text-3xl font-bold">{activePlan.maxVacancies - activePlan.usedVacancies}</span><span className="text-xs text-white/50 mb-1">/ {activePlan.maxVacancies}</span></div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-indigo-500" style={{ width: `${(activePlan.usedVacancies / activePlan.maxVacancies) * 100}%` }} /></div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl flex-1 md:w-40 backdrop-blur-sm border border-white/10">
                    <p className="text-[9px] uppercase tracking-widest text-blue-200 mb-2">Baterías</p>
                    <div className="flex items-end gap-1 mb-2"><span className="text-3xl font-bold">{activePlan.maxBatteries - activePlan.usedBatteries}</span><span className="text-xs text-white/50 mb-1">/ {activePlan.maxBatteries}</span></div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-500" style={{ width: `${(activePlan.usedBatteries / activePlan.maxBatteries) * 100}%` }} /></div>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h3 className="text-lg font-black text-slate-800 uppercase italic tracking-tight mb-4 flex items-center gap-2"><Shield className="text-[#00AEEF]" size={20} /> Servicios Disponibles</h3>
                <div className="space-y-4">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between hover:border-[#00AEEF] transition-all">
                        <div className="flex items-center gap-4"><div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><MapPin size={24} /></div><div><h4 className="text-sm font-black text-slate-800 uppercase">Estudio Presencial</h4><span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">5 Disponibles</span></div></div>
                        <button onClick={() => onOpenBgc('Estudio Presencial')} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase hover:bg-[#00AEEF]">Usar</button>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between hover:border-[#00AEEF] transition-all">
                        <div className="flex items-center gap-4"><div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Globe size={24} /></div><div><h4 className="text-sm font-black text-slate-800 uppercase">Validación Digital</h4><span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Ilimitado</span></div></div>
                        <button onClick={() => onOpenBgc('Validación Digital')} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase hover:bg-[#00AEEF]">Iniciar</button>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 h-fit">
                <h4 className="font-black text-slate-800 uppercase text-xs mb-4">Facturación</h4>
                <div className="flex items-center gap-3 mb-4"><div className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400"><CreditCard size={20} /></div><div><p className="text-xs font-bold text-slate-700">Terminación **** 4242</p><p className="text-[10px] text-slate-400">Próximo cargo: 12 Abril</p></div></div>
                <button className="w-full py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:text-[#00AEEF] hover:border-[#00AEEF]">Ver Historial</button>
            </div>
        </div>
    </div>
  );
}