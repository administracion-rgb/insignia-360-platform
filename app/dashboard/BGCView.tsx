'use client';
import React, { useState } from 'react';
import { 
  Clock, ExternalLink, Zap, ShieldAlert, Calendar, 
  Search, Filter, Phone, User, Hash, UserCheck, Briefcase 
} from 'lucide-react';

export default function BGCView() {
  const [filterMonth, setFilterMonth] = useState('all');
  const [filterYear, setFilterYear] = useState('2025');
  const [filterClient, setFilterClient] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // DATOS SIMULADOS (Ahora incluyen "analyst")
  const requests = [
    { 
      id: 'BGC-9901', 
      client: 'Constructora Alpha SA', 
      candidate: 'JUAN PÉREZ MORA', 
      curp: 'PEMJ900101HDFRRN01',
      rfc: 'PEMJ900101ABC',
      phone: '55-1234-5678',
      requestedAt: '28/12/2025 09:00', 
      serviceType: 'Estudio Socioeconómico', 
      modality: 'ESTÁNDAR', 
      slaTotal: 120, 
      timeLeft: 104,
      critical: false,
      analyst: 'Roberto G.' // Nuevo campo Staff
    },
    { 
      id: 'BGC-9905', 
      client: 'Innova Tech Global', 
      candidate: 'MARÍA GARCÍA RUIZ', 
      curp: 'GARM950505MDFRRN02',
      rfc: 'GARM950505XYZ',
      phone: '55-9876-5432',
      requestedAt: '27/12/2025 14:30', 
      serviceType: 'Validación Digital', 
      modality: 'URGENTE', 
      slaTotal: 72, 
      timeLeft: 14,
      critical: true,
      analyst: 'Sofia M.'
    },
    { 
      id: 'BGC-9908', 
      client: 'Logistics MX', 
      candidate: 'CARLOS DÍAZ', 
      curp: 'DIRR880202HDFRRN03',
      rfc: 'DIRR880202H77',
      phone: '55-5555-5555',
      requestedAt: '26/12/2025 10:15', 
      serviceType: 'Check Integral', 
      modality: 'ESTÁNDAR', 
      slaTotal: 120, 
      timeLeft: 48,
      critical: false,
      analyst: 'Pendiente'
    },
  ];

  const filteredRequests = requests.filter(r => 
    (filterClient === 'all' || r.client === filterClient) &&
    (r.candidate.toLowerCase().includes(searchTerm.toLowerCase()) || r.curp.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 animate-in fade-in duration-500 font-sans flex flex-col h-full">
      
      {/* 1. BARRA DE CONTROL (Header) */}
      <div className="p-5 border-b border-slate-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-slate-50/50 rounded-t-xl">
        <div>
          <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
            <Clock size={20} className="text-[#00AEEF]" /> Monitor de Entregas
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide ml-7">
            SLA Activo • Días Hábiles
          </p>
        </div>

        <div className="flex flex-wrap gap-2 w-full xl:w-auto">
          {/* Buscador */}
          <div className="relative flex-grow xl:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-9 pr-3 text-[11px] font-bold text-slate-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm"
            />
          </div>

          <select className="bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-[10px] font-bold text-slate-600 outline-none shadow-sm cursor-pointer hover:border-blue-400 transition-colors">
            <option value="all">Clientes: Todos</option>
            <option value="Constructora Alpha SA">Constructora Alpha</option>
          </select>

          <div className="flex gap-1 bg-white border border-slate-200 rounded-lg p-0.5 shadow-sm">
             <select className="bg-transparent py-1 px-2 text-[10px] font-bold text-slate-600 outline-none cursor-pointer">
               <option value="all">Mes Actual</option>
               <option value="12">Dic</option>
             </select>
             <div className="w-px bg-slate-200 my-1"></div>
             <select className="bg-transparent py-1 px-2 text-[10px] font-bold text-slate-600 outline-none cursor-pointer">
               <option value="2025">2025</option>
             </select>
          </div>
        </div>
      </div>

      {/* 2. TABLA PROFESIONAL (Scroll Transversal) */}
      <div className="relative overflow-x-auto flex-grow">
        <table className="w-full min-w-[1500px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-[10px] font-extrabold uppercase tracking-wide text-slate-500 border-b border-slate-200 h-10">
              {/* COLUMNA 1: SLA (Sticky) */}
              <th className="pl-6 pr-4 sticky left-0 bg-slate-50 z-20 shadow-[2px_0_5px_rgba(0,0,0,0.02)] border-r border-slate-200 w-40 text-center">
                 SLA Restante
              </th>
              
              <th className="px-4 text-center">Fecha</th>
              <th className="px-4 text-center">Analista (Staff)</th>
              <th className="px-4">Cliente / ID</th>
              <th className="px-4">Candidato</th>
              <th className="px-4">Datos Fiscales</th>
              <th className="px-4">Contacto</th>
              <th className="px-4">Servicio Contratado</th>
              <th className="px-4 text-center">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredRequests.map((r) => (
              <tr key={r.id} className="group hover:bg-blue-50/30 transition-colors h-20 text-[11px]">
                
                {/* 1. SLA (Sticky & Critical) */}
                <td className="pl-6 pr-4 sticky left-0 bg-white group-hover:bg-blue-50/10 z-20 border-r border-slate-100 shadow-[2px_0_5px_rgba(0,0,0,0.02)] align-middle">
                  <div className="flex flex-col items-center justify-center">
                    <div className={`font-mono text-sm font-black tracking-tight ${r.critical ? 'text-red-600' : 'text-emerald-600'}`}>
                      {r.timeLeft}h
                    </div>
                    {/* Barra de Progreso */}
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden border border-slate-200">
                      <div 
                        className={`h-full rounded-full ${r.critical ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} 
                        style={{ width: `${(r.timeLeft / r.slaTotal) * 100}%` }} 
                      />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 mt-1">{r.modality}</span>
                  </div>
                </td>

                {/* 2. FECHA */}
                <td className="px-4 align-middle text-center">
                   <div className="inline-flex flex-col items-center">
                      <span className="font-bold text-slate-700">{r.requestedAt.split(' ')[0]}</span>
                      <span className="text-[9px] text-slate-400 font-medium">{r.requestedAt.split(' ')[1]}</span>
                   </div>
                </td>

                {/* 3. ANALISTA (NUEVA COLUMNA) */}
                <td className="px-4 align-middle text-center">
                   {r.analyst === 'Pendiente' ? (
                     <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-[9px] border border-slate-200">
                       <UserCheck size={10} /> Asignar
                     </span>
                   ) : (
                     <div className="inline-flex items-center gap-2 bg-blue-50 pl-1 pr-2 py-1 rounded-full border border-blue-100">
                        <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-black text-[9px]">
                          {r.analyst.charAt(0)}
                        </div>
                        <span className="text-blue-900 font-bold">{r.analyst}</span>
                     </div>
                   )}
                </td>

                {/* 4. CLIENTE */}
                <td className="px-4 align-middle">
                   <div className="flex flex-col">
                      <span className="font-extrabold text-slate-800 uppercase text-xs">{r.client}</span>
                      <span className="text-[9px] font-bold text-[#00AEEF] mt-0.5">{r.id}</span>
                   </div>
                </td>

                {/* 5. CANDIDATO */}
                <td className="px-4 align-middle">
                   <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-slate-100 rounded text-slate-400 border border-slate-200">
                        <User size={14} />
                      </div>
                      <span className="font-bold text-slate-700 uppercase text-xs">{r.candidate}</span>
                   </div>
                </td>

                {/* 6. DATOS FISCALES (Agrupados Limpios) */}
                <td className="px-4 align-middle">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                       <span className="w-8 text-[9px] font-bold text-slate-400 text-right">CURP</span>
                       <span className="font-mono text-slate-600 bg-slate-50 px-1.5 rounded border border-slate-100 text-[10px]">
                         {r.curp}
                       </span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-8 text-[9px] font-bold text-slate-400 text-right">RFC</span>
                       <span className="font-mono text-slate-600 bg-slate-50 px-1.5 rounded border border-slate-100 text-[10px]">
                         {r.rfc}
                       </span>
                    </div>
                  </div>
                </td>

                {/* 7. CONTACTO */}
                <td className="px-4 align-middle">
                   <div className="flex items-center gap-2">
                      <Phone size={12} className="text-slate-400" />
                      <span className="font-bold text-slate-600">{r.phone}</span>
                   </div>
                </td>

                {/* 8. SERVICIO */}
                <td className="px-4 align-middle">
                   <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5">
                         <Briefcase size={12} className="text-slate-400" />
                         <span className="font-bold text-slate-700 uppercase">{r.serviceType}</span>
                      </div>
                      <span className={`w-fit flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-black border ${r.modality === 'URGENTE' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-blue-50 text-blue-600 border-blue-200'}`}>
                         {r.modality === 'URGENTE' ? <Zap size={8} /> : <ShieldAlert size={8} />}
                         {r.modality}
                      </span>
                   </div>
                </td>

                {/* 9. ACCIÓN */}
                <td className="px-4 align-middle text-center">
                  <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-blue-600 hover:border-blue-400 hover:shadow-md transition-all active:scale-95">
                    <ExternalLink size={16} />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}