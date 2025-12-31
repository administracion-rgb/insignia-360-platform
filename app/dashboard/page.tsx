'use client';
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, LogOut, BarChart3, ClipboardCheck, 
  Users, Lock, Menu, X, Shield, LayoutDashboard, Eye, EyeOff 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// IMPORTACIONES DE TUS VISTAS
import VentasView from './VentasView';
import BGCView from './BGCView';
import ClientesView from './cliente/ClientesView';
import RolesView from './RolesView';
import ClientView from './cliente/ClientView'; 

const SUPER_ADMIN_EMAIL = "administrador@insigniasoluciones.com";
type Role = 'SUPERADMIN' | 'STAFF' | 'CLIENTE' | 'CANDIDATO';

export default function MasterDashboard() {
  const router = useRouter();
  
  // ESTADOS
  const [activeRole, setActiveRole] = useState<Role>('SUPERADMIN');
  const [activeTab, setActiveTab] = useState('ventas');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  
  const userEmail = "administrador@insigniasoluciones.com";
  const isOwner = userEmail === SUPER_ADMIN_EMAIL;

  useEffect(() => {
    if (activeRole === 'SUPERADMIN' && activeTab === 'panel_cliente') setActiveTab('ventas'); 
    else if (activeRole === 'STAFF') setActiveTab('bgc');
    else if (activeRole === 'CLIENTE') setActiveTab('panel_cliente');
    else if (activeRole === 'CANDIDATO') setActiveTab('examenes');
  }, [activeRole]);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const toggleClientView = () => {
    if (activeTab === 'panel_cliente') setActiveTab('ventas');
    else setActiveTab('panel_cliente');
  };

  // Renderizado de los botones de navegación (Reutilizable para Header y Móvil)
  const NavButtons = ({ mobile = false }) => (
    <>
      {(activeRole === 'SUPERADMIN' || activeRole === 'STAFF') && (
        <>
          {activeRole === 'SUPERADMIN' && isOwner && (
            <button 
              onClick={() => handleNavClick('ventas')} 
              className={mobile 
                ? `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm ${activeTab === 'ventas' ? 'bg-[#00AEEF] text-[#001233]' : 'text-white/40'}`
                : `flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-all ${activeTab === 'ventas' ? 'border-[#00AEEF] text-[#001233]' : 'border-transparent text-slate-400 hover:text-slate-600'}`
              }
            >
              <BarChart3 size={18} /> Análisis
            </button>
          )}
          <button 
            onClick={() => handleNavClick('bgc')} 
            className={mobile 
              ? `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm ${activeTab === 'bgc' ? 'bg-[#00AEEF] text-[#001233]' : 'text-white/40'}`
              : `flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-all ${activeTab === 'bgc' ? 'border-[#00AEEF] text-[#001233]' : 'border-transparent text-slate-400 hover:text-slate-600'}`
            }
          >
            <ClipboardCheck size={18} /> Background Checks
          </button>
          <button 
            onClick={() => handleNavClick('clientes')} 
            className={mobile 
              ? `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm ${activeTab === 'clientes' ? 'bg-[#00AEEF] text-[#001233]' : 'text-white/40'}`
              : `flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-all ${activeTab === 'clientes' ? 'border-[#00AEEF] text-[#001233]' : 'border-transparent text-slate-400 hover:text-slate-600'}`
            }
          >
            <Users size={18} /> Clientes
          </button>

          {activeRole === 'SUPERADMIN' && (
            <button 
              onClick={() => handleNavClick('roles')} 
              className={mobile 
                ? `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm ${activeTab === 'roles' ? 'bg-[#00AEEF] text-[#001233]' : 'text-white/40'}`
                : `flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-all ${activeTab === 'roles' ? 'border-[#00AEEF] text-[#001233]' : 'border-transparent text-slate-400 hover:text-slate-600'}`
              }
            >
              <Shield size={18} /> Roles
            </button>
          )}
        </>
      )}
    </>
  );

  return (
    <main className="min-h-screen bg-slate-50 flex text-slate-800 font-sans relative">
      
      {/* 1. BOTÓN HAMBURGUESA (Solo visible en Móvil) */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-[#001233] text-white rounded-xl shadow-lg border border-white/10"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* OVERLAY MÓVIL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* 2. SIDEBAR (Versión Escritorio: Minimalista / Versión Móvil: Completa) */}
      <aside className={`
        fixed lg:sticky top-0 h-screen lg:w-20 w-72 bg-[#001233] border-r border-[#001e4d] 
        flex flex-col items-center py-6 z-40 text-white shadow-2xl transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* LOGO */}
        <div className="mb-10 p-2 bg-[#00AEEF] rounded-xl shadow-[0_0_15px_rgba(0,174,239,0.3)]">
          <ShieldCheck className="text-[#001233]" size={28} />
        </div>

        {/* NAVEGACIÓN MÓVIL (Solo se ve en el celular) */}
        <nav className="flex-1 w-full px-4 space-y-2 lg:hidden">
           <NavButtons mobile={true} />
        </nav>

        {/* BOTÓN SALIR */}
        <button 
          onClick={() => router.push('/login')} 
          className="mt-auto p-3 text-red-400/50 hover:text-red-400 hover:bg-white/5 rounded-xl transition-all"
          title="Cerrar Sesión"
        >
          <LogOut size={24} />
        </button>
      </aside>

      {/* 3. ÁREA PRINCIPAL */}
      <div className="flex-1 flex flex-col w-full overflow-hidden bg-slate-50 min-h-screen">
        
        {/* --- HEADER (NAVEGACIÓN SUPERIOR) --- */}
        <header className="h-20 border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 bg-white shadow-sm z-30 sticky top-0">
          
          {/* IZQUIERDA: PESTAÑAS DE NAVEGACIÓN (Solo Desktop) */}
          <div className="hidden lg:flex items-center gap-1 h-full pl-4">
             {activeTab !== 'panel_cliente' && <NavButtons mobile={false} />}
             
             {/* Si estamos en vista cliente, mostramos título */}
             {activeTab === 'panel_cliente' && (
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                   <LayoutDashboard size={18} />
                   <span className="font-bold text-xs uppercase tracking-wide">Modo Vista Cliente</span>
                </div>
             )}
          </div>

          {/* DERECHA: HERRAMIENTAS Y PERFIL */}
          <div className="flex items-center gap-4 ml-auto">
             
             {/* Botón Switch Vista Cliente */}
             {activeRole === 'SUPERADMIN' && isOwner && (
               <button 
                 onClick={toggleClientView}
                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border
                   ${activeTab === 'panel_cliente' 
                     ? 'bg-slate-800 text-white border-slate-900 shadow-md' 
                     : 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100'
                   }`}
               >
                 {activeTab === 'panel_cliente' ? <EyeOff size={16} /> : <Eye size={16} />}
                 {activeTab === 'panel_cliente' ? 'Salir del Modo Cliente' : 'Ver como Cliente'}
               </button>
             )}

             <div className="h-8 w-px bg-slate-200 hidden md:block" />

             {/* Perfil */}
             <div className="flex items-center gap-3"> 
                <div className="text-right hidden md:block">
                   <p className="text-[9px] font-black text-blue-600 uppercase tracking-wider">{activeRole}</p>
                   <p className="text-xs font-bold text-slate-500">{userEmail}</p>
                </div>
                {isOwner && <div className="p-2 bg-amber-50 rounded-full text-amber-500 border border-amber-100"><Lock size={16} /></div>}
             </div>
          </div>
        </header>

        {/* --- CONTENIDO --- */}
        <div className="p-4 lg:p-8 overflow-y-auto h-full">
          {activeTab === 'ventas' && activeRole === 'SUPERADMIN' && <VentasView isOwner={isOwner} />}
          {activeTab === 'bgc' && <BGCView />}
          {activeTab === 'clientes' && <ClientesView />}
          {activeTab === 'roles' && activeRole === 'SUPERADMIN' && <RolesView />}
          
          {(activeTab === 'panel_cliente' || activeRole === 'CLIENTE') && <ClientView isOwner={isOwner} />}
          
          {activeTab === 'examenes' && <div className="text-center py-20 text-slate-300 font-black uppercase">Vista Móvil Candidato</div>}
        </div>
      </div>
    </main>
  );
}