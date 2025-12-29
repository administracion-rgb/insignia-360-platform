'use client';
import { XCircle, CheckCircle2, Clock, Zap } from 'lucide-react';

export default function EvolutionSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-insignia-blue mb-6">
                La Evolución del Blindaje
            </h2>
            <p className="text-lg text-slate-600">
                Dejamos atrás los métodos tradicionales lentos y subjetivos. Bienvenido a la era de la validación digital inteligente.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* TARJETA: Método Tradicional (Gris/Apagado) */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200/60 opacity-80 hover:opacity-100 transition-opacity relative">
            <div className="absolute top-6 right-6 text-slate-300">
                <Clock size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-500 mb-8 flex items-center gap-3">
              <XCircle className="text-red-400" /> Método Tradicional
            </h3>
            <ul className="space-y-6 text-slate-600 font-medium">
              <li className="flex items-start gap-3"><XCircle size={20} className="text-red-400 mt-1 shrink-0" /> Tiempos de respuesta de 5 a 10 días hábiles.</li>
              <li className="flex items-start gap-3"><XCircle size={20} className="text-red-400 mt-1 shrink-0" /> Procesos manuales propensos a error humano.</li>
              <li className="flex items-start gap-3"><XCircle size={20} className="text-red-400 mt-1 shrink-0" /> Información dispersa en múltiples reportes.</li>
              <li className="flex items-start gap-3"><XCircle size={20} className="text-red-400 mt-1 shrink-0" /> Costos operativos elevados y ocultos.</li>
            </ul>
          </div>

          {/* TARJETA: Insignia 360 (Azul/Cian Vibrante) */}
          <div className="bg-insignia-blue p-10 rounded-[2.5rem] shadow-2xl shadow-tech-accent/20 relative overflow-hidden text-white transform md:scale-105 z-10 border border-white/10">
            {/* Fondo decorativo */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-tech-accent rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            
            <div className="absolute top-6 right-6 text-tech-accent">
                <Zap size={40} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-tech-accent" /> Plataforma Insignia 360°
            </h3>
            <ul className="space-y-6 text-white/90 font-medium text-lg">
              <li className="flex items-start gap-3"><CheckCircle2 size={22} className="text-tech-accent mt-1 shrink-0" /> Resultados en tiempo real (menos de 72 hrs).</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={22} className="text-tech-accent mt-1 shrink-0" /> Validación digital automatizada con IA.</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={22} className="text-tech-accent mt-1 shrink-0" /> Reporte único integrado (Psicometría + Legal).</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={22} className="text-tech-accent mt-1 shrink-0" /> **Ahorro directo del 40%** en costos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}