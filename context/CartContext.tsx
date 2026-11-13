'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CustomerOrderDetails } from '@/types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWhatsAppModalOpen: boolean;
  setIsWhatsAppModalOpen: (open: boolean) => void;
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (product: Product | null) => void;
  directBuyProduct: Product | null;
  setDirectBuyProduct: (product: Product | null) => void;
  generateWhatsAppUrl: (details: CustomerOrderDetails, templateName: string, directProduct?: Product | null) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const OWNER_WHATSAPP_NUMBER = '916395092413'; // Dev Hub official WhatsApp number: +91 63950 92413

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [directBuyProduct, setDirectBuyProduct] = useState<Product | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('scoot_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem('scoot_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const generateWhatsAppUrl = (
    details: CustomerOrderDetails,
    templateName: string,
    directProduct?: Product | null
  ) => {
    const isDirect = !!directProduct;
    const items = isDirect
      ? [{ product: directProduct, quantity: 1 }]
      : cart;

    const total = isDirect
      ? directProduct.price
      : totalPrice;

    const orderId = `SC-${Date.now().toString().slice(-6)}`;

    let message = `🛵 *NEW ORDER INQUIRY - ${templateName.toUpperCase()}*\n`;
    message += `📋 *Order Ref:* #${orderId}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 *Customer Name:* ${details.customerName}\n`;
    message += `📞 *WhatsApp:* ${details.phoneNumber}\n`;
    message += `📍 *Delivery Address:* ${details.deliveryAddress}, ${details.city}\n`;
    if (details.scooterModel) {
      message += `🛵 *Customer Scooter Model:* ${details.scooterModel}\n`;
    }
    if (details.orderNotes) {
      message += `📝 *Notes/Requirement:* ${details.orderNotes}\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 *ORDER ITEMS (${items.length}):*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      if (item.product.oemNumber) {
        message += `   • OEM / SKU: ${item.product.oemNumber}\n`;
      }
      message += `   • Qty: ${item.quantity} × ₹${item.product.price.toLocaleString('en-IN')}\n`;
      message += `   • Line Total: ₹${(item.quantity * item.product.price).toLocaleString('en-IN')}\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL AMOUNT: ₹${total.toLocaleString('en-IN')}*\n`;
    message += `🚚 *Delivery:* Please share estimated dispatch time & delivery charges.\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_Sent via ScootStudio E-Commerce Portal_`;

    return `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        isWhatsAppModalOpen,
        setIsWhatsAppModalOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        directBuyProduct,
        setDirectBuyProduct,
        generateWhatsAppUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
