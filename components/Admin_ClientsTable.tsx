'use client'; // Importante para interactividad
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { MoreHorizontal, Shield, ShieldCheck, ShieldAlert } from 'lucide-react';

export default function Admin_ClientsTable() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos reales de Supabase
  useEffect(() => {
    async function fetchClientes() {
      const { data, error } = await supabase.from('clientes').select('*');
      if (data) setClientes(data);
      setLoading(false);
    }
    fetchClientes();
  }, []);

  if (loading) return <div className="p-4 text-gray-500">Cargando empresas...</div>;

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th className="px-6 py-4 font-semibold">Empresa</th>
            <th className="px-6 py-4 font-semibold">Plan</th>
            <th className="px-6 py-4 font-semibold">Estado</th>
            <th className="px-6 py-4 font-semibold">Fecha Registro</th>
            <th className="px-6 py-4 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">
                <p className="font-bold text-gray-900">{cliente.nombre_empresa}</p>
                <p className="text-xs text-gray-400">{cliente.contacto_nombre}</p>
              </td>
              
              <td className="px-6 py-4">
                {cliente.plan === 'premium' ? (
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold flex w-fit items-center gap-1">
                    <ShieldCheck size={12}/> PREMIUM
                  </span>
                ) : (
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold flex w-fit items-center gap-1">
                    <Shield size={12}/> BÁSICO
                  </span>
                )}
              </td>

              <td className="px-6 py-4">
                {cliente.estado === 'activo' ? (
                  <span className="text-green-600 font-bold text-xs">● Activo</span>
                ) : (
                  <span className="text-red-500 font-bold text-xs">● Suspendido</span>
                )}
              </td>

              <td className="px-6 py-4 text-gray-500">
                {new Date(cliente.fecha_registro).toLocaleDateString()}
              </td>

              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50">
                  <MoreHorizontal size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {clientes.length === 0 && (
        <div className="p-8 text-center text-gray-500">No hay clientes registrados aún.</div>
      )}
    </div>
  );
}