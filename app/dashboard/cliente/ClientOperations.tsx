'use client';
import React from 'react';
import { 
  Briefcase, Plus, Zap, UserPlus, TrendingUp, Users, 
  MoreHorizontal, Clock, CheckCircle2, AlertCircle 
} from 'lucide-react';

interface Props {
  onOpenInvite: () => void;
}

export default function ClientOperations({ onOpenInvite }: Props) {
  // Datos simulados (enriquecidos para el diseño)
  const vacancies = [
    { 
      id: 1, 
      title: 'Gerente de Ventas', 
      battery: 'Liderazgo Comercial', 
      candidates: 5, 
      status: 'Activa',
      team: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2', 'https://i.pravatar.cc/150?u=3'] 
    }, 
    { 
      id: 2, 
      title: 'Analista Contable', 
      battery: 'Administrativo Pro', 
      candidates: 2, 
      status: 'Activa',
      team: ['https://i.pravatar.cc/150?u=4', 'https://i.pravatar.cc/150?u=5']
    },
    { 
      id: 3, 
      title: 'Chofer Repartidor', 
      battery: 'Operativo Confianza', 
      candidates: 0, 
      status: 'Pausada',
      team: []
    }
  ];

  const recentActivity = [
    { id: 1, name: 'Juan Pérez Mora', action: 'Completó evaluación', time: 'Hace 2h', status: 'success' },
    { id: 2, name: 'Ana Sofía Ruiz', action: 'Inició sesión', time: 'Hace 5h', status: 'pending' },
    { id: 3, name: 'Carlos Díaz', action: 'Alerta de riesgo', time: 'Ayer', status: 'warning' }
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-8 font-sans">
        
        {/* 1. HEADER DE MÉTRICAS (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KPI 1: Candidatos Activos */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-blue-100 transition-all">
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Candidatos en Proceso</p>
                    <h3 className="text-4xl font-black text-slate-800">15</h3>
                    <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 mt-1">
                        <TrendingUp size={12} /> +4 esta semana
                    </p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Users size={24} />
                </div>
            </div>

            {/* KPI 2: Por Evaluar */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-amber-100 transition-all">
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pendientes de Acción</p>
                    <h3 className="text-4xl font-black text-slate-800">3</h3>
                    <p className="text-[10px] text-amber-500 font-bold flex items-center gap-1 mt-1">
                        <Clock size={12} /> Requieren tu atención
                    </p>
                </div>
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                    <AlertCircle size={24} />
                </div>
            </div>

            {/* CTA PRINCIPAL: ENVÍO RÁPIDO */}
            <button 
                onClick={onOpenInvite}
                className="bg-[#001233] p-6 rounded-3xl text-white shadow-xl shadow-blue-900/10 flex flex-col justify-between relative overflow-hidden group text-left hover:-translate-y-1 transition-transform"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl -mr-8 -mt-8" />
                
                <div className="flex justify-between items-start w-full relative z-10">
                    <div className="p-2 bg-white/10 rounded-xl"><Zap size={20} className="text-[#00AEEF]" /></div>
                    <span className="bg-[#00AEEF] text-[#001233] text-[9px] font-black px-2 py-1 rounded-lg uppercase tracking-widest">Nuevo</span>
                </div>
                
                <div className="relative z-10 mt-4">
                    <h3 className="text-lg font-bold">Envío Rápido</h3>
                    <p className="text-[10px] text-blue-200/80 leading-tight mt-1">
                        Invita a un candidato sin asignarlo a una vacante específica.
                    </p>
                </div>
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 2. GESTIÓN DE VACANTES (Columna Principal) */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-slate-800 uppercase italic tracking-tight flex items-center gap-2">
                        <Briefcase className="text-[#00AEEF]" size={20} /> Mis Vacantes Activas
                    </h3>
                    <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm">
                        <Plus size={16} /> Nueva Vacante
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {vacancies.map((v) => (
                        <div key={v.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-base font-bold text-slate-800 group-hover:text-[#00AEEF] transition-colors">{v.title}</h4>
                                    <p className="text-xs text-slate-400 font-medium mt-0.5">Configuración: <span className="text-slate-600 font-bold">{v.battery}</span></p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wide ${
                                    v.status === 'Activa' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                                }`}>
                                    {v.status}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                                <div className="flex items-center gap-2">
                                    {/* Avatares apilados (Estilo Pro) */}
                                    <div className="flex -space-x-2">
                                        {v.team.length > 0 ? (
                                            v.team.map((img, i) => (
                                                <img key={i} src={img} alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                            ))
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-400 font-bold">0</div>
                                        )}
                                        {v.candidates > 3 && (
                                            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">
                                                +{v.candidates - 3}
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-xs text-slate-400 font-bold ml-1">{v.candidates} Candidatos</span>
                                </div>

                                <div className="flex gap-2">
                                    <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                    <button 
                                        onClick={onOpenInvite}
                                        className="flex items-center gap-2 text-xs font-bold text-white bg-[#001233] px-4 py-2 rounded-xl hover:bg-[#00AEEF] transition-colors shadow-lg shadow-blue-900/10"
                                    >
                                        <UserPlus size={14} /> Evaluar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. FEED DE ACTIVIDAD (Columna Lateral) */}
            <div className="bg-white rounded-[2rem] border border-slate-200 p-6 h-fit shadow-sm">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Actividad Reciente</h3>
                    <button className="text-[10px] font-bold text-[#00AEEF] hover:underline">Ver todo</button>
                 </div>
                 
                 <div className="space-y-1 relative">
                    {/* Línea conectora vertical (Timeline) */}
                    <div className="absolute left-2.5 top-2 bottom-4 w-0.5 bg-slate-100 rounded-full" />

                    {recentActivity.map((act) => (
                        <div key={act.id} className="flex items-start gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors relative z-10">
                            {/* Indicador de estado */}
                            <div className={`w-5 h-5 rounded-full border-2 border-white shadow-sm shrink-0 mt-0.5 flex items-center justify-center ${
                                act.status === 'success' ? 'bg-emerald-500' : 
                                act.status === 'warning' ? 'bg-rose-500' : 'bg-blue-500'
                            }`}>
                                {act.status === 'success' && <CheckCircle2 size={10} className="text-white" />}
                                {act.status === 'warning' && <AlertCircle size={10} className="text-white" />}
                                {act.status === 'pending' && <Clock size={10} className="text-white" />}
                            </div>
                            
                            <div className="flex-grow">
                                <p className="text-xs font-bold text-slate-800">{act.name}</p>
                                <p className="text-[10px] text-slate-500">{act.action}</p>
                            </div>
                            <span className="text-[9px] font-bold text-slate-300 uppercase">{act.time}</span>
                        </div>
                    ))}
                 </div>

                 <div className="mt-6 pt-6 border-t border-slate-50">
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                        <div className="flex gap-3">
                            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg h-fit"><Zap size={14} /></div>
                            <div>
                                <h4 className="text-xs font-bold text-blue-900 mb-1">Tip de Reclutador</h4>
                                <p className="text-[10px] text-blue-700/70 leading-relaxed">
                                    Las vacantes con batería "Premium" tienen un 40% más de precisión en puestos gerenciales.
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
    </div>
  );
}