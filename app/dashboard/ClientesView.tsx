'use client';
import React, { useState } from 'react';
import { Users, Search, Filter, Calendar, UserPlus } from 'lucide-react';
import StatCard from './StatCard';

export default function ClientesView() {
  const [mes, setMes] = useState('12');
  const [anio, setAnio] = useState('2025');

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-sans">
      {/* 1. CONTADOR DE CLIENTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard title="Total Clientes Registrados" value="42" trend="Base de Datos Activa" color="text-[#00AEEF]" />
        <StatCard title="Nuevas Cuentas" value="5" trend={`Registrados en ${mes}/${anio}`} color="text-emerald-400" />
      </div>

      {/* 2. BARRA DE FILTROS POR MES Y AÑO */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Buscar cliente por nombre..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 text-xs font-bold text-slate-700 outline-none focus:border-blue-400 focus:bg-white transition-all" />
          </div>
          
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            <Calendar size={14} className="text-slate-500" />
            <select value={mes} onChange={(e) => setMes(e.target.value)} className="bg-transparent text-[11px] font-bold uppercase text-slate-600 outline-none cursor-pointer">
              <option value="12">Diciembre</option>
              <option value="11">Noviembre</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            <Filter size={14} className="text-slate-500" />
            <select value={anio} onChange={(e) => setAnio(e.target.value)} className="bg-transparent text-[11px] font-bold uppercase text-slate-600 outline-none cursor-pointer">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-sm active:scale-95">
          <UserPlus size={16} /> Alta de Cliente
        </button>
      </div>

      {/* 3. ESTADO VACÍO / TABLA */}
      <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl py-24 flex flex-col items-center justify-center text-center shadow-sm">
        <div className="p-4 bg-slate-50 rounded-full mb-4 text-slate-300">
            <Users size={40} />
        </div>
        <h4 className="text-base font-black text-slate-700 uppercase tracking-tight mb-1">Visualizando Registros</h4>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Periodo seleccionado: {mes}/{anio}</p>
      </div>
    </div>
  );
}