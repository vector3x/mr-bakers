"use client";

import { useEffect, useRef } from "react";
import { useCartStore } from "@/store/useCartStore";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { X, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
  const { isDrawerOpen, toggleDrawer, items } = useCartStore();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        if (isDrawerOpen) toggleDrawer();
      }
    };

    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen, toggleDrawer]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ease-in-out ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        ref={drawerRef}
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-96 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-neutral-700" />
            <h2 className="text-lg font-bold text-neutral-900">Your Order</h2>
          </div>
          <button
            onClick={toggleDrawer}
            className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingBag className="mb-4 h-14 w-14 text-neutral-300" />
              <p className="text-base font-medium text-neutral-700">
                Your cart is empty
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Add some delicious items from our menu!
              </p>
              <button
                onClick={toggleDrawer}
                className="mt-6 rounded-lg bg-neutral-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-0">
                {items.map((item) => (
                  <CartItem key={item.cartItemId} item={item} />
                ))}
              </div>

              <div className="border-t border-[var(--color-border)] pt-6 pb-4">
                <h3 className="mb-4 text-base font-bold text-neutral-900">
                  Checkout Details
                </h3>
                <CheckoutForm onComplete={toggleDrawer} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
