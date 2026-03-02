"use client";

import { useState } from "react";
import { MenuItem, SizeOption } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { Plus, Minus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getImageSrc(imagePath: string) {
  return `/assets/${encodeURIComponent(imagePath)}`;
}

export default function ProductCard({ item }: { item: MenuItem }) {
  const { items, addItem, updateQuantity, removeItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(
    item.sizes ? item.sizes[0] : undefined
  );

  const cartItemId = selectedSize
    ? `${item.id}-${selectedSize.label}`
    : item.id;
  const cartEntry = items.find((i) => i.cartItemId === cartItemId);
  const quantityInCart = cartEntry?.quantity ?? 0;

  const handleAdd = () => {
    addItem(item, selectedSize);
  };

  const handleIncrease = () => {
    addItem(item, selectedSize);
  };

  const handleDecrease = () => {
    if (quantityInCart <= 1) {
      removeItem(cartItemId);
    } else {
      updateQuantity(cartItemId, -1);
    }
  };

  const displayPrice = selectedSize ? selectedSize.price : item.price;

  return (
    <div className="flex gap-4 rounded-lg border border-neutral-200 bg-white py-4 px-4">
      {/* Left: details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-neutral-900 sm:text-lg">
            {item.name}
          </h3>
          {item.description && (
            <p className="mt-0.5 line-clamp-2 text-sm text-neutral-500">
              {item.description}
            </p>
          )}
          {item.sizes && item.sizes.length > 0 && (
            <div className="mt-2 space-y-1.5">
              <div className="flex flex-wrap gap-1.5">
                {item.sizes.map((size) => {
                  const isSelected = selectedSize?.label === size.label;
                  return (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
                        isSelected
                          ? "border-neutral-400 bg-neutral-100 text-neutral-800"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
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
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <p className="text-xl font-bold text-neutral-900 sm:text-xl">
            ₹{displayPrice}
            {item.sizes && item.sizes.length > 1 && selectedSize && (
              <span className="ml-1 text-sm font-normal text-neutral-500">
                · {selectedSize.label}
              </span>
            )}
          </p>
          {quantityInCart > 0 && (
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
              {quantityInCart} in cart
            </span>
          )}
          {/* When no image: show ADD / quantity controls inline */}
          {!item.image && (
            quantityInCart === 0 ? (
              <button
                onClick={handleAdd}
                className="ml-auto flex items-center gap-1 rounded-lg bg-[var(--color-add-btn)] px-3 py-1.5 text-xs font-bold uppercase text-white shadow transition-transform hover:bg-[var(--color-add-btn-hover)] active:scale-95 sm:px-4 sm:py-2 sm:text-sm"
              >
                <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ADD
              </button>
            ) : (
              <div className="ml-auto flex items-center gap-0.5 rounded-lg bg-[var(--color-add-btn)] shadow sm:gap-1">
                <button
                  onClick={handleDecrease}
                  className="flex h-8 w-8 items-center justify-center rounded-l-md text-white transition-colors hover:bg-white/20 active:scale-95 sm:h-9 sm:w-9"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <span className="min-w-[1.25rem] text-center text-xs font-bold text-white sm:min-w-[1.5rem] sm:text-sm">
                  {quantityInCart}
                </span>
                <button
                  onClick={handleIncrease}
                  className="flex h-8 w-8 items-center justify-center rounded-r-md text-white transition-colors hover:bg-white/20 active:scale-95 sm:h-9 sm:w-9"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* Right: image + ADD or quantity controls — only when item has image */}
      {item.image && (
        <div className="relative shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-neutral-100 shadow-sm sm:h-28 sm:w-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getImageSrc(item.image)}
              alt={item.name}
              className="h-full w-full object-cover"
            />
            {quantityInCart === 0 ? (
              <button
                onClick={handleAdd}
                className="absolute bottom-1.5 right-1.5 flex items-center gap-1 rounded-lg bg-[var(--color-add-btn)] px-2.5 py-1.5 text-xs font-bold uppercase text-white shadow transition-transform hover:bg-[var(--color-add-btn-hover)] active:scale-95 sm:px-3 sm:py-2 sm:text-sm"
              >
                <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ADD
              </button>
            ) : (
              <div className="absolute bottom-1.5 right-1.5 flex items-center gap-0.5 rounded-lg bg-[var(--color-add-btn)] shadow sm:gap-1">
                <button
                  onClick={handleDecrease}
                  className="flex h-8 w-8 items-center justify-center rounded-l-md text-white transition-colors hover:bg-white/20 active:scale-95 sm:h-9 sm:w-9"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <span className="min-w-[1.25rem] text-center text-xs font-bold text-white sm:min-w-[1.5rem] sm:text-sm">
                  {quantityInCart}
                </span>
                <button
                  onClick={handleIncrease}
                  className="flex h-8 w-8 items-center justify-center rounded-r-md text-white transition-colors hover:bg-white/20 active:scale-95 sm:h-9 sm:w-9"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
