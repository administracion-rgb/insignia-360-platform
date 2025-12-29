'use client';
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, LogOut, BarChart3, ClipboardCheck, 
  Users, Lock, PlayCircle, LayoutDashboard 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// IMPORTACIONES RELATIVAS
import VentasView from './VentasView';
import BGCView from './BGCView';
import ClientesView from './ClientesView';

const SUPER_ADMIN_EMAIL = "administrador@insigniasoluciones.com";
type Role = 'SUPERADMIN' | 'STAFF' | 'CLIENTE' | 'CANDIDATO';

export default function MasterDashboard() {
  const router = useRouter();
  const [activeRole, setActiveRole] = useState<Role>('SUPERADMIN');
  const [activeTab, setActiveTab] = useState('ventas');
  const userEmail = "administrador@insigniasoluciones.com";
  const isOwner = userEmail === SUPER_ADMIN_EMAIL;

  useEffect(() => {
    if (activeRole === 'SUPERADMIN') setActiveTab('ventas');
    else if (activeRole === 'STAFF') setActiveTab('bgc');
    else if (activeRole === 'CLIENTE') setActiveTab('panel_cliente');
    else if (activeRole === 'CANDIDATO') setActiveTab('examenes');
  }, [activeRole]);

  return (
    // CAMBIO 1: Fondo bg-slate-100 (Gris técnico) para contraste
    <main className="min-h-screen bg-slate-100 flex text-slate-800 font-sans">
      
      {/* SIDEBAR: Se mantiene OSCURO PROFUNDO para anclar el diseño */}
      <aside className="w-72 bg-[#001233] flex flex-col p-6 sticky top-0 h-screen z-40 text-white shadow-2xl shadow-blue-900/20">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="p-2 bg-[#00AEEF] rounded-lg shadow-[0_0_15px_rgba(0,174,239,0.4)]">
            <ShieldCheck className="text-[#001233]" size={24} />
          </div>
          <span className="font-black italic uppercase tracking-tighter text-xl text-white">
            Insignia<span className="text-[#00AEEF]">360</span>
          </span>
        </div>

        <nav className="flex-1 space-y-2">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4 ml-2 italic">
            Navegación
          </p>
          
          {(activeRole === 'SUPERADMIN' || activeRole === 'STAFF') && (
            <>
              {activeRole === 'SUPERADMIN' && isOwner && (
                <button 
                  onClick={() => setActiveTab('ventas')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all border ${
                    activeTab === 'ventas' 
                      ? 'bg-[#00AEEF] text-[#001233] border-[#00AEEF] shadow-lg shadow-[#00AEEF]/20' 
                      : 'border-transparent text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <BarChart3 size={18} /> Análisis Financiero
                </button>
              )}
              <button 
                onClick={() => setActiveTab('bgc')} 
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all border ${
                  activeTab === 'bgc' 
                    ? 'bg-[#00AEEF] text-[#001233] border-[#00AEEF] shadow-lg shadow-[#00AEEF]/20' 
                    : 'border-transparent text-white/50 hover:bg-white/5 hover:text-white'
                }`}
              >
                <ClipboardCheck size={18} /> Background Checks
              </button>
              
              <button 
                onClick={() => setActiveTab('clientes')} 
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all border ${
                  activeTab === 'clientes' 
                    ? 'bg-[#00AEEF] text-[#001233] border-[#00AEEF] shadow-lg shadow-[#00AEEF]/20' 
                    : 'border-transparent text-white/50 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Users size={18} /> Clientes
              </button>
            </>
          )}

          {/* ... Botones Cliente y Candidato (mismo estilo) ... */}
        </nav>

        <button 
          onClick={() => router.push('/login')} 
          className="w-full flex items-center gap-3 px-4 py-3 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 rounded-xl border border-transparent hover:border-red-400/20 mt-auto font-bold text-sm transition-all group"
        >
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" /> Cerrar Sesión
        </button>
      </aside>

      {/* ÁREA DE CONTENIDO */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-100">
        
        {/* HEADER: Blanco Puro con Sombra suave para separar del fondo gris */}
        <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-slate-200 shadow-sm z-30">
          {isOwner && (
            <div className="bg-slate-100 p-1.5 rounded-xl flex gap-1 border border-slate-200">
              {(['SUPERADMIN', 'STAFF', 'CLIENTE', 'CANDIDATO'] as Role[]).map((r) => (
                <button 
                  key={r} 
                  onClick={() => setActiveRole(r)} 
                  className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                    activeRole === r 
                      ? 'bg-white text-[#001233] shadow-sm border border-slate-200 scale-105' 
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/50'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <span className="text-[10px] font-black text-white bg-[#001233] px-2 py-0.5 rounded-full inline-block mb-0.5 shadow-sm">
                  {activeRole}
                </span>
                <p className="text-xs font-bold text-slate-500">{userEmail}</p>
             </div>
             {isOwner && (
               <div className="p-2 bg-amber-50 text-amber-500 rounded-full border border-amber-200 shadow-sm">
                 <Lock size={16} />
               </div>
             )}
          </div>
        </header>

        {/* CONTENEDOR VISTAS: Padding extra para que el "gris" se note alrededor */}
        <div className="p-8 overflow-y-auto max-h-[calc(100vh-80px)]">
          {activeTab === 'ventas' && activeRole === 'SUPERADMIN' && <VentasView isOwner={isOwner} />}
          {activeTab === 'bgc' && <BGCView />}
          {activeTab === 'clientes' && <ClientesView />}
        </div>
      </div>
    </main>
  );
}