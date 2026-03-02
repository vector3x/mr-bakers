"use client";

import Link from "next/link";
import { Search, ShoppingBag, ChevronLeft } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder: string;
  backHref?: string;
}

export default function Header({
  searchQuery,
  onSearchChange,
  searchPlaceholder,
  backHref,
}: HeaderProps) {
  const { items, toggleDrawer } = useCartStore();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const backButton = (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100">
      <ChevronLeft className="h-5 w-5" />
    </span>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto flex h-14 max-w-2xl items-center gap-3 px-4 sm:px-5">
        {backHref ? (
          <Link href={backHref} aria-label="Back" className="shrink-0">
            {backButton}
          </Link>
        ) : (
          <button type="button" aria-label="Back" className="shrink-0">
            {backButton}
          </button>
        )}

        <div className="flex flex-1 items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-red-500" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full min-w-0 bg-transparent text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={toggleDrawer}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-add-btn)] text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
