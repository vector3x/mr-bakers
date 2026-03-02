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

  const handleIncrease = () => updateQuantity(item.cartItemId, 1);

  const variantText = item.selectedSize ? `(${item.selectedSize.label})` : "";
  const unitPrice = item.selectedSize ? item.selectedSize.price : item.price;

  return (
    <div className="flex items-center justify-between border-b border-[var(--color-border)] py-4 last:border-0">
      <div className="flex-1 pr-4">
        <h4 className="font-semibold text-neutral-900">
          {item.name}{" "}
          {variantText && (
            <span className="text-sm font-normal text-neutral-500">
              {variantText}
            </span>
          )}
        </h4>
        <div className="mt-0.5 text-sm font-medium text-neutral-600">
          ₹{unitPrice}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-lg border border-neutral-200 bg-neutral-50">
          <button
            onClick={handleDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-l-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Decrease quantity"
          >
            {item.quantity === 1 ? (
              <Trash2 className="h-4 w-4 text-red-500" />
            ) : (
              <Minus className="h-4 w-4" />
            )}
          </button>
          <span className="flex h-8 w-12 items-center justify-center text-sm font-medium text-neutral-900">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-r-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="w-14 text-right text-sm font-bold text-neutral-900">
          ₹{item.itemTotal}
        </div>
      </div>
    </div>
  );
}
