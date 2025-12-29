'use client';
import React, { useState } from 'react';
import { Users, Package, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';
import StatCard from './StatCard';

export default function VentasView({ isOwner }: { isOwner: boolean }) {
  const [periodo, setPeriodo] = useState('mes');

  if (!isOwner) return <div className="p-20 text-center font-black text-red-400 uppercase tracking-widest bg-white rounded-3xl shadow-sm">Acceso Denegado</div>;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-sans">
      
      {/* SELECTOR DE PERIODO: Botones sólidos para mayor contraste */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex gap-1 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
          {['semana', 'mes', 'año'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriodo(p)}
              className={`px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                periodo === p 
                  ? 'bg-[#001233] text-white shadow-md transform scale-105' // Activo: Oscuro fuerte
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900' // Inactivo
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase italic flex items-center gap-1">
          <Calendar size={12} /> Datos en tiempo real
        </span>
      </div>

      {/* TARJETAS MÉTRICAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title={`Ventas ${periodo}`} value={periodo === 'mes' ? '$48,900' : periodo === 'semana' ? '$12,400' : '$540,000'} trend="+12% vs periodo anterior" color="text-emerald-600" />
        <StatCard title="Health Score" value="99.8%" trend="Sistema Estable" color="text-blue-600" />
        <StatCard title="Tickets Totales" value="154" trend="+23 este mes" color="text-amber-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* RANKING CLIENTES: Fondo Blanco sobre Fondo Gris del Dashboard */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Users size={18} /></div>
              Top Clientes
            </h3>
            <button className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100">Ver Todos</button>
          </div>
          
          <div className="space-y-3">
            {[{ n: 'Constructora Alpha', v: '$150,000', l: 'VIP' }, { n: 'Global Logistics', v: '$92,400', l: 'Corp' }, { n: 'Innova Tech', v: '$45,000', l: 'Pyme' }].map((c, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all group">
                <div>
                  <span className="text-sm font-bold text-slate-800 block group-hover:text-blue-700 transition-colors">{c.n}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{c.l}</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-slate-800">{c.v}</span>
                  <ArrowUpRight size={14} className="ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS: Barras con colores vibrantes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600"><Package size={18} /></div>
            Servicios Top
          </h3>
          <div className="space-y-6 pt-2">
            {[{ l: 'BGC Estándar (120H)', p: '70%', c: 'bg-blue-600' }, { l: 'BGC Urgente (72H)', p: '20%', c: 'bg-amber-500' }, { l: 'Psicometría', p: '10%', c: 'bg-emerald-500' }].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-2">
                  <span className="uppercase tracking-wide">{s.l}</span>
                  <span className="text-slate-900 font-black">{s.p}</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-100">
                  <div className={`h-full ${s.c} rounded-full shadow-sm`} style={{ width: s.p }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}