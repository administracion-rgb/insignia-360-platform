'use client';
import React from 'react';
import { 
  Brain, UserCheck, ShieldAlert, BadgeDollarSign, 
  TrendingUp, Briefcase, Sparkles, Lock, Zap, Cpu, 
  PlusCircle, Target, Layers, ChevronRight, MousePointerClick, Check, ShieldCheck, Stethoscope, Scale, HeartPulse
} from 'lucide-react';

export default function CatalogDetails() {
  // 1. RESUMEN DE IMPACTO (Actualizado: Hard Skills sube a 15 pruebas por el desglose)
  const catalogSummary = [
    { title: "IQ & Cognitivo", count: "8 Pruebas", icon: <Brain size={22} /> },
    { title: "Comportamiento", count: "6 Pruebas", icon: <UserCheck size={22} /> },
    { title: "EQ Emocional", count: "4 Pruebas", icon: <Sparkles size={22} /> },
    { title: "Blindaje Ético", count: "5 Pruebas", icon: <ShieldCheck size={22} /> },
    { title: "NOM-035 & Salud", count: "3 Pruebas", icon: <HeartPulse size={22} /> },
    { title: "Hard Skills", count: "15 Pruebas", icon: <Cpu size={22} /> }
  ];

  // 2. DICCIONARIO DE BATERÍAS (12 VARIACIONES)
  const recommendedBatteries = [
    {
      name: "Operativa A: Filtro Ágil",
      tier: "Operativa",
      availability: "Incluida en todos los planes",
      focus: "Masivos / Staffing",
      icon: <Zap className="text-tech-accent" size={28} />,
      config: ["Wonderlic (IQ Ágil)", "Cleaver (Conducta)", "Honestidad"],
      description: "Optimizado para procesos de alta velocidad. Mide capacidad de aprendizaje inmediato y confiabilidad básica."
    },
    {
      name: "Operativa B: Logística MIDOT",
      tier: "Operativa",
      availability: "Incluida en todos los planes",
      focus: "Almacén / Distribución",
      icon: <ShieldAlert className="text-tech-secondary" size={28} />,
      config: ["MIDOT (Integridad Pro)", "Barsit (IQ)", "Lüscher (Estrés)"],
      description: "Blindaje contra robo hormiga y soborno. Analiza la estabilidad emocional bajo jornadas operativas intensas."
    },
    {
      name: "Operativa C: Atención Cliente",
      tier: "Operativa",
      availability: "Incluida en todos los planes",
      focus: "Service / Call Center",
      icon: <UserCheck className="text-tech-accent" size={28} />,
      config: ["DISC (Social)", "Zavic (Valores)", "Pruebas Office"],
      description: "Identifica la empatía, el apego a procesos de servicio y las habilidades digitales básicas necesarias para el puesto."
    },
    {
      name: "Operativa D: Ventas Retail",
      tier: "Operativa",
      availability: "Incluida en todos los planes",
      focus: "Fuerza de Ventas Base",
      icon: <BadgeDollarSign className="text-tech-accent" size={28} />,
      config: ["IPV (Ventas)", "Cleaver (Empuje)", "Zavic (Intereses)"],
      description: "Analiza la combatividad comercial, tolerancia a la frustración y cierre de ventas en sectores masivos."
    },
    {
      name: "Operativa E: Salud Laboral",
      tier: "Operativa",
      availability: "Incluida en todos los planes",
      focus: "Prevención NOM-035",
      icon: <HeartPulse className="text-tech-secondary" size={28} />,
      config: ["Burnout Test", "Lüscher (Psicofisiológico)", "Cleaver (Estrés)"],
      description: "Mapeo preventivo de agotamiento y riesgos psicosociales. Ideal para diagnósticos de clima organizacional masivos."
    },
    {
      name: "Operativa F: Administrativa Base",
      tier: "Operativa",
      availability: "Incluida en todos los planes",
      focus: "Auxiliares / Recepción",
      icon: <Layers className="text-tech-accent" size={28} />,
      config: ["Barsit (IQ)", "Gordon (Personalidad)", "Pruebas Office"],
      description: "Valida la agilidad en ejecución administrativa básica y el ajuste conductual a normas de oficina."
    },
    {
      name: "Premium A: Financiera Hartman",
      tier: "Premium",
      availability: "Exclusiva Plan Startup",
      note: "Planes menores: Adquisición individual",
      focus: "Contabilidad / Tesorería",
      icon: <Scale className="text-[#00AEEF]" size={28} />,
      config: ["Hartman (Juicio Ético)", "Terman (IQ)", "Kostick (Conducta)"],
      description: "Diagnóstico de alta seguridad. Mide la calidad de toma de decisiones éticas y capacidad analítica financiera."
    },
    {
      name: "Premium B: TI Especialista",
      tier: "Premium",
      availability: "Exclusiva Plan Startup",
      note: "Planes menores: Adquisición individual",
      focus: "Ingeniería / Arquitectura",
      icon: <Cpu className="text-tech-accent" size={28} />,
      config: ["Ciesman (IQ 10 áreas)", "MSCEIT (EQ)", "16PF (Personalidad)"],
      description: "Valida la agilidad cognitiva detallada y la madurez emocional para liderar proyectos tecnológicos complejos."
    },
    {
      name: "Premium C: Gerencia Estratégica",
      tier: "Premium",
      availability: "Exclusiva Plan Startup",
      note: "Planes menores: Adquisición individual",
      focus: "Mandos Medios / Gerencia",
      icon: <TrendingUp className="text-tech-secondary" size={28} />,
      config: ["BarOn EQ-i (EQ)", "Moss (Liderazgo)", "Shipley-2 (IQ)"],
      description: "Evaluación de alto impacto. Analiza el liderazgo emocional, adaptabilidad al cambio y visión estratégica."
    },
    {
      name: "Premium D: Legal & Compliance",
      tier: "Premium",
      availability: "Exclusiva Plan Startup",
      note: "Planes menores: Adquisición individual",
      focus: "Jurídico / Auditoría",
      icon: <ShieldCheck className="text-[#00AEEF]" size={28} />,
      config: ["Hartman (Valores)", "Raven (Lógica)", "Allport (Ética)"],
      description: "Especializada para roles que garantizan el cumplimiento normativo. Mide objetividad y juicio moral profundo."
    },
    {
      name: "Premium E: Desarrollo de Talento",
      tier: "Premium",
      availability: "Exclusiva Plan Startup",
      note: "Planes menores: Adquisición individual",
      focus: "RH / Sucesión",
      icon: <Sparkles className="text-tech-accent" size={28} />,
      config: ["BarOn EQ-i (EQ)", "MSCEIT (EQ)", "MBTI (Comunicación)"],
      description: "Análisis exhaustivo de inteligencia emocional para planes de desarrollo de alto potencial."
    },
    {
      name: "Premium F: Alta Dirección Élite",
      tier: "Premium",
      availability: "Exclusiva Plan Startup",
      note: "Planes menores: Adquisición individual",
      focus: "Directivos C-Level",
      icon: <Target className="text-tech-secondary" size={28} />,
      config: ["Shipley-2 (IQ)", "Reddin (Efectividad)", "Hogan (Riesgos)"],
      description: "La evaluación más potente del catálogo. Analiza potencial directivo puro y descarriladores de liderazgo."
    }
  ];

  // 3. CATÁLOGO TÉCNICO COMPLETO
  const testGroups = [
    {
      title: "Inteligencia y Capacidad Cognitiva",
      icon: <Brain className="text-tech-accent" size={32} />,
      focus: "Potencial de Aprendizaje",
      description: "Baterías diseñadas para medir la resolución de problemas complejos y la velocidad de procesamiento de información científica.",
      tests: [
        { name: "Terman Merrill", target: "Premium", desc: "Mide el Coeficiente Intelectual avanzado para niveles de mando y staff especializado." },
        { name: "Ciesman", target: "Premium", desc: "Mide niveles de inteligencia detallados en 10 áreas críticas de resolución lógica." },
        { name: "Shipley-2", target: "Premium", desc: "Distingue entre inteligencia cristalizada (conocimiento) y fluida (razonamiento)." },
        { name: "Wonderlic", target: "Operativo", desc: "Prueba ágil de inteligencia (12 min) estándar para procesos masivos de selección." },
        { name: "Raven / Dominós", target: "General", desc: "Inteligencia lógica pura y capacidad de abstracción no verbal avanzada." },
        { name: "Barsit / Beta III", target: "Operativo", desc: "Inteligencia general y aprendizaje rápido para niveles operativos y técnicos." }
      ]
    },
    {
      title: "Inteligencia Emocional (EQ)",
      icon: <Sparkles className="text-tech-accent" size={32} />,
      focus: "Madurez y Liderazgo",
      description: "Analiza la capacidad de percibir, usar, comprender y manejar las emociones para el éxito social y laboral.",
      tests: [
        { name: "BarOn EQ-i 2.0", target: "Premium", desc: "Evaluación líder mundial en inteligencia emocional para puestos directivos y de mando." },
        { name: "MSCEIT", target: "Premium", desc: "Mide EQ basado en habilidades mediante resolución de problemas afectivos." }
      ]
    },
    {
      title: "NOM-035 & Salud Ocupacional",
      icon: <HeartPulse className="text-tech-secondary" size={32} />,
      focus: "STPS Compliance",
      description: "Validación integral para el cumplimiento normativo ante la Secretaría del Trabajo y Previsión Social (STPS) y mitigación de riesgos psicosociales.",
      tests: [
        { name: "Guía de Referencia I, II y III", target: "STPS", desc: "Cuestionarios oficiales para la identificación de acontecimientos traumáticos severos y factores de riesgo psicosocial." },
        { name: "Test de Burnout (Maslach)", target: "General", desc: "Mide niveles de agotamiento emocional, despersonalización y realización personal en el trabajo." },
        { name: "Estabilidad Psicofísica", target: "Operativo", desc: "Evaluación del afrontamiento de estrés agudo y estabilidad clínica para puestos críticos." }
      ]
    },
    {
      title: "Personalidad y Comportamiento",
      icon: <UserCheck className="text-tech-accent" size={32} />,
      focus: "Ajuste Cultural",
      description: "Analizan la reacción bajo presión y el estilo de interacción natural dentro de la cultura organizacional.",
      tests: [
        { name: "Cleaver / DISC", target: "Operativo", desc: "Describe reacciones ante estrés laboral y empuje profesional diario." },
        { name: "Kostick / Gordon", target: "General", desc: "Analiza dimensiones conductuales y rasgos de personalidad aplicada." },
        { name: "16PF / MBTI", target: "Premium", desc: "Rasgos de personalidad completa y polaridades de comunicación ejecutiva." }
      ]
    },
    {
      title: "Confianza, Ética y Honestidad",
      icon: <ShieldAlert className="text-tech-secondary" size={32} />,
      focus: "Gestión de Riesgos",
      description: "Protocolos cruciales para detectar riesgos patrimoniales, lealtad y propensión a actos deshonestos en la empresa.",
      tests: [
        { name: "MIDOT", target: "Operativo", desc: "Blindaje especializado para detectar riesgos de soborno, robo y deshonestidad laboral." },
        { name: "Hartman (HVP)", target: "Premium", desc: "Perfil de valores que mide la capacidad de juicio y la calidad de toma de decisiones éticas." },
        { name: "Zavic / Allport", target: "General", desc: "Evaluación de valores morales, intereses y ética profesional institucional." }
      ]
    },
    {
      title: "Competencias Hard Skills",
      icon: <Cpu className="text-tech-accent" size={32} />,
      focus: "Habilidades Técnicas",
      description: "Evaluaciones automatizadas de conocimientos específicos por área funcional.",
      tests: [
        { name: "Excel Básico", target: "General", desc: "Manejo de celdas, formato condicional y operaciones aritméticas básicas." },
        { name: "Excel Intermedio", target: "General", desc: "Tablas dinámicas, filtros avanzados y funciones lógicas." },
        { name: "Excel Avanzado", target: "Premium", desc: "Macros, VBA, Power Pivot y modelado de datos complejos." },
        { name: "Inglés Básico (A1-A2)", target: "General", desc: "Comprensión de frases cotidianas y comunicación elemental." },
        { name: "Inglés Intermedio (B1-B2)", target: "General", desc: "Redacción de correos y fluidez en conversaciones técnicas medias." },
        { name: "Inglés Avanzado (C1-C2)", target: "Premium", desc: "Dominio nativo para negociación ejecutiva y terminología especializada." },
        { name: "Contabilidad General", target: "Premium", desc: "Conocimientos contables, fiscales y auditoría avanzada." },
        { name: "Marketing Digital", target: "Premium", desc: "Conceptos de SEO, SEM y redes sociales." },
        { name: "Gestión de Proyectos", target: "Premium", desc: "Metodologías ágiles y planificación (PMI/Scrum)." },
        { name: "Word & PowerPoint", target: "General", desc: "Manejo de documentos y presentaciones corporativas." },
        { name: "Ventas Técnicas", target: "Comercial", desc: "Conocimiento de ciclo de ventas y negociación." },
        { name: "Atención al Cliente", target: "Servicio", desc: "Resolución de conflictos y etiqueta telefónica." },
        { name: "Ortografía/Redacción", target: "Admin", desc: "Calidad de escritura y comunicación escrita." },
        { name: "Razonamiento Numérico", target: "Finanzas", desc: "Agilidad en cálculos y lógica matemática." },
        { name: "Razonamiento Verbal", target: "Legal", desc: "Comprensión lectora y vocabulario avanzado." }
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#001233] perspective-1000">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#003399_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* INTRODUCCIÓN */}
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-[#001a4d]/50 border border-tech-accent/30 text-tech-accent mb-10 shadow-xl">
            <span className="font-bold uppercase tracking-[0.3em] text-[11px]">Infraestructura Psicométrica 2025</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.8]">
            Nuestras <br /><span className="text-[#00AEEF]">Pruebas</span>
          </h1>
          <p className="text-blue-100/70 max-w-4xl mx-auto text-2xl italic leading-relaxed mb-16">
            Segmentación estratégica de blindaje psicométrico. Módulos Premium exclusivos para Plan Startup y baterías Operativas globales para toda la organización.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-16">
            {catalogSummary.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-all group border-b-4 border-b-[#00AEEF]/20 shadow-xl flex flex-col items-center">
                <div className="text-[#00AEEF] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-center">
                  <p className="text-[11px] font-black text-white/40 uppercase leading-none mb-1.5">{item.title}</p>
                  <p className="text-xl font-bold text-white leading-none">{item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GRID DE BATERÍAS */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <h2 className="text-3xl font-black text-white uppercase italic tracking-widest text-center">Protocolos Sugeridos</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {recommendedBatteries.map((bat, i) => (
              <div key={i} className="group relative bg-[#001a4d]/60 border border-white/10 rounded-[3.5rem] p-10 hover:border-[#00AEEF]/50 transition-all duration-500 shadow-2xl flex flex-col justify-between h-full">
                <div className={`absolute -top-3.5 left-10 px-6 py-1 rounded-full text-[11px] font-black uppercase tracking-widest shadow-xl ${bat.tier === 'Premium' ? 'bg-gradient-to-r from-[#00AEEF] to-[#2dd4bf] text-[#001233]' : 'bg-white/20 text-white'}`}>
                   {bat.tier} Tier
                </div>

                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-white/5 rounded-2xl text-tech-accent shadow-inner border border-white/5 group-hover:rotate-6 transition-transform">{bat.icon}</div>
                    <span className="text-[11px] font-black text-blue-100/30 uppercase text-right leading-tight max-w-[110px]">{bat.availability}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic mb-5 leading-tight">{bat.name}</h3>
                  <p className="text-blue-100/60 text-base italic leading-relaxed mb-8 min-h-[5rem]">{bat.description}</p>
                  
                  <div className="space-y-2.5 pt-8 border-t border-white/5">
                    <p className="text-[11px] font-black text-white/40 uppercase tracking-widest mb-3">Tests Sugeridos:</p>
                    {bat.config.map((test, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-bold text-blue-100/80">
                        <Check size={16} className="text-tech-accent shrink-0" /> {test}
                      </div>
                    ))}
                  </div>
                </div>

                {bat.note && (
                  <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 p-5 rounded-2xl text-center mt-10 shadow-inner">
                    <p className="text-[#00AEEF] text-[10px] font-black uppercase tracking-widest italic">{bat.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SEPARADOR VISUAL */}
        <div className="mb-32 flex flex-col items-center gap-8">
          <div className="w-full flex items-center gap-10">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20" />
            <div className="flex items-center gap-5">
               <Cpu className="text-[#00AEEF]" size={28} />
               <h2 className="text-3xl font-black text-white uppercase italic tracking-[0.5em] text-center">Catálogo Técnico</h2>
               <Cpu className="text-[#00AEEF]" size={28} />
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/20" />
          </div>
          <p className="text-[#00AEEF] text-sm font-bold uppercase tracking-[0.4em] italic opacity-60">Métrica científica & STPS Compliance</p>
        </div>

        {/* CATÁLOGO TÉCNICO DETALLADO */}
        <div className="grid gap-12 text-left mb-24">
          {testGroups.map((group, idx) => (
            <div key={idx} className="group relative bg-[#001a4d]/40 border border-white/5 rounded-[4.5rem] p-16 transition-all duration-500 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[150px] pointer-events-none" />
              
              <div className="flex flex-col xl:flex-row gap-20 relative z-10 text-left">
                <div className="xl:w-1/3 text-left">
                  <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center mb-10 text-tech-accent shadow-xl ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">{group.icon}</div>
                  <p className="text-tech-accent text-[12px] font-black uppercase tracking-[0.4em] mb-3 italic">{group.focus}</p>
                  <h3 className="text-5xl font-black text-white uppercase italic mb-6 leading-none tracking-tighter">{group.title}</h3>
                  <p className="text-blue-100/60 text-lg leading-relaxed italic">{group.description}</p>
                </div>
                
                <div className="xl:w-2/3 grid md:grid-cols-2 gap-8">
                  {group.tests.map((test, tIdx) => (
                    <div key={tIdx} className="bg-[#001233]/80 border border-white/10 p-10 rounded-[3rem] hover:bg-white/[0.05] hover:border-[#00AEEF]/40 transition-all flex flex-col justify-between shadow-lg h-full">
                      <div>
                        {/* HEADER DE LA TARJETA */}
                        <div className="flex justify-between items-start gap-3 mb-5">
                          <h4 className="text-white font-black uppercase text-lg italic tracking-tight leading-none flex-1 break-words hyphens-auto">
                            {test.name}
                          </h4>
                          <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full shrink-0 ${test.target === 'Premium' || test.target === 'STPS' || test.target === 'TI' ? 'bg-[#00AEEF] text-[#001233]' : 'bg-white/10 text-white/40 border border-white/5'}`}>
                            {test.target}
                          </span>
                        </div>
                        <p className="text-base text-blue-100/40 leading-relaxed italic line-clamp-3">{test.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 p-20 bg-gradient-to-br from-[#001a4d] to-[#001233] border border-white/10 rounded-[6rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-accent/10 rounded-full blur-[180px]" />
          <h4 className="text-5xl md:text-8xl font-black text-white uppercase italic mb-8 tracking-tighter leading-none">¿Paquete <br /><span className="text-tech-accent">Personalizado?</span></h4>
          <p className="text-blue-100/70 text-xl max-w-4xl mx-auto mb-12 italic text-center text-balance leading-relaxed">Fusionamos protocolos psicométricos avanzados con validaciones de entorno para diseñar la solución de blindaje exacta para su empresa.</p>
          <button className="bg-tech-accent text-[#001233] px-16 py-6 rounded-full font-black uppercase text-xl tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_60px_rgba(0,174,239,0.3)] italic active:scale-95">Consultar con un Experto</button>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#001233] to-transparent z-20 pointer-events-none" />
    </section>
  );
}