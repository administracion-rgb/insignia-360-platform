'use client';
import React, { useState } from 'react';
import { 
  Check, ArrowRight, ShieldCheck, Zap, Building2, 
  TrendingDown, MousePointerClick, Layers, Rocket, 
  Users, Globe, Star, Shield, MapPin, FileText, 
  UserCheck, CreditCard, Search, Info, PlusCircle, Sparkles, Target, Ticket, Clock, AlertCircle, FileBarChart, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

// Importaciones estructurales
import Footer from '../Footer'; 
import Navbar from '@/components/ui/Navbar'; 

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('credits');
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  // Lógica de validación de cupones
  // ESTRATEGIA: El precio base ya incluye el colchón del 10%. 
  // Al dar el 20% aquí, el precio final queda atractivo pero protege tu margen.
  const handleCouponChange = (val: string) => {
    const code = val.toUpperCase();
    setCoupon(code);
    if (code === 'INSIGNIA20') setDiscount(0.20); // Regresamos al 20% estándar
    else if (code === 'INSIGNIA30') setDiscount(0.30); // Preparamos lógica para futuro 30%
    else setDiscount(0);
  };

  const applyDiscount = (price: number) => {
    const finalPrice = price * (1 - discount);
    return Math.floor(finalPrice).toLocaleString();
  };

  // GRUPO 1: CRÉDITOS ON-DEMAND (Precios Ajustados +10%)
  const groupCredits = [
    {
      // Antes: 270 -> Ahora: 299
      name: "Prueba Individual", price: 299, focus: "Evaluación Única",
      details: "Acceso a la compra de una sola prueba psicométrica técnica de nuestro catálogo base para validación puntual de conocimientos o rasgos específicos de personal operativo y administrativo. No incluye integración de batería.",
      icon: <MousePointerClick size={28} className="text-[#00AEEF]" />,
      features: ["1 Prueba técnica a elegir", "Reporte Automático PDF", "Vigencia 3 Meses", "Add-ons: Honestidad/Buró"],
      buttonText: "Adquirir Crédito", highlight: false, btnStyle: "border border-white/20 hover:bg-white/5 text-white"
    },
    {
      // Antes: 699 -> Ahora: 769
      name: "Batería Operativa", price: 769, focus: "Administrativo y Staff",
      details: "Batería completa diseñada para perfiles operativos y administrativos. Incluye 3 pruebas integradas en un solo diagnóstico ejecutivo para una validación integral de competencias administrativas y staff.",
      icon: <Layers size={28} className="text-[#00AEEF]" />,
      features: ["3 Pruebas Integradas", "Reporte Ejecutivo PDF", "Vigencia 3 Meses", "Add-ons: Honestidad/Buró"],
      buttonText: "Comprar Operativa", highlight: false, btnStyle: "border border-white/20 hover:bg-white/5 text-white"
    },
    {
      // Antes: 1049 -> Ahora: 1155
      name: "Batería Premium", price: 1155, focus: "Directivo y Gerencia",
      details: "Evaluaciones de alta complejidad (Terman, Moss, 16PF) diseñadas para perfiles de liderazgo, gerencia, directivos o puestos técnicos de alta especialización (TI/Ingenierías) que requieren un diagnóstico profundo.",
      icon: <Star size={28} className="text-[#00AEEF]" />,
      features: ["3 Pruebas de Élite", "Análisis de Liderazgo", "Vigencia 3 Meses", "Add-ons: Honestidad/Buró"],
      buttonText: "Comprar Premium", highlight: true, 
      btnStyle: "bg-[#00AEEF] text-[#001233] font-bold hover:bg-white shadow-[0_0_20px_rgba(0,174,239,0.4)]"
    },
    {
      // Antes: 428 -> Ahora: 475
      name: "Módulo Honestidad", price: 475, focus: "Blindaje Ético",
      details: "Herramienta preventiva de riesgos patrimoniales y lealtad organizacional. Analiza el apego a códigos de ética corporativos mediante métricas de sinceridad, valores y comportamiento ético laboral.",
      icon: <ShieldCheck size={28} className="text-[#2dd4bf]" />,
      features: ["Detección de Riesgos", "Escala de Sinceridad", "Vigencia 3 Meses", "Como Add-on: $149"],
      buttonText: "Añadir Blindaje", highlight: false, btnStyle: "border border-[#2dd4bf] text-[#2dd4bf] hover:bg-[#2dd4bf] hover:text-[#001233] font-bold"
    },
    // ADD-ON: BURÓ DE CRÉDITO
    {
      // Antes: 125 -> Ahora: 139
      name: "Check Buró Crédito", price: 139, focus: "Historial Financiero",
      details: "Consulta especializada del historial crediticio. Detecta sobreendeudamiento o responsabilidad patrimonial. Ideal para puestos financieros o manejo de valores.",
      icon: <FileBarChart size={28} className="text-white" />,
      features: ["Reporte + Score Riesgo", "Vigencia 3 Meses", "Add-on Opcional"],
      requiresConsent: true, // BANDERA DE PROTECCIÓN
      buttonText: "Añadir Buró", highlight: false, btnStyle: "border border-white/20 hover:bg-white/5 text-white"
    }
  ];

  // GRUPO 2: PLANES POR VACANTE (Precios Ajustados +10%)
  const groupVacancies = [
    // Antes: 1875 -> Ahora: 2065
    { name: "Plan Semilla", price: 2065, focus: "3 Vacantes", description: "Infraestructura de validación para procesos iniciales con 3 veces más capacidad y vigencia real de tres meses para optimizar procesos administrativos.", icon: <Rocket size={28} />, features: ["3 Vacantes Activas", "15 Baterías Estándar", "Vigencia 3 Meses", "Add-ons Disponibles"], savings: "Ventaja: 3 meses de uso", extraCandidate: "$180 MXN", buttonText: "Elegir Semilla", btnStyle: "border border-white/20 hover:bg-white/5 text-white" },
    // Antes: 4800 -> Ahora: 5280
    { name: "Plan Impulso", price: 5280, focus: "7 Vacantes", description: "Diseñado para empresas en fase de crecimiento con flujo constante de contrataciones. Incluye reportes comparativos para selección de talento.", icon: <TrendingDown size={28} />, features: ["7 Vacantes Activas", "35 Baterías Estándar", "Vigencia 3 Meses", "Add-ons Disponibles"], savings: "Ideal para crecimiento", extraCandidate: "$165 MXN", buttonText: "Elegir Impulso", btnStyle: "border border-white/20 hover:bg-white/5 text-white" },
    // Antes: 8175 -> Ahora: 8995
    { name: "Plan Startup", price: 8995, focus: "15 Vacantes", description: "Crecimiento continuo con validación de antecedentes penales integrada de forma acelerada. Ideal para empresas con ritmo de contratación medio-alto.", icon: <Users size={28} />, features: ["15 Vacantes Activas", "75 Baterías Estándar", "Vigencia 3 Meses", "BGC Nacional Incluido"], savings: "EL MÁS POPULAR", highlight: true, extraCandidate: "$145 MXN", buttonText: "Elegir Startup", btnStyle: "bg-[#00AEEF] text-[#001233] font-bold hover:bg-white shadow-[0_0_20px_rgba(0,174,239,0.4)]" },
    // Antes: 12300 -> Ahora: 13530
    { name: "Plan Expansión", price: 13530, focus: "25 Vacantes", description: "Consolidación operativa con el costo por evaluación más bajo del mercado para PyMEs. Soporte prioritario para reclutamiento masivo y especializado.", icon: <Building2 size={28} />, features: ["25 Vacantes Activas", "125 Baterías Estándar", "Vigencia 3 Meses", "Add-ons Disponibles"], savings: "Máxima capacidad PyME", extraCandidate: "$125 MXN", buttonText: "Elegir Expansión", btnStyle: "border border-white/20 hover:bg-white/5 text-white" }
  ];

  // GRUPO 3: CORPORATIVO UNLIMITED (Precios Ajustados +10%)
  const groupUnlimited = [
    // Antes: 4630 -> Ahora: 5095
    { name: "Unlimited Mensual", price: 5095, focus: "Acceso Total", description: "Acceso ilimitado total para cerrar proyectos críticos de un solo mes. Infraestructura de élite sin restricciones de volumen.", icon: <Zap size={28} />, features: ["Aplicaciones Ilimitadas", "Catálogo Élite (Todo)", "Vigencia 1 Mes", "Multiusuario (3)"], buttonText: "Activar Mes", highlight: false, btnStyle: "border border-white/20 hover:bg-white/5 text-white" },
    // Antes: 12920 -> Ahora: 14215
    { name: "Unlimited Trimestral", price: 14215, focus: "Estrategia RH", description: "Ahorro masivo en proyectos trimestrales con soporte especializado. Incluye soporte vía WhatsApp para atención inmediata.", icon: <Layers size={28} />, features: ["Aplicaciones Ilimitadas", "Catálogo Élite (Todo)", "Vigencia 3 Meses", "Soporte WhatsApp"], savings: "Ahorra con tu código", buttonText: "Elegir Trimestral", highlight: false, btnStyle: "border border-white/20 hover:bg-white/5 text-white" },
    // Antes: 22500 -> Ahora: 24750
    { name: "Unlimited Semestral", price: 24750, focus: "Corporativo", description: "Continuidad operativa semestral con infraestructura de élite y validación profunda. Optimizado para consultoras y departamentos de RH.", icon: <Target size={28} className="text-[#00AEEF]" />, features: ["Aplicaciones Ilimitadas", "Catálogo Élite (Todo)", "Vigencia 6 Meses", "Soporte VIP"], savings: "Plan Recomendado", buttonText: "Elegir Semestral", highlight: true, btnStyle: "bg-[#00AEEF] text-[#001233] font-bold hover:bg-white" },
    // Antes: 41418 -> Ahora: 45560
    { name: "Unlimited Anual", price: 45560, focus: "Máxima Rentabilidad", description: "La infraestructura corporativa más potente para validación anual constante. Se convierte en el estándar de validación de la organización.", icon: <Globe size={28} />, features: ["Aplicaciones Ilimitadas", "Catálogo Élite (Todo)", "Vigencia 12 Meses", "White Label (Marca)"], savings: "Mejor Valor Anual", buttonText: "Contrato Anual", highlight: false, btnStyle: "border border-white/20 hover:bg-white/5 text-white" }
  ];

  // PRECIOS BACKGROUND CHECK (También subidos +10% sobre la base anterior)
  const bcPrices = {
    // Antes: 1157 -> Ahora: 1275
    presencialStd: 1275, 
    // Antes: 1542 -> Ahora: 1695
    presencialUrg: 1695, 
    // Antes: 899 -> Ahora: 990
    digitalStd: 990,    
    // Antes: 1157 -> Ahora: 1275
    digitalUrg: 1275     
  };

  const digitalSavings = bcPrices.presencialStd - bcPrices.digitalStd; 

  const bcServices = [
    { title: "Identidad y Domicilio", desc: "Verificación de documentación oficial e identidad legal con validación de geolocalización certificada.", icon: <MapPin className="text-[#00AEEF]" size={24} /> },
    { title: "Antecedentes Penales", desc: "Búsqueda en registros públicos federales y locales para mitigación de riesgos legales institucionales.", icon: <ShieldCheck className="text-[#00AEEF]" size={24} /> },
    { title: "Historial Laboral", desc: "Confirmación de trayectoria profesional y referencias de desempeño basadas en registros verificables.", icon: <FileText className="text-[#00AEEF]" size={24} /> },
    { title: "Validación Académica", desc: "Cotejo de grados, títulos y certificados ante las autoridades educativas correspondientes.", icon: <UserCheck className="text-[#00AEEF]" size={24} /> },
    { title: "Juicios Financieros", desc: "Revisión de registros de buró de crédito para puestos con alta responsabilidad patrimonial.", icon: <CreditCard className="text-[#00AEEF]" size={24} /> },
    { title: "Mitigación de Riesgos", desc: "Análisis de riesgos organizacionales para la protección de la integridad y activos de la empresa.", icon: <Search className="text-[#00AEEF]" size={24} /> }
  ];

  return (
    <main className="min-h-screen bg-[#001233] selection:bg-[#00AEEF]/30 selection:text-white font-sans antialiased">
      <Navbar />

      <section className="relative pt-44 pb-20 px-4 overflow-hidden text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b from-[#001a4d] to-[#001233]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter leading-[0.9]">
              Niveles de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-white animate-gradient-x">Inversión</span>
            </h1>

            {/* SECCIÓN DE CUPÓN DINÁMICO */}
            <div className="max-w-md mx-auto mb-12 mt-8 animate-fade-in">
              <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#00AEEF]/10 rounded-xl text-[#00AEEF]"><Ticket size={24} /></div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Código de Convenio</p>
                    <p className="text-xs font-bold text-blue-100 italic">Ingresa <span className="text-[#00AEEF]">INSIGNIA20</span> para precio preferencial</p>
                  </div>
                </div>
                <input 
                  type="text" 
                  value={coupon} 
                  onChange={(e) => handleCouponChange(e.target.value)}
                  placeholder="INGRESA TU CÓDIGO AQUÍ"
                  className="w-full bg-[#001233] border border-white/10 rounded-xl px-5 py-4 text-white font-black tracking-widest placeholder:text-white/20 focus:border-[#00AEEF] outline-none transition-all uppercase"
                />
                {discount > 0 && (
                  <div className="absolute top-4 right-6 animate-bounce">
                    <span className="bg-[#2dd4bf] text-[#001233] text-[9px] font-black px-3 py-1 rounded-full uppercase">-{discount * 100}% Aplicado</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4 bg-white/5 p-1.5 rounded-full border border-white/10 w-fit mx-auto backdrop-blur-xl mb-16 shadow-2xl">
              {[
                {id: 'credits', label: 'Créditos y Add-ons'},
                {id: 'vacancies', label: 'Planes por Vacante'},
                {id: 'unlimited', label: 'Corporativo Unlimited'}
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)} 
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-[#00AEEF] text-[#001233] shadow-lg shadow-[#00AEEF]/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid gap-6 items-stretch animate-fade-in-up grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${activeTab === 'credits' ? 'lg:grid-cols-5' : ''} justify-center`}>
            {(activeTab === 'credits' ? groupCredits : activeTab === 'unlimited' ? groupUnlimited : groupVacancies).map((plan, index) => (
              <div key={index} className={`relative p-8 flex flex-col rounded-[2.5rem] border backdrop-blur-md transition-all duration-500 group ${(plan as any).highlight ? 'bg-white/[0.07] border-[#00AEEF] shadow-[0_0_30px_rgba(0,174,239,0.2)] z-10 scale-[1.02]' : 'bg-[#001a4d]/40 border-white/10 hover:border-white/20'}`}>
                
                {/* CORRECCIÓN: (plan as any).savings */}
                {(plan as any).savings && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00AEEF] to-[#2dd4bf] text-[#001233] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-2 shadow-lg group-hover:scale-110 transition-transform z-20 whitespace-nowrap">
                    <Sparkles size={12} /> {(plan as any).savings}
                  </div>
                )}

                <div className="mb-6 text-left relative z-10">
                  <div className={`w-12 h-12 inline-flex items-center justify-center rounded-xl mb-6 shadow-xl transition-all duration-500 group-hover:rotate-[10deg] ${(plan as any).highlight ? 'bg-[#00AEEF] text-[#001233]' : 'bg-white/5 text-white'}`}>
                    {plan.icon}
                  </div>
                  <p className={`text-[9px] font-black uppercase tracking-widest mb-2 ${(plan as any).highlight ? 'text-[#00AEEF]' : 'text-white/40'}`}>{plan.focus}</p>
                  <h3 className="text-xl font-black italic uppercase text-white mb-3 leading-tight tracking-tighter">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    {discount > 0 && <span className="text-sm line-through text-white/20 font-bold mr-2">${plan.price.toLocaleString()}</span>}
                    <span className="text-3xl font-black text-white">${applyDiscount(plan.price)}</span>
                    <span className="text-[9px] font-bold uppercase text-[#00AEEF]/70 tracking-widest">MXN</span>
                  </div>
                  
                  <p className="text-[13px] text-blue-100/70 font-medium mb-4 leading-relaxed italic group-hover:text-blue-100 transition-colors min-h-[5rem] h-auto text-left">
                    {/* CORRECCIÓN: (plan as any).details || (plan as any).description */}
                    {(plan as any).details || (plan as any).description}
                  </p>

                  {/* ALERTA DE CONSENTIMIENTO PARA BURÓ */}
                  {(plan as any).requiresConsent && (
                    <div className="mb-4 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex gap-2 items-start">
                      <AlertTriangle size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-yellow-100/90 leading-tight font-medium text-left">
                        <span className="font-bold block text-yellow-500 mb-0.5">AVISO LEGAL:</span>
                        Requiere autorización y firma autógrafa del candidato antes de iniciar.
                      </p>
                    </div>
                  )}

                  {activeTab === 'vacancies' && (plan as any).extraCandidate && (
                    <div className="flex items-center gap-2 mb-6 p-3 bg-[#00AEEF]/10 rounded-xl border border-[#00AEEF]/20">
                      <PlusCircle size={16} className="text-[#00AEEF]" />
                      <span className="text-[10px] font-bold uppercase text-[#00AEEF] tracking-widest italic">Extra: {(plan as any).extraCandidate}</span>
                    </div>
                  )}
                </div>

                <ul className="text-left space-y-3 mb-8 pt-6 border-t border-white/5 relative z-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 group/item text-left">
                      <Check size={16} className={`shrink-0 mt-0.5 transition-transform group-hover/item:scale-125 ${(plan as any).highlight ? 'text-[#00AEEF]' : 'text-white/20'}`} />
                      <span className={`text-[10px] font-bold uppercase tracking-wide leading-tight ${feature.includes("Vigencia") ? "text-white font-black" : "text-blue-100/80"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-xl font-black uppercase text-[9px] tracking-widest mt-auto transition-all active:scale-95 z-10 ${(plan as any).btnStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))
          }
        </div>
        <div className="mt-16 p-6 border border-white/5 rounded-2xl bg-white/[0.02] max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-2 leading-relaxed text-center">
            * Add-ons (Honestidad/Buró) requieren compra base o plan activo. Vigencia de créditos y PyME: 3 meses. Precios antes de IVA.
          </p>
        </div>
      </div>
    </section>

    {/* SECCIÓN BACKGROUND CHECK 360 - TEXTOS DE VALOR COMPLETOS */}
    <section className="bg-[#001233] py-32 px-6 relative overflow-hidden border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="animate-fade-in mb-20 text-center">
          <h2 className="text-4xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none text-center">Background Check <br/><span className="text-[#00AEEF]">360°</span></h2>
          <p className="text-blue-100/70 max-w-3xl mx-auto text-lg font-medium leading-relaxed italic text-center">
            Seguridad institucional mediante validación objetiva de antecedentes. Procesos auditados bajo protocolos de estricto cumplimiento legal e integridad corporativa para la mitigación de riesgos patrimoniales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
          {/* Tarjeta Presencial */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md flex flex-col justify-between hover:bg-white/[0.07] transition-colors duration-500 shadow-2xl relative overflow-hidden group text-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2dd4bf]/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-left">
              <div className="flex items-center justify-between mb-10 flex-wrap gap-4 text-left">
                <div className="flex items-center gap-5 text-left">
                  <div className="p-4 bg-white/5 rounded-2xl text-[#2dd4bf] shadow-inner border border-white/5"><Globe size={32} /></div>
                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none text-left">Estudio<br/>Presencial</h3>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 italic text-left">
                  <MapPin size={12} className="text-[#2dd4bf]" /> CDMX y EDOMEX*
                </div>
              </div>
              <p className="text-white/60 text-base mb-10 leading-relaxed font-medium italic border-l-2 border-[#2dd4bf] pl-4 min-h-[4rem] text-left">
                Validación directa en el entorno domiciliario mediante protocolos presenciales estandarizados. Confirmamos identidad y ubicación geográfica con estricto apego legal.
              </p>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center p-7 bg-white/5 rounded-2xl border border-white/5 hover:border-[#2dd4bf]/30 transition-all text-left">
                  <div className="text-left font-bold uppercase text-left">
                    <p className="text-[10px] text-[#2dd4bf] tracking-[0.2em] mb-1 text-left">Servicio Estándar</p>
                    <p className="text-white/40 text-[10px] italic tracking-tighter text-left">3 a 5 días hábiles</p>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    {discount > 0 && <span className="text-xs line-through text-white/20 font-bold text-right">${bcPrices.presencialStd.toLocaleString()}</span>}
                    <span className="text-3xl font-black text-white tracking-tighter text-right">${applyDiscount(bcPrices.presencialStd)} <span className="text-xs text-white/40 uppercase text-right">MXN</span></span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-7 bg-[#00AEEF]/5 rounded-2xl border border-[#00AEEF]/10 hover:border-[#00AEEF]/40 transition-all text-left">
                  <div className="text-left font-bold uppercase text-left">
                    <p className="text-[10px] text-[#00AEEF] tracking-[0.2em] mb-1 text-left">Servicio Urgente</p>
                    <p className="text-white/40 text-[10px] italic tracking-tighter text-left">Resultados en &lt; 3 días</p>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    {discount > 0 && <span className="text-xs line-through text-white/20 font-bold text-right">${bcPrices.presencialUrg.toLocaleString()}</span>}
                    <span className="text-3xl font-black text-white tracking-tighter text-right">${applyDiscount(bcPrices.presencialUrg)} <span className="text-xs text-white/40 uppercase text-right">MXN</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Remota */}
          <div className="bg-gradient-to-br from-[#00AEEF]/15 via-transparent to-transparent border border-[#00AEEF]/30 p-10 rounded-[3rem] backdrop-blur-md relative overflow-hidden flex flex-col justify-between text-left shadow-[0_0_50px_rgba(0,174,239,0.1)] group text-left">
            <div className="absolute top-8 right-10 bg-[#00AEEF] text-[#001233] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#00AEEF]/30 italic text-left">Toda la República</div>
            <div className="relative z-10 text-left">
              <div className="flex items-center gap-5 mb-10 text-left">
                  <div className="p-4 bg-[#00AEEF]/20 rounded-2xl text-[#00AEEF] shadow-inner border border-[#00AEEF]/20 group-hover:scale-110 transition-transform text-left"><Zap size={32} /></div>
                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none text-left">Validación<br/>Digital</h3>
              </div>
              <p className="text-blue-100/70 text-base mb-10 leading-relaxed font-medium italic border-l-2 border-[#00AEEF] pl-4 min-h-[4rem] text-left">
                Entrevista remota avanzada con verificación de identidad y geolocalización en tiempo real. Máxima eficiencia corporativa mediante procesos 100% no invasivos y auditables.
              </p>
              <div className="space-y-4 mb-10 text-left">
                <div className="flex justify-between items-center px-8 py-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all text-left">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-left">Digital Estándar</p>
                  <div className="flex flex-col items-end text-right">
                    {discount > 0 && <span className="text-xs line-through text-white/20 font-bold text-right">${bcPrices.digitalStd.toLocaleString()}</span>}
                    <span className="text-2xl font-black text-[#00AEEF] tracking-tighter text-right">${applyDiscount(bcPrices.digitalStd)} MXN</span>
                  </div>
                </div>
                <div className="flex justify-between items-center px-8 py-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all text-left">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-left">Digital Urgente</p>
                  <div className="flex flex-col items-end text-right">
                    {discount > 0 && <span className="text-xs line-through text-white/20 font-bold text-right">${bcPrices.digitalUrg.toLocaleString()}</span>}
                    <span className="text-2xl font-black text-[#00AEEF] tracking-tighter text-right">${applyDiscount(bcPrices.digitalUrg)} MXN</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center p-7 bg-[#001233]/80 rounded-2xl border border-[#00AEEF]/20 shadow-2xl relative overflow-hidden text-center">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00AEEF]" />
                  <span className="text-[#00AEEF] font-black uppercase tracking-[0.2em] text-xs italic text-left">Ahorro Digital: -${digitalSavings}</span>
                  <button className="bg-[#00AEEF] text-[#001233] px-10 py-3.5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-lg active:scale-95 italic text-center">Cotizar Remoto</button>
              </div>
            </div>
          </div>
        </div>

        {/* NOTA LEGAL Y TÉRMINOS DE ENTREGA */}
        <div className="mt-8 mb-12 p-4 border border-[#00AEEF]/20 rounded-2xl bg-[#00AEEF]/5 flex gap-4 items-start text-left max-w-4xl mx-auto">
          <AlertCircle className="text-[#00AEEF] shrink-0 mt-1" size={20} />
          <p className="text-[11px] text-blue-100/80 leading-relaxed font-medium">
            <span className="font-bold text-[#00AEEF] uppercase tracking-wider block mb-1">Política de Tiempos de Entrega:</span>
            Los tiempos de respuesta están calculados en <span className="text-white font-bold">días hábiles</span> y comienzan a contar a partir de la recepción completa de la información. El cumplimiento del plazo depende estrictamente de la <span className="text-white font-bold">participación activa del candidato</span>; cualquier demora en la entrega de documentos o falta de respuesta por parte del evaluado pausará el cronograma de análisis hasta su reactivación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {bcServices.map((s, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-[#00AEEF]/40 hover:bg-[#001a4d]/60 transition-all duration-500 text-left shadow-xl h-full">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-[#00AEEF]/10 group-hover:scale-110 transition-all duration-500 border border-white/5 shadow-inner text-left">{s.icon}</div>
              <h4 className="text-white font-bold text-[13px] mb-3 uppercase tracking-widest leading-none border-l-2 border-[#00AEEF] pl-3 italic text-left">{s.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed font-medium group-hover:text-white/70 transition-colors italic leading-relaxed text-left">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);
}