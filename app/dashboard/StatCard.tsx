'use client';
import React from 'react';

export default function StatCard({ title, value, trend, color }: { title: string, value: string, trend: string, color: string }) {
  // Ajuste de colores para modo claro: Fondos pasteles con texto oscuro
  const bgStyles = {
    'text-blue-600': 'bg-blue-50 text-blue-700',
    'text-emerald-600': 'bg-emerald-50 text-emerald-700',
    'text-amber-600': 'bg-amber-50 text-amber-700',
  };
  // @ts-ignore
  const trendBadge = bgStyles[color] || 'bg-slate-100 text-slate-600';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </p>
      <h3 className="text-4xl font-black text-slate-800 tracking-tighter mb-3">{value}</h3>
      <div className={`text-[10px] font-bold px-3 py-1 rounded-full ${trendBadge} w-fit inline-block border border-transparent`}>
        {trend}
      </div>
    </div>
  );
}