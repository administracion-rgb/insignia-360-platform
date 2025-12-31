'use client';
import React, { useState, useMemo } from 'react';
import { Layout, Wallet, ShoppingBag, ShoppingCart, LogOut, Settings, X } from 'lucide-react';

// IMPORTACIÓN DE MÓDULOS (SI ESTÁN EN LA MISMA CARPETA USA ./)
import ClientOperations from './ClientOperations';
import ClientResources from './ClientResources';
import ClientMarketplace from './ClientMarketplace';
import ClientCart from './ClientCart';
import ClientSettingsView from './ClientSettingsView';

const ACTIVE_PLAN = {
  name: "PLAN IMPULSO",
  maxVacancies: 7, usedVacancies: 3,
  maxBatteries: 35, usedBatteries: 12,
  validUntil: "12 Abril 2026"
};

interface ClientViewProps { isOwner?: boolean; onExit?: () => void; }

export default function ClientView({ isOwner = false, onExit }: ClientViewProps) {
  const [activeSection, setActiveSection] = useState<'operacion' | 'recursos' | 'tienda' | 'carrito' | 'configuracion'>('operacion');
  
  const [cart, setCart] = useState<any[]>([]);
  const [coupon, setCoupon] = useState('INSIGNIA20');
  const [discountPercent, setDiscountPercent] = useState(0.20);
  const [couponMessage, setCouponMessage] = useState('¡Cupón de bienvenida aplicado! 20% OFF.');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgcModalOpen, setBgcModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const applyCoupon = (code: string) => {
    const cleanCode = code.toUpperCase().trim();
    setCoupon(cleanCode);
    if (cleanCode === 'INSIGNIA20') { setDiscountPercent(0.20); setCouponMessage('¡Cupón INSIGNIA20 aplicado! 20% de descuento.'); } 
    else if (cleanCode === 'PARTNER30') { setDiscountPercent(0.30); setCouponMessage('¡Código Partner aplicado! 30% de descuento.'); } 
    else if (cleanCode === '') { setDiscountPercent(0); setCouponMessage(''); } 
    else { setDiscountPercent(0); setCouponMessage('Código no válido'); }
  };

  const addToCart = (item: any) => setCart([...cart, item]);
  const removeFromCart = (index: number) => { const newCart = [...cart]; newCart.splice(index, 1); setCart(newCart); };

  const cartTotal = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const discountAmount = subtotal * discountPercent;
    const iva = (subtotal - discountAmount) * 0.16;
    const total = (subtotal - discountAmount) + iva;
    return { subtotal, discountAmount, iva, total };
  }, [cart, discountPercent]);

  // Funciones puente
  const handleOpenBgc = (service: string, type?: 'Estándar' | 'Urgente') => {
      if (type) {
         // Precio simulado para demostración
         const price = service.includes('Digital') ? (type === 'Estándar' ? 990 : 1275) : (type === 'Estándar' ? 1275 : 1695);
         addToCart({ id: `bgc_${Math.random()}`, name: `${service} (${type})`, price: price, type: 'BGC' });
      } else {
         setSelectedService(service);
         setBgcModalOpen(true);
      }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700 font-sans pb-24 relative">
      <div className="flex justify-between items-center mb-8 px-4">
        {isOwner && onExit && ( <button onClick={onExit} className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors text-xs font-bold uppercase"><LogOut size={16} /> Salir Modo Cliente</button> )}
        <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 inline-flex gap-2 mx-auto">
            <button onClick={() => setActiveSection('operacion')} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wide transition-all ${activeSection === 'operacion' ? 'bg-[#001233] text-white shadow-md' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}><Layout size={16} /> Operación</button>
            <button onClick={() => setActiveSection('recursos')} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wide transition-all ${activeSection === 'recursos' ? 'bg-[#001233] text-white shadow-md' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}><Wallet size={16} /> Mis Recursos</button>
            <button onClick={() => setActiveSection('tienda')} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wide transition-all ${activeSection === 'tienda' ? 'bg-[#00AEEF] text-[#001233] shadow-md' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}><ShoppingBag size={16} /> Marketplace</button>
        </div>
        <div className="flex gap-2">
            <button onClick={() => setActiveSection('configuracion')} className={`p-3 rounded-xl transition-all ${activeSection === 'configuracion' ? 'bg-slate-200 text-slate-800' : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50'}`}><Settings size={20} /></button>
            <button onClick={() => setActiveSection('carrito')} className={`relative p-3 rounded-xl transition-all ${activeSection === 'carrito' ? 'bg-[#001233] text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
                <ShoppingCart size={20} />
                {cart.length > 0 && (<span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce">{cart.length}</span>)}
            </button>
        </div>
      </div>

      {activeSection === 'operacion' && <ClientOperations onOpenInvite={() => setIsModalOpen(true)} />}
      
      {activeSection === 'recursos' && <ClientResources activePlan={ACTIVE_PLAN} onOpenBgc={(s) => handleOpenBgc(s)} />}
      
      {activeSection === 'tienda' && <ClientMarketplace coupon={coupon} discountPercent={discountPercent} onApplyCoupon={applyCoupon} onAddToCart={addToCart} onOpenBgc={handleOpenBgc} />}
      
      {activeSection === 'carrito' && <ClientCart cart={cart} coupon={coupon} couponMessage={couponMessage} discountPercent={discountPercent} cartTotal={cartTotal} onRemoveFromCart={removeFromCart} onApplyCoupon={applyCoupon} onChangeSection={setActiveSection} />}
      
      {activeSection === 'configuracion' && <ClientSettingsView />}

      {/* MODALES */}
      {isModalOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div className="bg-white rounded-3xl p-8"><h3 className="font-bold">Simulación Envío</h3><button onClick={() => setIsModalOpen(false)}>Cerrar</button></div></div>)}
      
      {bgcModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
               <div className="bg-[#001233] px-8 py-5 flex justify-between items-center text-white">
                  <div><h3 className="text-lg font-black uppercase">{selectedService}</h3><p className="text-xs text-slate-400">Selecciona modalidad</p></div>
                  <button onClick={() => setBgcModalOpen(false)}><X size={18} className="text-slate-300 hover:text-white" /></button>
               </div>
               <div className="p-8 space-y-4 bg-slate-50">
                  <button onClick={() => { handleOpenBgc(selectedService!, 'Estándar'); setBgcModalOpen(false); }} className="w-full p-4 rounded-2xl bg-white border hover:border-[#00AEEF] shadow-sm text-left"><span className="font-bold">Estándar</span></button>
                  <button onClick={() => { handleOpenBgc(selectedService!, 'Urgente'); setBgcModalOpen(false); }} className="w-full p-4 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 shadow-sm text-left"><span className="font-bold text-amber-600">Urgente</span></button>
               </div>
            </div>
         </div>
      )}
    </div>
  );
}