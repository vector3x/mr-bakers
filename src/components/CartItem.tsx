"use client";

import { CartItem as CartItemType } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCartStore();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.cartItemId, -1);
    } else {
      removeItem(item.cartItemId);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.cartItemId, 1);
  };

  const variantText = item.selectedSize ? `(${item.selectedSize.label})` : "";
  const unitPrice = item.selectedSize ? item.selectedSize.price : item.price;

  return (
    <div className="flex items-center justify-between border-b border-[var(--color-brand-gray-light)] py-4 last:border-0">
      <div className="flex-1 pr-4">
        <h4 className="font-semibold text-white">
          {item.name} {variantText && <span className="text-gray-400 font-normal text-sm">{variantText}</span>}
        </h4>
        <div className="mt-1 text-sm font-medium text-brand-blue">
          ₹{unitPrice}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-lg border border-[var(--color-brand-gray-light)] bg-[var(--color-brand-gray)]">
          <button
            onClick={handleDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-l-lg text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Decrease quantity"
          >
            {item.quantity === 1 ? (
              <Trash2 className="h-4 w-4 text-red-400" />
            ) : (
              <Minus className="h-4 w-4" />
            )}
          </button>
          <span className="flex h-8 w-8 items-center justify-center text-sm font-medium text-white">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-r-lg text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        
        <div className="w-16 text-right font-bold text-white">
          ₹{item.itemTotal}
        </div>
      </div>
    </div>
  );
}
