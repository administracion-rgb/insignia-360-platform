'use client';
import React, { useState } from 'react';
import { 
  Shield, Search, UserCog, Key, CheckCircle2, 
  XCircle, MoreHorizontal, Phone, Mail, Edit, 
  Plus, X, Save, Trash2 
} from 'lucide-react';
import StatCard from './StatCard';

// 1. DEFINICIÓN DE ROLES PERMITIDOS
const ROLES = ['SUPER ADMINISTRADOR', 'ADMINISTRADOR', 'VALIDADOR'];

export default function RolesView() {
  const [filterRole, setFilterRole] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // ESTADO DEL MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  // DATOS INICIALES (Simulación de Base de Datos)
  const [users, setUsers] = useState([
    { id: 1, name: 'Roberto Sánchez', email: 'admin@insignia.com', phone: '55-1234-5678', role: 'SUPER ADMINISTRADOR', status: 'Activo', lastLogin: 'Hace 2 min' },
    { id: 2, name: 'Sofia Martínez', email: 'sofia@insignia.com', phone: '55-8765-4321', role: 'ADMINISTRADOR', status: 'Activo', lastLogin: 'Hace 1 hora' },
    { id: 3, name: 'Pedro López', email: 'pedro@staff.com', phone: '55-3333-4444', role: 'VALIDADOR', status: 'Inactivo', lastLogin: 'Hace 5 días' },
  ]);

  // FORMULARIO TEMPORAL
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: 'VALIDADOR', status: 'Activo'
  });

  // --- LÓGICA DE GESTIÓN ---

  // Abrir Modal (Crear o Editar)
  const openModal = (user: any = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({ ...user });
    } else {
      setEditingUser(null);
      setFormData({ name: '', email: '', phone: '', role: 'VALIDADOR', status: 'Activo' });
    }
    setIsModalOpen(true);
  };

  // Guardar Cambios
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      // Modificar existente
      setUsers(users.map(u => u.id === editingUser.id ? { ...formData, id: u.id, lastLogin: u.lastLogin } : u));
    } else {
      // Crear nuevo
      const newUser = { ...formData, id: Date.now(), lastLogin: 'Nunca' };
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
  };

  // Eliminar Usuario
  const handleDelete = (id: number) => {
    if(confirm('¿Estás seguro de eliminar a este colaborador?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  // --- FILTROS Y ESTILOS ---

  const filteredUsers = users.filter(u => 
    (filterRole === 'all' || u.role === filterRole) &&
    (u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getRoleColor = (role: string) => {
    switch(role) {
      case 'SUPER ADMINISTRADOR': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'ADMINISTRADOR': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'VALIDADOR': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-sans relative">
      
      {/* 1. ESTADÍSTICAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Colaboradores" value={users.length.toString()} trend="Personal Interno" color="text-slate-600" />
        <StatCard title="Validadores Activos" value={users.filter(u => u.role === 'VALIDADOR' && u.status === 'Activo').length.toString()} trend="Operación en curso" color="text-emerald-500" />
        <StatCard title="Administradores" value={users.filter(u => u.role.includes('ADMINISTRADOR')).length.toString()} trend="Gestión y Control" color="text-purple-500" />
      </div>

      {/* 2. BARRA DE HERRAMIENTAS */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Buscador */}
          <div className="relative flex-1 w-full lg:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar personal..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 text-xs font-bold text-slate-700 outline-none focus:border-purple-400 focus:bg-white transition-all" 
            />
          </div>
          
          {/* Filtro */}
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 w-full lg:w-auto">
            <Shield size={14} className="text-slate-500" />
            <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} className="bg-transparent text-[11px] font-bold uppercase text-slate-600 outline-none cursor-pointer w-full">
              <option value="all">Todos</option>
              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>

        <button 
          onClick={() => openModal()}
          className="w-full lg:w-auto flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-sm active:scale-95"
        >
          <Plus size={16} /> Nuevo Colaborador
        </button>
      </div>

      {/* 3. VISTA MÓVIL (Tarjetas) */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-black text-xs border border-slate-200">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800">{user.name}</h4>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase border ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Mail size={14} className="text-purple-500" /> {user.email}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Phone size={14} className="text-purple-500" /> {user.phone}
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-50 -mx-5 -mb-5 p-3 px-5 border-t border-slate-100 rounded-b-2xl mt-1">
               <span className={`flex items-center gap-1.5 text-[10px] font-bold ${user.status === 'Activo' ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {user.status === 'Activo' ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                  {user.status}
               </span>
               <button onClick={() => openModal(user)} className="text-xs font-bold text-purple-600 flex items-center gap-1">
                 <Edit size={12} /> Modificar
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. VISTA ESCRITORIO (Tabla) */}
      <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-[10px] font-extrabold uppercase tracking-wide text-slate-500 border-b border-slate-200 h-10">
              <th className="px-6 py-3">Colaborador</th>
              <th className="px-6 py-3">Rol Asignado</th>
              <th className="px-6 py-3">Contacto Directo</th>
              <th className="px-6 py-3 text-center">Estatus</th>
              <th className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-colors text-xs font-medium text-slate-700">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold border border-slate-200 shadow-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{user.name}</p>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1"><Mail size={10} /> {user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md font-bold text-[10px] border uppercase tracking-wider ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-600 font-mono text-[11px]">
                    <Phone size={12} className="text-slate-400" /> {user.phone}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase ${user.status === 'Activo' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-500 bg-slate-100'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Activo' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => openModal(user)} className="p-2 hover:bg-purple-50 rounded-lg text-slate-400 hover:text-purple-600 transition-colors" title="Editar">
                      <Edit size={16} />
                    </button>
                    <button onClick={() => handleDelete(user.id)} className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-600 transition-colors" title="Eliminar">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5. MODAL DE EDICIÓN / CREACIÓN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header Modal */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">
                  {editingUser ? 'Editar Colaborador' : 'Nuevo Colaborador'}
                </h3>
                <p className="text-xs text-slate-400 font-bold">Gestión de Personal Interno</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Body Formulario */}
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:border-purple-500 focus:bg-white outline-none transition-all" placeholder="Ej. Juan Pérez" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Correo</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:border-purple-500 focus:bg-white outline-none transition-all" placeholder="correo@insignia.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Teléfono</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:border-purple-500 focus:bg-white outline-none transition-all" placeholder="55-0000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Rol</label>
                  <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 focus:border-purple-500 focus:bg-white outline-none transition-all cursor-pointer uppercase">
                    {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Estatus</label>
                  <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 focus:border-purple-500 focus:bg-white outline-none transition-all cursor-pointer uppercase">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors">Cancelar</button>
                <button type="submit" className="flex-1 py-3 bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                  <Save size={16} /> Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}