'use client';
import React from 'react';
import { ShoppingCart, ShoppingBag, Trash2, Ticket, Check, AlertTriangle, ArrowRight, Rocket, ShieldCheck, Zap } from 'lucide-react';

interface Props {
  cart: any[];
  coupon: string;
  couponMessage: string;
  discountPercent: number;
  cartTotal: { subtotal: number, discountAmount: number, iva: number, total: number };
  onRemoveFromCart: (index: number) => void;
  onApplyCoupon: (val: string) => void;
  onChangeSection: (section: any) => void;
}

export default function ClientCart({ cart, coupon, couponMessage, discountPercent, cartTotal, onRemoveFromCart, onApplyCoupon, onChangeSection }: Props) {
  const getDiscountedPrice = (price: number) => Math.floor(price * (1 - discountPercent));

  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-3xl font-black text-slate-800 uppercase italic tracking-tighter mb-8 flex items-center gap-3">
            <ShoppingCart size={32} className="text-[#00AEEF]" /> Tu Carrito
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
                {cart.length === 0 ? (
                    <div className="bg-white border border-dashed border-slate-300 rounded-3xl p-12 text-center">
                        <ShoppingBag size={48} className="text-slate-200 mx-auto mb-4" />
                        <p className="text-slate-400 font-bold">Tu carrito está vacío</p>
                        <button onClick={() => onChangeSection('tienda')} className="mt-4 text-[#00AEEF] font-black text-xs uppercase hover:underline">Ir al Marketplace</button>
                    </div>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-2xl p-5 flex justify-between items-center shadow-sm hover:border-[#00AEEF] transition-all">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl ${item.type === 'Plan' ? 'bg-[#001233] text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    {item.type === 'Plan' ? <Rocket size={20} /> : item.type === 'BGC' ? <ShieldCheck size={20} /> : <Zap size={20} />}
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 text-sm uppercase">{item.name}</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.type}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    {discountPercent > 0 && (<p className="text-[10px] line-through text-slate-300 font-bold">${item.price.toLocaleString()}</p>)}
                                    <p className="text-lg font-black text-slate-800">${getDiscountedPrice(item.price).toLocaleString()}</p>
                                </div>
                                <button onClick={() => onRemoveFromCart(index)} className="text-slate-300 hover:text-red-500 transition-colors p-2"><Trash2 size={18} /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Cupón de Descuento</h3>
                    <div className="relative">
                        <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input type="text" value={coupon} onChange={(e) => onApplyCoupon(e.target.value)} placeholder="CÓDIGO" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs font-black uppercase outline-none focus:border-[#00AEEF]"/>
                    </div>
                    {couponMessage && <p className="text-[10px] font-bold text-emerald-500 mt-2 flex items-center gap-1"><Check size={12} /> {couponMessage}</p>}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                        <p className="text-[9px] text-amber-600 font-bold mb-1 flex items-center gap-1"><AlertTriangle size={10} /> Atención:</p>
                        <p className="text-[9px] text-slate-400 leading-relaxed">* Los códigos de descuento no son acumulables.</p>
                    </div>
                </div>

                <div className="bg-[#001233] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    <div className="relative z-10 space-y-3 border-b border-white/10 pb-6 mb-6">
                        <div className="flex justify-between text-xs text-blue-200"><span>Subtotal</span><span>${cartTotal.subtotal.toLocaleString()}</span></div>
                        {cartTotal.discountAmount > 0 && (<div className="flex justify-between text-xs text-emerald-400 font-bold"><span>Descuento ({discountPercent * 100}%)</span><span>-${cartTotal.discountAmount.toLocaleString()}</span></div>)}
                        <div className="flex justify-between text-xs text-blue-200"><span>IVA (16%)</span><span>${cartTotal.iva.toLocaleString()}</span></div>
                    </div>
                    <div className="relative z-10 flex justify-between items-end mb-8"><span className="text-sm font-bold uppercase tracking-widest text-white/60">Total</span><span className="text-3xl font-black text-white">${cartTotal.total.toLocaleString()}</span></div>
                    <button disabled={cart.length === 0} className="relative z-10 w-full py-4 bg-[#00AEEF] text-[#001233] rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">Finalizar Compra <ArrowRight size={14} className="inline ml-1" /></button>
                </div>
            </div>
        </div>
    </div>
  );
}