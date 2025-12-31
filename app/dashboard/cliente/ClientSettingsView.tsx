'use client';
import React from 'react';
import { Settings, Building, FileText, Users, Shield, CheckCircle2, Camera, MapPin, User, Mail, Phone, Save } from 'lucide-react';

export default function ClientSettingsView() {
  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      <h2 className="text-2xl font-black text-slate-800 uppercase italic tracking-tighter mb-8 flex items-center gap-3">
          <Settings size={28} className="text-slate-400" /> Configuración de Cuenta
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#001233] text-white rounded-xl text-xs font-bold uppercase shadow-lg"><Building size={16} className="text-[#00AEEF]" /> Datos Generales</button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 text-slate-500 rounded-xl text-xs font-bold uppercase hover:bg-slate-50 transition-colors"><FileText size={16} /> Facturación</button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 text-slate-500 rounded-xl text-xs font-bold uppercase hover:bg-slate-50 transition-colors"><Users size={16} /> Usuarios y Accesos</button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 text-slate-500 rounded-xl text-xs font-bold uppercase hover:bg-slate-50 transition-colors"><Shield size={16} /> Seguridad</button>
          </div>
          <div className="lg:col-span-3 space-y-6">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                  <div className="flex justify-between items-start mb-6"><h3 className="text-sm font-black text-slate-800 uppercase tracking-widest border-b-2 border-[#00AEEF] pb-1">Identidad Corporativa</h3><span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1"><CheckCircle2 size={12} /> Cuenta Verificada</span></div>
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      <div className="flex flex-col items-center gap-3"><div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 relative group cursor-pointer hover:border-[#00AEEF] transition-colors"><Camera size={24} /><div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center text-white text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">CAMBIAR</div></div><p className="text-[10px] text-slate-400 font-bold uppercase">Logo Empresa</p></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow w-full">
                          <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Razón Social</label><div className="relative"><Building size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="text" defaultValue="Constructora Alpha S.A. de C.V." className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs font-bold text-slate-700 outline-none focus:border-[#00AEEF] transition-all" /></div></div>
                          <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">RFC</label><div className="relative"><FileText size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="text" defaultValue="CALP901010XYZ" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs font-bold text-slate-700 outline-none focus:border-[#00AEEF] transition-all uppercase" /></div></div>
                          <div className="space-y-1 md:col-span-2"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Dirección Fiscal</label><div className="relative"><MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="text" defaultValue="Av. Reforma 222, Piso 10, Juárez, CDMX" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs font-bold text-slate-700 outline-none focus:border-[#00AEEF] transition-all" /></div></div>
                      </div>
                  </div>
              </div>
              <div className="flex justify-end pt-4"><button onClick={() => alert("Cambios guardados")} className="flex items-center gap-2 bg-[#001233] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase hover:bg-[#00AEEF] hover:shadow-lg transition-all"><Save size={16} /> Guardar Cambios</button></div>
          </div>
      </div>
    </div>
  );
}