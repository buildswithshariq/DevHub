'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { XIcon, ShoppingCartIcon, WhatsAppIcon, StarIcon, CheckIcon, ShieldCheckIcon, BikeIcon } from './icons';

export function ProductModal() {
  const {
    selectedProductForModal,
    setSelectedProductForModal,
    addToCart,
    setDirectBuyProduct,
    setIsWhatsAppModalOpen
  } = useCart();

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;

  const handleDirectWhatsApp = () => {
    setDirectBuyProduct(product);
    setSelectedProductForModal(null);
    setIsWhatsAppModalOpen(true);
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
    setSelectedProductForModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-zinc-700 text-zinc-100 shadow-2xl p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductForModal(null)}
          className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors z-10"
        >
          <XIcon size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image & Badges */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden bg-zinc-800 aspect-square border border-zinc-700/60">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-zinc-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                  {product.badge}
                </span>
              )}
              {product.inStock ? (
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  In Stock ({product.stockCount} available)
                </span>
              ) : (
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-medium bg-rose-950/80 text-rose-300 border border-rose-500/30">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
              <div className="p-2.5 rounded-lg bg-zinc-800/40 border border-zinc-700/40 flex items-center gap-2">
                <ShieldCheckIcon size={16} className="text-emerald-400" />
                <span>100% Genuine OEM Fit</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-800/40 border border-zinc-700/40 flex items-center gap-2">
                <BikeIcon size={16} className="text-sky-400" />
                <span>Verified Mechanic Tested</span>
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                  <span className="uppercase tracking-wider font-semibold text-emerald-400">{product.category}</span>
                  {product.oemNumber && (
                    <>
                      <span>•</span>
                      <span className="font-mono text-zinc-300">SKU: {product.oemNumber}</span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{product.name}</h3>
                <p className="text-xs text-zinc-400 mt-1">{product.subtitle}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={14} className={i < Math.floor(product.rating) ? "text-amber-400" : "text-zinc-600"} />
                  ))}
                </div>
                <span className="font-semibold text-white">{product.rating}</span>
                <span className="text-zinc-400">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1 border-t border-zinc-800">
                <span className="text-2xl font-bold text-emerald-400">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-zinc-500 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              {/* Compatible models */}
              {product.compatibleModels && product.compatibleModels.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-zinc-400 block mb-1.5">Model Fitment:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.compatibleModels.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Table */}
              {product.specs && product.specs.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-medium text-zinc-400 block">Engineering Specifications:</span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {product.specs.map((s) => (
                      <div key={s.label} className="p-2 rounded bg-zinc-800/60 border border-zinc-700/50">
                        <span className="text-zinc-400 block text-[10px]">{s.label}</span>
                        <span className="font-medium text-zinc-200 text-xs">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {product.features && (
                <div className="space-y-1 pt-1">
                  <span className="text-xs font-medium text-zinc-400 block">Key Highlights:</span>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {product.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckIcon size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-5 mt-5 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className="py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-zinc-600 transition-colors cursor-pointer"
              >
                <ShoppingCartIcon size={16} />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleDirectWhatsApp}
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-colors cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Direct WhatsApp Buy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
