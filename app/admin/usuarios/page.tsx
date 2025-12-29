'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, UserPlus, Key, Shield, 
  User, Mail, Search, CheckCircle, XCircle, 
  ArrowLeft, Lock, Edit3, X, Save, Crown, Eye, EyeOff
} from 'lucide-react';
import Link from 'next/link';

// Datos iniciales simulados
const initialUsers = [
  { id: 1, name: "Ricardo Sánchez", email: "rsanchez@insignia.com", role: "SUPERADMIN", status: "ACTIVO", company: "Insignia Root" },
  { id: 2, name: "Mariana López", email: "m.lopez@empresa.com", role: "CLIENTE", status: "ACTIVO", company: "TechGlobal SA" },
  { id: 3, name: "Juan Pérez", email: "jperez@insignia.com", role: "ANALISTA", status: "SUSPENDIDO", company: "Insignia Root" },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estados para Modal de Edición de Datos
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  // Estados para Modal de Contraseña
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [passUser, setPassUser] = useState<any>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (user: any) => {
    setEditingUser({ ...user });
    setIsEditModalOpen(true);
  };

  const handlePasswordClick = (user: any) => {
    setPassUser(user);
    setNewPassword('');
    setConfirmPassword('');
    setIsPassModalOpen(true);
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers(users.map(u => u.id === editingUser.id ? editingUser : u));
    setIsEditModalOpen(false);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if(newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log(`Contraseña actualizada para ${passUser.email}`);
    setIsPassModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#000d21] text-white font-sans flex flex-col relative">
      
      {/* HEADER */}
      <header className="h-24 border-b border-white/5 bg-[#001233]/40 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-white/50 hover:text-[#00AEEF]">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-black italic uppercase tracking-tighter text-white">Control de Acceso</h1>
            <p className="text-[10px] text-[#00AEEF] font-black uppercase tracking-[0.2em]">Gestión de Roles y Seguridad</p>
          </div>
        </div>
        <button className="bg-[#00AEEF] text-[#001233] px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_30px_rgba(0,174,239,0.3)]">
          <UserPlus size={18} /> Crear Usuario
        </button>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* BUSCADOR */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <input 
            type="text"
            placeholder="Buscar usuario..."
            className="w-full bg-[#001233] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-[#00AEEF]/50 outline-none transition-all text-white font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* TABLA */}
        <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Identidad</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Rol</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Estado</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#001233] border border-white/10 flex items-center justify-center text-[#00AEEF] font-black">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{user.name}</p>
                        <p className="text-xs text-white/40">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${
                      user.role === 'SUPERADMIN' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : 'bg-white/5 text-white/60 border-white/10'
                    }`}>
                      {user.role === 'SUPERADMIN' && <Crown size={10} />}
                      {user.role}
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${
                      user.status === 'ACTIVO' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEditClick(user)} className="p-2 bg-white/5 rounded-lg border border-white/10 text-white/40 hover:text-[#00AEEF] hover:border-[#00AEEF]/50 transition-all">
                        <Edit3 size={16} />
                      </button>
                      <button onClick={() => handlePasswordClick(user)} className="p-2 bg-white/5 rounded-lg border border-white/10 text-white/40 hover:text-amber-400 hover:border-amber-400/50 transition-all">
                        <Key size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MODAL DE EDICIÓN DE DATOS --- */}
      {isEditModalOpen && editingUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#000d21]/80 backdrop-blur-md">
          <div className="bg-[#001a4d] border border-white/10 w-full max-w-lg rounded-[3rem] p-10 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent" />
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black italic uppercase text-white tracking-tighter">Modificar Datos</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-all text-white/40 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSaveUser} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-4 mb-2 block">Nombre</label>
                  <input type="text" value={editingUser.name} onChange={(e) => setEditingUser({...editingUser, name: e.target.value})} className="w-full bg-[#000d21] border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00AEEF] outline-none text-sm font-bold text-white" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-4 mb-2 block">Correo</label>
                  <input type="email" value={editingUser.email} onChange={(e) => setEditingUser({...editingUser, email: e.target.value})} className="w-full bg-[#000d21] border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00AEEF] outline-none text-sm font-bold text-white" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-4 mb-2 block">Rol</label>
                  <select value={editingUser.role} onChange={(e) => setEditingUser({...editingUser, role: e.target.value})} className="w-full bg-[#000d21] border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00AEEF] outline-none text-sm font-black uppercase text-white">
                    <option value="SUPERADMIN text-black">Superadministrador</option>
                    <option value="ADMIN text-black">Administrador</option>
                    <option value="CLIENTE text-black">Cliente</option>
                    <option value="ANALISTA text-black">Analista</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-[#00AEEF] text-[#001233] font-black uppercase tracking-widest py-4 rounded-2xl shadow-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                <Save size={18} /> Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL DE ACTUALIZAR CONTRASEÑA --- */}
      {isPassModalOpen && passUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#000d21]/80 backdrop-blur-md">
          <div className="bg-[#001a4d] border border-white/10 w-full max-w-md rounded-[3rem] p-10 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black italic uppercase text-white tracking-tighter">Nueva Contraseña</h2>
              <button onClick={() => setIsPassModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-all text-white/40 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <p className="text-xs text-white/40 mb-6 font-medium uppercase tracking-wider text-center">Actualizando acceso para <br/><span className="text-[#00AEEF]">{passUser.email}</span></p>
            <form onSubmit={handleUpdatePassword} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-4 mb-2 block">Nueva Contraseña</label>
                  <input type={showPass ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full bg-[#000d21] border border-white/10 rounded-2xl px-6 py-4 focus:border-amber-400 outline-none text-sm font-bold text-white" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-6 bottom-4 text-white/20 hover:text-white">
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-4 mb-2 block">Confirmar Contraseña</label>
                  <input type={showPass ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-[#000d21] border border-white/10 rounded-2xl px-6 py-4 focus:border-amber-400 outline-none text-sm font-bold text-white" />
                </div>
              </div>
              <button type="submit" className="w-full bg-amber-400 text-[#001233] font-black uppercase tracking-widest py-4 rounded-2xl shadow-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                <Lock size={18} /> Actualizar Acceso
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}