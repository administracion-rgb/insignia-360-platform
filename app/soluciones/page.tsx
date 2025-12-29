'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, Brain, Lock, Globe, FileText, 
  Search, CheckCircle2, TrendingUp, Users, 
  ArrowRight, Activity, Clock, Database, ChevronRight, AlertTriangle,
  HardHat, Car, Megaphone, AlertCircle, Send
} from 'lucide-react';
import Link from 'next/link';

// Importaciones estructurales
import Navbar from '@/components/ui/Navbar'; 
import Footer from '../Footer'; 

export default function SolutionsPage() {
  
  // --- ESTADO DEL FORMULARIO ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // SIMULACIÓN DE ENVÍO
    console.log("Enviando formulario:", formData);
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', company: '', message: '' }); 

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  // --- SECCIÓN 1: HR TECH & SEGURIDAD ---
  const evolutionPoints = [
    {
      old: "Visita domiciliaria invasiva y subjetiva.",
      new: "Validación de identidad digital y geolocalización certificada."
    },
    {
      old: "Validación solo de referencias vecinales.",
      new: "Búsqueda en listas negras internacionales y antecedentes legales."
    },
    {
      old: "Tiempos de entrega de 5 a 10 días.",
      new: "Resultados ágiles (24-72 hrs) mediante tecnología cloud."
    },
    {
      old: "Enfoque en 'cómo vive' el candidato.",
      new: "Enfoque en 'riesgos y honestidad' del candidato."
    }
  ];

  const hrSolutions = [
    {
      id: "bgc",
      title: "Background Check 360°",
      subtitle: "La evolución de la seguridad",
      icon: <ShieldCheck size={40} className="text-[#00AEEF]" />,
      description: "Transformamos el estudio socioeconómico tradicional en una auditoría de seguridad integral. No solo verificamos dónde vive el candidato, sino quién es realmente ante la ley y la sociedad.",
      features: [
        "Validación de Identidad (INE/RENAPO)",
        "Antecedentes Legales y Penales (Nacional)",
        "Historial Laboral y Semanas Cotizadas",
        "Buró de Crédito (Requiere Consentimiento)*" 
      ]
    },
    {
      id: "psico",
      title: "Psicometría Cloud",
      subtitle: "Talento medible y predictivo",
      icon: <Brain size={40} className="text-[#00AEEF]" />,
      description: "Infraestructura de evaluación técnica y conductual. Desde pruebas de coeficiente intelectual hasta análisis de personalidad profunda, todo automatizado en nuestra plataforma.",
      features: [
        "Catálogo de +20 Pruebas Técnicas",
        "Evaluación de Hard Skills (Inglés, Excel)",
        "Reportes de Compatibilidad de Puesto",
        "Resultados Inmediatos en PDF"
      ]
    },
    {
      id: "integrity",
      title: "Integridad y Confianza",
      subtitle: "Blindaje contra el fraude",
      icon: <Lock size={40} className="text-[#00AEEF]" />,
      description: "Herramientas especializadas para medir la propensión a comportamientos deshonestos, robo hormiga, soborno y lealtad organizacional antes de que ocurran.",
      features: [
        "Pruebas de Honestidad (MIDOT/Trust)",
        "Detección de manipulación de datos",
        "Análisis de valores y ética laboral",
        "Prevención de riesgos patrimoniales"
      ]
    }
  ];

  // --- SECCIÓN 2: SERVICIOS CORPORATIVOS ADICIONALES ---
  const corporateServices = [
    {
      title: "Protección Civil",
      desc: "Consultoría normativa y programas internos para garantizar la seguridad física de sus instalaciones y cumplimiento gubernamental.",
      icon: <HardHat size={32} />,
      tags: ["Programas Internos", "Capacitación", "Normatividad"]
    },
    {
      title: "Gestoría Vehicular",
      desc: "Administración integral de flotillas y trámites vehiculares. Soluciones ágiles para mantener su operación móvil al día.",
      icon: <Car size={32} />,
      tags: ["Altas/Bajas", "Control de Flotillas", "Permisos"]
    },
    {
      title: "Producción & Diseño",
      desc: "Soluciones de imagen corporativa y producción audiovisual para fortalecer la identidad y comunicación de su marca.",
      icon: <Megaphone size={32} />,
      tags: ["Branding", "Producción Audiovisual", "Diseño Gráfico"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#001233] selection:bg-[#00AEEF]/30 selection:text-white font-sans antialiased">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#003399_0%,transparent_60%)]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Activity size={16} className="text-[#00AEEF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Ecosistema de Validación</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black italic uppercase text-white mb-8 tracking-tighter leading-[0.9]">
            Soluciones de <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Verificación Total</span>
          </h1>
          
          <p className="text-blue-100/70 text-xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Hemos dejado atrás los procesos manuales y subjetivos. Integramos tecnología, legalidad y psicología para brindarle <strong className="text-white">certeza absoluta</strong> sobre a quién está contratando.
          </p>
        </div>
      </section>

      {/* --- LA EVOLUCIÓN (HR Focus) --- */}
      <section className="py-24 px-6 relative bg-[#001a4d]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-6 tracking-tighter leading-none">
                La Evolución: <br/>
                <span className="text-white/30 text-2xl md:text-4xl line-through decoration-[#00AEEF] decoration-4">Socioeconómico</span>
                <span className="block text-[#00AEEF] mt-2">Vs. Background Check</span>
              </h2>
              <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
                Durante décadas, las empresas confiaron en el "Estudio Socioeconómico" tradicional: un proceso lento enfocado en visitar la casa del candidato y contar sus muebles.
              </p>
              <p className="text-white text-lg font-medium mb-8 leading-relaxed border-l-4 border-[#00AEEF] pl-6">
                En <b>Insignia 360</b>, redefinimos el estándar. Un <b>Background Check</b> es una investigación forense corporativa que valida la integridad, legalidad y veracidad de la información, blindando a su empresa contra fraudes y demandas.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#00AEEF]/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex justify-between mb-8 border-b border-white/10 pb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-white/40">Lo Tradicional</span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#00AEEF]">Insignia 360</span>
                </div>
                
                <div className="space-y-6">
                  {evolutionPoints.map((point, i) => (
                    <div key={i} className="grid grid-cols-2 gap-6 items-center group">
                      <div className="text-right opacity-50 group-hover:opacity-40 transition-opacity">
                        <p className="text-xs md:text-sm font-medium text-white leading-tight">{point.old}</p>
                      </div>
                      <div className="relative pl-6 border-l border-[#00AEEF]/30">
                        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#00AEEF] rounded-full shadow-[0_0_10px_#00AEEF]" />
                        <p className="text-xs md:text-sm font-bold text-white leading-tight">{point.new}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SUITE CAPITAL HUMANO --- */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-black uppercase text-white tracking-widest mb-4">Gestión de Talento</h3>
            <div className="w-24 h-1 bg-[#00AEEF] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hrSolutions.map((sol, index) => (
              <div key={index} className="group relative bg-[#001233] border border-white/10 p-10 rounded-[3rem] hover:border-[#00AEEF]/50 transition-all duration-500 shadow-2xl flex flex-col h-full">
                <div className="mb-8 p-5 bg-white/5 w-fit rounded-2xl group-hover:bg-[#00AEEF] group-hover:text-[#001233] transition-colors duration-300">
                  {/* CORRECCIÓN: Evitamos cloneElement si da problemas, o aseguramos el tipo */}
                  {React.cloneElement(sol.icon as React.ReactElement, { className: "group-hover:text-[#001233] transition-colors" } as any)}
                </div>
                
                <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-1">{sol.title}</h4>
                <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest mb-6">{sol.subtitle}</p>
                
                <p className="text-blue-100/60 text-sm leading-relaxed mb-8 flex-grow">
                  {sol.description}
                </p>

                <ul className="space-y-3 pt-6 border-t border-white/5">
                  {sol.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${feat.includes("Buró") ? "text-yellow-500" : "text-[#00AEEF]"}`} />
                      <span className={`text-xs font-bold ${feat.includes("Buró") ? "text-yellow-100" : "text-white/80"}`}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* LEYENDA LEGAL BURÓ */}
          <div className="mt-8 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl flex items-start gap-3 max-w-2xl mx-auto">
            <AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={18} />
            <p className="text-[10px] text-yellow-100/80 leading-relaxed text-left">
              <span className="font-bold text-yellow-500 uppercase">Aviso Legal:</span> La consulta de Buró de Crédito es un servicio opcional y sensible. Requiere estrictamente de la autorización y firma autógrafa del candidato antes de iniciar, conforme a la Ley para Regular las Sociedades de Información Crediticia.
            </p>
          </div>

        </div>
      </section>

      {/* --- CÓMO FUNCIONA (PROCESO) --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#001a4d]/20 to-[#001233]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="grid gap-6">
                {[
                  { title: "Solicitud en Plataforma", desc: "Carga tus candidatos en segundos desde nuestro dashboard o vía API.", icon: <Database /> },
                  { title: "Ejecución & Validación", desc: "El candidato realiza sus pruebas online. Nuestro equipo legal audita los antecedentes.", icon: <Search /> },
                  { title: "Entrega de Resultados", desc: "Recibe un reporte unificado (Semáforo de Riesgo) para tomar la decisión final.", icon: <FileText /> }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-[#00AEEF] pt-1">{step.icon}</div>
                    <div>
                      <h5 className="text-white font-black uppercase tracking-wide mb-2">{step.title}</h5>
                      <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 text-left lg:text-right">
              <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                Proceso <br/><span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00AEEF] to-white">Sin Fricción</span>
              </h3>
              <p className="text-blue-100/70 text-lg leading-relaxed mb-8">
                Eliminamos la burocracia del proceso de validación. Todo ocurre en un flujo digital continuo, permitiendo que RH se enfoque en la entrevista y nosotros en la seguridad.
              </p>
              <div className="inline-flex items-center gap-4 text-[#00AEEF] font-black uppercase tracking-widest text-sm border border-[#00AEEF]/30 px-6 py-3 rounded-full">
                <Clock size={18} />
                <span>Tiempo Promedio: 48 Horas</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICIOS CORPORATIVOS ADICIONALES --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#001a4d]/40 to-[#001233] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#00AEEF] font-black uppercase tracking-[0.3em] text-xs mb-2 block">Más allá de RH</span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
                Soluciones <br /> Corporativas
              </h3>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl max-w-sm">
              <AlertCircle className="text-white/60 shrink-0" size={20} />
              <p className="text-[10px] text-white/60 font-medium leading-tight">
                Estos servicios requieren un levantamiento de requerimientos específico. <br/> 
                <span className="text-[#00AEEF]">Se cotizan por proyecto.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {corporateServices.map((service, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.06] hover:border-[#00AEEF]/30 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-[#001233] rounded-2xl text-white group-hover:text-[#00AEEF] transition-colors border border-white/10 shadow-lg">
                    {service.icon}
                  </div>
                  <Link href="#contacto">
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#00AEEF] border border-[#00AEEF]/30 px-4 py-2 rounded-full hover:bg-[#00AEEF] hover:text-[#001233] transition-all">
                      Cotizar
                    </button>
                  </Link>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{service.title}</h4>
                <p className="text-blue-100/60 text-xs leading-relaxed mb-6 h-12">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, t) => (
                    <span key={t} className="text-[9px] font-bold text-white/40 bg-white/5 px-3 py-1 rounded-md uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL CON FORMULARIO INTEGRADO --- */}
      <section id="contacto" className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-[#00AEEF] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[0_0_100px_rgba(0,174,239,0.3)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-[#001233] uppercase italic tracking-tighter mb-4">
              ¿Listo para Optimizar?
            </h2>
            <p className="text-[#001233]/70 text-lg font-medium mb-10 max-w-lg mx-auto leading-tight">
              Déjanos tus datos y un consultor experto te contactará para analizar tus necesidades.
            </p>

            {submitSuccess ? (
               <div className="bg-[#001233]/10 p-6 rounded-2xl border border-[#001233]/20 animate-fade-in">
                 <CheckCircle2 size={32} className="text-[#001233] mx-auto mb-2" />
                 <h4 className="text-xl font-black text-[#001233] uppercase italic">¡Mensaje Enviado!</h4>
                 <p className="text-sm font-medium text-[#001233]/70">Tu solicitud ha sido recibida. Te contactaremos pronto.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" name="name" placeholder="NOMBRE COMPLETO *" required
                      value={formData.name} onChange={handleInputChange}
                      className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-[#001233] font-bold text-xs placeholder:text-[#001233]/60 focus:border-[#001233] outline-none transition-all uppercase tracking-wider"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" name="email" placeholder="CORREO CORPORATIVO *" required
                      value={formData.email} onChange={handleInputChange}
                      className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-[#001233] font-bold text-xs placeholder:text-[#001233]/60 focus:border-[#001233] outline-none transition-all uppercase tracking-wider"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="text" name="company" placeholder="EMPRESA / ORGANIZACIÓN"
                    value={formData.company} onChange={handleInputChange}
                    className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-[#001233] font-bold text-xs placeholder:text-[#001233]/60 focus:border-[#001233] outline-none transition-all uppercase tracking-wider"
                  />
                </div>
                <div>
                  <textarea 
                    name="message" rows={3} placeholder="¿EN QUÉ SERVICIO ESTÁS INTERESADO? *" required
                    value={formData.message} onChange={handleInputChange}
                    className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-[#001233] font-bold text-xs placeholder:text-[#001233]/60 focus:border-[#001233] outline-none transition-all uppercase tracking-wider resize-none"
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" disabled={isSubmitting} className="bg-[#001233] text-white px-12 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl disabled:opacity-70 disabled:scale-100 flex items-center gap-3 mx-auto">
                    {isSubmitting ? 'Procesando...' : 'Enviar Solicitud'} <Send size={16} />
                  </button>
                  <p className="text-[9px] text-[#001233]/50 font-bold uppercase tracking-wider mt-4">
                    Al enviar, aceptas nuestra política de privacidad.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}