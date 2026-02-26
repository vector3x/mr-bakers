"use client";

import { useEffect, useRef } from "react";
import { useCartStore } from "@/store/useCartStore";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { X, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
  const { isDrawerOpen, toggleDrawer, items } = useCartStore();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        if (isDrawerOpen) {
          toggleDrawer();
        }
      }
    };
    
    // Disable body scroll when drawer is open
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen, toggleDrawer]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`} 
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed right-0 top-0 z-50 h-[100dvh] w-full max-w-md transform bg-[var(--color-brand-gray)] shadow-2xl transition-transform duration-300 ease-in-out sm:w-96 flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-brand-gray-light)] px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-brand-blue" />
            <h2 className="text-xl font-bold text-white">Your Order</h2>
          </div>
          <button
            onClick={toggleDrawer}
            className="rounded-full bg-[var(--color-brand-gray-light)] p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-gray-400">
              <ShoppingBag className="mb-4 h-16 w-16 opacity-20" />
              <p className="text-lg font-medium text-white">Your cart is empty</p>
              <p className="mt-1 text-sm">Add some delicious items from our menu!</p>
              <button
                onClick={toggleDrawer}
                className="mt-6 rounded-lg bg-brand-blue px-6 py-2 font-medium text-white transition-colors hover:bg-brand-blue-hover"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 space-y-1">
                {items.map((item) => (
                  <CartItem key={item.cartItemId} item={item} />
                ))}
              </div>
              
              <div className="border-t border-[var(--color-brand-gray-light)] pt-6 pb-4">
                <h3 className="mb-4 text-lg font-bold text-white">Checkout Details</h3>
                <CheckoutForm onComplete={toggleDrawer} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
