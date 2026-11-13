'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { XIcon, TrashIcon, PlusIcon, MinusIcon, ShoppingCartIcon, WhatsAppIcon, ArrowRightIcon } from './icons';

interface CartDrawerProps {
  primaryColor?: string;
}

export function CartDrawer({ primaryColor = '#10b981' }: CartDrawerProps) {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    setIsWhatsAppModalOpen,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 1500;
  const progressPercent = Math.min(100, Math.round((totalPrice / freeShippingThreshold) * 100));
  const diffForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);

  const handleProceedToWhatsApp = () => {
    setIsCartOpen(false);
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-zinc-900 border-l border-zinc-800 text-zinc-100 flex flex-col shadow-2xl animate-slideLeft">
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingCartIcon size={20} className="text-zinc-400" />
              <h2 className="font-semibold text-white tracking-tight">Your Cart ({totalItems})</h2>
            </div>
            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-zinc-400 hover:text-rose-400 transition-colors px-2 py-1"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <XIcon size={20} />
              </button>
            </div>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-5 py-3 bg-zinc-800/40 border-b border-zinc-800/80">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-zinc-300">
                {diffForFreeShipping === 0 ? (
                  <span className="text-emerald-400 font-medium">🎉 You unlocked Free Express Delivery!</span>
                ) : (
                  <span>Add <strong className="text-white">₹{diffForFreeShipping.toLocaleString('en-IN')}</strong> for Free Delivery</span>
                )}
              </span>
              <span className="text-zinc-400 font-mono text-[11px]">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 rounded-full bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-500 mb-3">
                  <ShoppingCartIcon size={24} />
                </div>
                <p className="text-base font-medium text-white mb-1">Your cart is empty</p>
                <p className="text-xs text-zinc-400 max-w-xs mb-5">Browse complete scooties or genuine spare parts and add them to your cart.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex gap-3.5 items-center transition-all hover:border-zinc-600"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-zinc-800 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-white line-clamp-1">{item.product.name}</h4>
                    {item.product.oemNumber && (
                      <p className="text-[10px] text-zinc-400 font-mono">OEM: {item.product.oemNumber}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-semibold text-emerald-400">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-zinc-700 rounded-md bg-zinc-900 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-zinc-400 hover:text-white transition-colors"
                          >
                            <MinusIcon size={12} />
                          </button>
                          <span className="px-2 text-xs font-mono font-medium text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-zinc-400 hover:text-white transition-colors"
                          >
                            <PlusIcon size={12} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
                          title="Remove item"
                        >
                          <TrashIcon size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-900/90 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Subtotal ({totalItems} items):</span>
                <span className="font-semibold text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-zinc-400">
                <span>Shipping:</span>
                <span className="text-emerald-400 font-medium">
                  {diffForFreeShipping === 0 ? 'FREE' : 'Calculated in WhatsApp'}
                </span>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 flex justify-between items-center">
                <span className="text-sm font-semibold text-white">Estimated Total:</span>
                <span className="text-lg font-bold text-emerald-400">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>

              <button
                onClick={handleProceedToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Checkout via WhatsApp</span>
                <ArrowRightIcon size={14} />
              </button>

              <p className="text-[11px] text-center text-zinc-400">
                Direct message with cart summary will be sent to store owner
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
