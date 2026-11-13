'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { XIcon, WhatsAppIcon, CheckIcon, BikeIcon, ShieldCheckIcon } from './icons';
import { POPULAR_SCOOTER_MODELS } from '@/data/products';

interface WhatsAppModalProps {
  templateName?: string;
}

export function WhatsAppModal({ templateName = 'VoltX E-Commerce' }: WhatsAppModalProps) {
  const {
    isWhatsAppModalOpen,
    setIsWhatsAppModalOpen,
    cart,
    totalPrice,
    directBuyProduct,
    setDirectBuyProduct,
    generateWhatsAppUrl,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    city: '',
    deliveryAddress: '',
    scooterModel: 'Honda Activa 6G / 125',
    orderNotes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isWhatsAppModalOpen) return null;

  const items = directBuyProduct
    ? [{ product: directBuyProduct, quantity: 1 }]
    : cart;

  const currentTotal = directBuyProduct
    ? directBuyProduct.price
    : totalPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phoneNumber || !formData.deliveryAddress) {
      alert('Please enter your Full Name, WhatsApp Number, and Delivery Address.');
      return;
    }

    const waUrl = generateWhatsAppUrl(formData, templateName, directBuyProduct);
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setIsSuccess(true);

    setTimeout(() => {
      if (!directBuyProduct) {
        clearCart();
      }
      setDirectBuyProduct(null);
      setIsSuccess(false);
      setIsWhatsAppModalOpen(false);
    }, 2500);
  };

  const handleClose = () => {
    setDirectBuyProduct(null);
    setIsWhatsAppModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-zinc-700/80 text-zinc-100 shadow-2xl p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <WhatsAppIcon size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white tracking-tight">WhatsApp Direct Checkout</h3>
              <p className="text-xs text-zinc-400">Directly connect with store owner for order confirmation</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4 animate-bounce">
              <CheckIcon size={32} />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">WhatsApp Order Initialized!</h4>
            <p className="text-sm text-zinc-300 max-w-sm">
              Your order inquiry has been pre-formatted in WhatsApp. Click the send button in WhatsApp to finalize details with the store owner.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Order summary mini-pill */}
            <div className="bg-zinc-800/80 rounded-xl p-3.5 border border-zinc-700/60 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-zinc-300">
                <BikeIcon size={16} className="text-emerald-400" />
                <span>
                  <strong className="text-white">{items.length}</strong> items selected
                  {directBuyProduct && <span className="ml-1 text-emerald-400">(Instant Buy)</span>}
                </span>
              </div>
              <div className="text-right">
                <span className="text-zinc-400">Total Payable: </span>
                <span className="text-base font-bold text-emerald-400">₹{currentTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-zinc-800/90 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-zinc-800/90 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  City / Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Delhi, Jaipur, Pune"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-zinc-800/90 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Scooter Model (Compatibility Check)
                </label>
                <select
                  value={formData.scooterModel}
                  onChange={(e) => setFormData({ ...formData, scooterModel: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-zinc-800/90 border border-zinc-700 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  {POPULAR_SCOOTER_MODELS.map((m) => (
                    <option key={m} value={m} className="bg-zinc-900 text-white">
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Full Delivery Address *
              </label>
              <textarea
                required
                rows={2}
                placeholder="House / Flat No., Street, Landmark, Pincode"
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-zinc-800/90 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Special Note / Custom Spare Part Requirement (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Please check brake pad fitment with Activa 6G Deluxe disc"
                value={formData.orderNotes}
                onChange={(e) => setFormData({ ...formData, orderNotes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400">
              <ShieldCheckIcon size={15} className="text-emerald-400 flex-shrink-0" />
              <span>Direct WhatsApp message goes to store owner. Final price, payment method, & dispatch confirmed in chat.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Send Order via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
