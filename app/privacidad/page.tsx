// 1. Importamos el Footer nuevo (desde ../)
import Footer from '../Footer';
import { ShieldCheck, Lock, FileText, UserCheck, EyeOff } from 'lucide-react';

export default function PrivacidadPage() {
  return (
    // 2. Cambiamos el fondo a modo oscuro (bg-darkBg) y el texto a blanco
    <main className="min-h-screen bg-darkBg font-sans text-gray-300">
      
      {/* NOTA: Navbar quitado para evitar duplicados */}
      
      {/* Encabezado de Sección (Adaptado a Oscuro) */}
      <div className="pt-32 pb-12 bg-black/40 text-white text-center border-b border-white/5 relative">
        <div className="absolute inset-0 bg-primary-purple/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-purple/20 text-primary-purple px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-primary-purple/30">
            <ShieldCheck size={16} /> Documento Legal Obligatorio
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Aviso de Privacidad Integral</h1>
          <p className="text-gray-400 text-lg font-light">Compromiso total con la protección y tratamiento ético de sus datos personales.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24 relative z-20">
        <div className="bg-[#0B0E14] p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white/10 backdrop-blur-xl">
          
          {/* Identificación del Responsable */}
          <div className="mb-12 pb-8 border-b border-white/10">
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              <b>ESKSPERT SOLUCIONES INTEGRALES</b> (en lo sucesivo, el "RESPONSABLE"), con domicilio legal en Álvaro Obregón M21, Colonia Ampliación Los Reyes, C.P. 56400, Estado de México, en estricto cumplimiento a la <b>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</b>, pone a disposición de los Titulares el presente documento.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* 1. DATOS PERSONALES */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-purple/20 text-primary-purple rounded-lg"><FileText size={20}/></div>
                <h2 className="text-xl font-black uppercase tracking-wider text-white">1. Datos Personales que se recaban</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-purple/30 transition-colors">
                  <h4 className="font-bold mb-2 text-white">Identificación e Imagen</h4>
                  <p className="text-gray-500 leading-relaxed">Nombre, INE, CURP, RFC y NSS. Fotografías del rostro y cuerpo completo para validación de identidad física.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-purple/30 transition-colors">
                  <h4 className="font-bold mb-2 text-white">Entorno y Geolocalización</h4>
                  <p className="text-gray-500 leading-relaxed">Domicilio y <b>geolocalización</b>. Evidencias fotográficas de fachadas e interiores para validar habitabilidad.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-purple/30 transition-colors">
                  <h4 className="font-bold mb-2 text-white">Datos Laborales y Académicos</h4>
                  <p className="text-gray-500 leading-relaxed">Trayectoria profesional, nóminas, certificados escolares y validación documental oficial.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-purple/30 transition-colors">
                  <h4 className="font-bold mb-2 text-white">Datos Patrimoniales</h4>
                  <p className="text-gray-500 leading-relaxed">Información detallada sobre vivienda y servicios contratados.</p>
                </div>
              </div>
            </section>

            {/* 2. FINALIDADES */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-purple/20 text-primary-purple rounded-lg"><UserCheck size={20}/></div>
                <h2 className="text-xl font-black uppercase tracking-wider text-white">2. Finalidades del Tratamiento</h2>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-gray-400">
                <li>Realización de estudios socioeconómicos y laborales para terceros.</li>
                <li>Validación de autenticidad de documentación proporcionada.</li>
                <li>Corroboración de referencias personales, laborales y académicas.</li>
                <li>Integración de expedientes de investigación de identidad.</li>
              </ul>
              <div className="mt-6 p-6 bg-accent-green/10 border border-accent-green/20 rounded-2xl flex gap-4">
                <EyeOff className="text-accent-green shrink-0" size={24} />
                <p className="text-sm text-accent-green">
                  <b>CLÁUSULA DE NO MERCADOTECNIA:</b> ESKSPERT SOLUCIONES INTEGRALES <b>NO</b> utilizará su información para fines publicitarios, prospección comercial ni venta de bases de datos.
                </p>
              </div>
            </section>

            {/* 3. TRANSFERENCIA */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-purple/20 text-primary-purple rounded-lg"><Lock size={20}/></div>
                <h2 className="text-xl font-black uppercase tracking-wider text-white">3. Transferencia de Datos</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                Sus datos y resultados serán transferidos exclusivamente a las <b>Empresas Clientes</b> que han contratado la evaluación para fines de contratación laboral o relación comercial.
              </p>
              <p className="text-xs text-gray-600 italic">
                Fundamento previsto en el Artículo 37 fracción IV y VII de la LFPDPPP.
              </p>
            </section>

            {/* 5. DERECHOS ARCO */}
            <section className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-xl">
              <h2 className="text-xl font-black uppercase tracking-wider mb-6 text-white">5. Ejercicio de Derechos ARCO</h2>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">Usted puede Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos enviando su solicitud a:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-bold text-primary-purple uppercase mb-1">Área Responsable</p>
                  <p className="text-sm font-bold text-white">Departamento de Protección de Datos</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-purple uppercase mb-1">Correo Electrónico</p>
                  <p className="text-sm font-bold underline text-white">administracion@insigniasoluciones.com</p>
                </div>
              </div>
            </section>

            <div className="pt-12 text-center border-t border-white/10">
              <p className="text-xs font-black text-gray-600 uppercase tracking-[0.2em]">Última actualización: 19 de septiembre de 2025</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}