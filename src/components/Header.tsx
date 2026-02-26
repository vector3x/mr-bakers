"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function Header() {
  const { items, toggleDrawer } = useCartStore();

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-brand-gray-light)] bg-[var(--color-brand-black)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-white">
            <span className="font-bold text-lg leading-none tracking-tighter">MB</span>
          </div>
          <div className="text-xl font-bold tracking-tight">
            <span className="text-brand-blue">Mr</span>
            <span className="text-[#E31E24]">BAKERS</span>
          </div>
        </div>

        {/* Cart Trigger */}
        <button
          onClick={toggleDrawer}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-gray-light)] text-white hover:bg-brand-blue transition-colors"
          aria-label="Open cart"
        >
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-[var(--color-brand-black)]">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
