"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartStore } from "@/store/useCartStore";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "9521376907";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  address: z.string().min(5, "Complete address required"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutForm({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const { items, getSubTotal, getCartTotal, clearCart } = useCartStore();
  const [toastMessage, setToastMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
  });

  const subtotal = getSubTotal();
  const total = getCartTotal();
  const deliveryFee = 0;

  const showToast = (type: "error" | "success", text: string) => {
    setToastMessage({ type, text });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const onSubmit = (data: CheckoutFormValues) => {
    if (items.length === 0) return;

    if (subtotal < 200) {
      showToast("error", "Minimum order value is ₹200");
      return;
    }

    const itemsList = items
      .map((item) => {
        const variantText = item.selectedSize
          ? ` (${item.selectedSize.label})`
          : "";
        return `▪ ${item.quantity}x ${item.name}${variantText}`;
      })
      .join("\n");

    const message = `
🛒 *New Order - Mr Bakers*

👤 Name: ${data.name}
📞 Phone: ${data.phone}
      📍 Address: ${data.address}
      
      📦 *Items:*
      ${itemsList}
      💵 Payment: Cash on Delivery
      `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    showToast("success", "Redirecting to WhatsApp...");

    setTimeout(() => {
      clearCart();
      if (onComplete) onComplete();
    }, 2000);
  };

  return (
    <>
      {toastMessage && (
        <div
          className={`fixed left-1/2 top-4 z-[100] flex -translate-x-1/2 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg ${
            toastMessage.type === "success"
              ? "bg-neutral-800 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toastMessage.text}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-4"
      >
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700">
              Name
            </label>
            <input
              {...register("name")}
              className="w-full rounded-lg border border-neutral-200 bg-white p-3 text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700">
              Phone
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full rounded-lg border border-neutral-200 bg-white p-3 text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              placeholder="10-digit mobile number"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700">
              Delivery Address
            </label>
            <textarea
              {...register("address")}
              rows={3}
              className="w-full resize-none rounded-lg border border-neutral-200 bg-white p-3 text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              placeholder="House/Flat No, Street, Landmark (Reoti, Ballia)"
            />
            {errors.address && (
              <p className="mt-1 text-xs text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
          <p className="mb-1 flex justify-between text-neutral-600">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </p>
          <p className="mb-2 flex justify-between text-neutral-600">
            <span>Delivery</span>
            <span>
              {deliveryFee === 0 ? (
                <span className="font-medium text-green-600">
                  Free Delivery Applied
                </span>
              ) : (
                `₹${deliveryFee}`
              )}
            </span>
          </p>
          <div className="mt-2 border-t border-neutral-200 pt-2" />
          <p className="mt-1 flex justify-between text-base font-bold text-neutral-900">
            <span>Total To Pay</span>
            <span>₹{total}</span>
          </p>
        </div>

        {subtotal < 200 && items.length > 0 && (
          <p className="text-center text-sm font-medium text-red-500">
            Minimum order value is ₹200
          </p>
        )}

        <button
          type="submit"
          disabled={!isValid || items.length === 0}
          className="mt-2 w-full rounded-xl bg-neutral-800 py-4 text-center font-bold text-white transition-colors hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Place Order (COD) via WhatsApp
        </button>
      </form>
    </>
  );
}
