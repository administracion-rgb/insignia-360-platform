import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  BookOpen, 
  Settings, 
  LogOut,
  ChevronRight,
  Shield
} from 'lucide-react';

const Admin_Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Clientes', icon: <Users size={20} />, path: '/admin/clientes' },
    { name: 'Arsenal Pruebas', icon: <ClipboardCheck size={20} />, path: '/admin/pruebas' },
    { name: 'Catálogo', icon: <BookOpen size={20} />, path: '/admin/catalogo' },
    { name: 'Configuración', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 z-50">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3 border-b border-slate-800/50">
        <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          <Shield className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-white font-black tracking-tighter text-xl italic leading-none">
            INSIGNIA <span className="text-blue-500">360</span>
          </h1>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
            Admin Terminal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                  : 'hover:bg-slate-800 hover:text-white border border-transparent'}
              `}
            >
              <div className="flex items-center gap-3">
                <span className={`${isActive ? 'text-blue-500' : 'text-slate-500 group-hover:text-blue-400'} transition-colors`}>
                  {item.icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-tight italic">
                  {item.name}
                </span>
              </div>
              {isActive && <ChevronRight size={14} className="animate-pulse" />}
            </Link>
          );
        })}
      </nav>

      {/* Perfil / Footer del Sidebar */}
      <div className="p-4 bg-slate-950/50 border-t border-slate-800/50">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-black uppercase italic">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default Admin_Sidebar;