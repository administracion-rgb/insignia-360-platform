'use client';
import React, { useState } from 'react';
import { 
  FileText, Eye, Settings, Search, 
  Brain, Users, Crown, Activity, 
  Zap, BarChart3, Plus, Settings2, Filter
} from 'lucide-react';
import Link from 'next/link';

const examCards = [
  { id: 'cleaver', name: 'CLEAVER (DISC)', category: 'PERSONALIDAD', icon: <Users size={20} />, questions: 24, completados: 142, status: 'ACTIVO' },
  { id: 'terman', name: 'TERMAN MERRIL', category: 'INTELIGENCIA', icon: <Brain size={20} />, questions: 10, completados: 85, status: 'ACTIVO' },
  { id: 'ipv', name: 'IPV SALES PRO', category: 'HABILIDADES ÉLITE', icon: <Crown size={20} />, questions: 12, completados: 63, status: 'ACTIVO' }
];

export default function CatalogExamsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex-1 w-full bg-[#f8fafc] min-h-screen font-sans">
      {/* HEADER ÉLITE */}
      <div className="bg-[#0f172a] px-12 py-16 text-white relative overflow-hidden border-b border-blue-900/30">
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
           <Settings2 size={180} className="animate-[spin_12s_linear_infinite] text-blue-500" />
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 max-w-[1440px] mx-auto">
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
              CONTROL DE <span className="text-blue-500 font-extrabold text-6xl">SISTEMA ÉLITE</span>
            </h1>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.4em] flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Live • Admin Terminal
            </p>
          </div>

          <div className="flex gap-6">
            <div className="bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] min-w-[220px]">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center">TOTAL PRUEBAS</p>
                <p className="text-3xl font-black italic tracking-tighter text-white text-center">12 Unidades</p>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLBAR FLOTANTE */}
      <div className="max-w-[1440px] mx-auto px-12 -mt-10 relative z-30">
        <div className="bg-white p-5 rounded-[2rem] shadow-2xl shadow-slate-200 flex flex-col md:flex-row items-center gap-4 border border-slate-100">
          <div className="relative flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="SISTEMA DE BÚSQUEDA TÉCNICA..."
              className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-2xl text-[11px] font-black uppercase tracking-widest focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#0f172a] transition-all shadow-xl shadow-blue-500/20 active:scale-95">
            <Plus size={20}/> NUEVA UNIDAD
          </button>
        </div>
      </div>

      {/* GRID DE UNIDADES */}
      <div className="max-w-[1440px] mx-auto p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {examCards.map((exam) => (
            <div key={exam.id} className="bg-white rounded-[3rem] border border-slate-100 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group border-b-[6px] border-b-transparent hover:border-b-blue-600">
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                  {exam.icon}
                </div>
                <span className="text-[9px] font-black uppercase px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 tracking-[0.2em] border border-emerald-100 italic">
                  {exam.status}
                </span>
              </div>

              <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-1 leading-none">{exam.name}</h3>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-10">{exam.category}</p>

              <div className="space-y-4 mb-12 mt-auto">
                <div className="flex justify-between items-center py-3 border-b border-slate-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><FileText size={14}/> REACTIVOS</span>
                    <span className="text-sm font-black text-slate-900 italic">{exam.questions}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Activity size={14}/> ÉXITO</span>
                    <span className="text-sm font-black text-emerald-600 italic">94%</span>
                </div>
              </div>

              <Link 
                href={`/admin/pruebas/preview/${exam.id}`}
                className="w-full flex items-center justify-center gap-3 bg-[#0f172a] text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-lg active:scale-95"
              >
                <Eye size={18} /> GESTIONAR TEST
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}