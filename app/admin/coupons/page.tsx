'use client';
import { useState, useEffect } from 'react';
// IMPORTACIÓN CORREGIDA: Usamos tu cliente local para eliminar el error de módulo
import { supabase } from '@/lib/supabaseClient';
import { Plus, Trash2, X, Loader2 } from 'lucide-react';

export default function AdminCupones() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [coupons, setCoupons] = useState<any[]>([]);
  
  // Estados para el nuevo cupón
  const [newCode, setNewCode] = useState('');
  const [newDiscount, setNewDiscount] = useState('');
  const [newOwner, setNewOwner] = useState('');

  // 1. CARGAR CUPONES DESDE SUPABASE
  const fetchCoupons = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('coupons')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setCoupons(data);
    if (error) console.error("Error al cargar cupones:", error.message);
    setLoading(false);
  };

  useEffect(() => { 
    fetchCoupons(); 
  }, []);

  // 2. GUARDAR NUEVO CUPÓN
  const handleSaveCoupon = async () => {
    if (!newCode || !newDiscount || !newOwner) {
        return alert("Por favor, llena todos los campos obligatorios.");
    }

    const { error } = await supabase.from('coupons').insert([
      { 
        code: newCode.toUpperCase().trim(), 
        discount_percent: parseInt(newDiscount), 
        owner_name: newOwner 
      }
    ]);

    if (error) {
      alert("Error al guardar en la base de datos: " + error.message);
    } else {
      setIsModalOpen(false);
      setNewCode(''); 
      setNewDiscount(''); 
      setNewOwner('');
      fetchCoupons(); // Recargar la lista automáticamente
    }
  };

  // 3. ELIMINAR CUPÓN
  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este cupón? Esta acción no se puede deshacer.")) {
      const { error } = await supabase.from('coupons').delete().eq('id', id);
      if (error) {
        alert("Error al eliminar: " + error.message);
      } else {
        fetchCoupons();
      }
    }
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Control de Aliados</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase hover:bg-blue-700 shadow-lg flex items-center gap-2 transform active:scale-95 transition-all"
          >
            <Plus size={20} /> Nuevo Cupón
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center p-20">
            <Loader2 className="animate-spin text-blue-600" size={48} />
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100 font-black">
                <tr>
                  <th className="px-8 py-6 text-xs text-slate-400 uppercase tracking-widest">Código</th>
                  <th className="px-8 py-6 text-xs text-slate-400 uppercase tracking-widest">Aliado</th>
                  <th className="px-8 py-6 text-xs text-slate-400 uppercase tracking-widest text-center">Desc.</th>
                  <th className="px-8 py-6 text-xs text-slate-400 uppercase tracking-widest text-center">Usos</th>
                  <th className="px-8 py-6 text-xs text-slate-400 uppercase tracking-widest text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-bold">
                {coupons.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5">
                      <span className="bg-slate-900 text-white px-4 py-2 rounded-xl font-mono font-black text-base uppercase">
                        {c.code}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-slate-900 text-base">{c.owner_name}</td>
                    <td className="px-8 py-5 text-center text-blue-600 text-lg">-{c.discount_percent}%</td>
                    <td className="px-8 py-5 text-center text-slate-600 text-lg">{c.uses || 0}</td>
                    <td className="px-8 py-5 text-right">
                      <button onClick={() => handleDelete(c.id)} className="text-slate-300 hover:text-rose-500 transition-colors p-2">
                        <Trash2 size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* MODAL PARA CREAR */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl relative">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Configurar Nuevo Cupón</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Código Único</label>
                  <input 
                    type="text" placeholder="EJ: PROMO50" 
                    value={newCode} onChange={(e) => setNewCode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-slate-900 uppercase outline-none focus:border-blue-500 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">% de Descuento</label>
                  <input 
                    type="number" placeholder="Solo números (Ej: 30)" 
                    value={newDiscount} onChange={(e) => setNewDiscount(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-slate-900 outline-none focus:border-blue-500 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widestNombre del Aliado / Promotor"></label>
                  <input 
                    type="text" placeholder="Ej: Juan Pérez" 
                    value={newOwner} onChange={(e) => setNewOwner(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-slate-900 outline-none focus:border-blue-500 transition-all" 
                  />
                </div>
                <button 
                  onClick={handleSaveCoupon}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/20 mt-4"
                >
                  Guardar Cupón en Base de Datos
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}