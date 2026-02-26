"use client";

import { useState } from "react";
import { MenuItem, SizeOption } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { Plus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ProductCard({ item }: { item: MenuItem }) {
  const { addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(
    item.sizes ? item.sizes[0] : undefined
  );

  const handleAdd = () => {
    addItem(item, selectedSize);
  };

  const displayPrice = selectedSize ? selectedSize.price : item.price;

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[var(--color-brand-gray)] border border-[var(--color-brand-gray-light)] transition-all hover:border-brand-blue/50 hover:shadow-lg">
      <div className="p-4 sm:p-5">
        <h3 className="mb-1 text-lg font-bold text-white">{item.name}</h3>
        <p className="mb-4 text-xl font-black text-brand-blue">
          ₹{displayPrice}
        </p>

        {item.sizes && item.sizes.length > 0 && (
          <div className="mb-2 mt-2 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Select Size
            </span>
            <div className="flex flex-wrap gap-2">
              {item.sizes.map((size) => {
                const isSelected = selectedSize?.label === size.label;
                return (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "flex-1 min-w-[30%] rounded-lg border py-2 text-sm font-medium transition-colors",
                      isSelected
                        ? "border-brand-blue bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/50"
                        : "border-[var(--color-brand-gray-light)] bg-transparent text-gray-300 hover:border-gray-500"
                    )}
                  >
                    {size.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 pt-0">
        <button
          onClick={handleAdd}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3 font-semibold text-white transition-all hover:bg-brand-blue hover:text-white active:scale-[0.98]"
        >
          <Plus className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
