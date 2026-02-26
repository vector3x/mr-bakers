"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartStore } from "@/store/useCartStore";

const WHATSAPP_NUMBER = "919521376907";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  address: z.string().min(5, "Complete address required"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutForm({ onComplete }: { onComplete?: () => void }) {
  const { items, getSubTotal, getCartTotal, clearCart } = useCartStore();
  const [toastMessage, setToastMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

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
  const deliveryFee = subtotal >= 300 ? 0 : 40;

  const showToast = (type: 'error' | 'success', text: string) => {
    setToastMessage({ type, text });
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const onSubmit = (data: CheckoutFormValues) => {
    if (items.length === 0) return;
    
    if (subtotal < 100) {
      showToast('error', "Minimum order value is ₹100");
      return;
    }

    let itemsList = items
      .map((item) => {
        const variantText = item.selectedSize ? ` (${item.selectedSize.label})` : "";
        return `▪ ${item.quantity}x ${item.name}${variantText} - ₹${item.itemTotal}`;
      })
      .join("\n");

    const message = `
🛒 *New Order - Mr Bakers*

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📍 Address: ${data.address}

📦 *Items:*
${itemsList}
${deliveryFee > 0 ? `\n🚚 *Delivery Fee: ₹${deliveryFee}*` : ""}
💰 *Total: ₹${total}*
💵 Payment: Cash on Delivery
`;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Show success toast
    showToast('success', "Redirecting to WhatsApp...");
    
    // Wait a bit before clearing cart and closing drawer so user sees the toast
    setTimeout(() => {
      clearCart();
      if (onComplete) onComplete();
    }, 2000);
  };

  return (
    <>
      {toastMessage && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold shadow-2xl transition-all ${toastMessage.type === 'success' ? 'bg-brand-blue text-white' : 'bg-red-500 text-white'}`}>
          {toastMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Name</label>
            <input
              {...register("name")}
              className="w-full rounded-lg border border-[var(--color-brand-gray-light)] bg-black/50 p-3 text-white placeholder-gray-500 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Phone</label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full rounded-lg border border-[var(--color-brand-gray-light)] bg-black/50 p-3 text-white placeholder-gray-500 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
              placeholder="10-digit mobile number"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Delivery Address</label>
            <textarea
              {...register("address")}
              rows={3}
              className="w-full resize-none rounded-lg border border-[var(--color-brand-gray-light)] bg-black/50 p-3 text-white placeholder-gray-500 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
              placeholder="House/Flat No, Street, Landmark (Reoti, Ballia)"
            />
            {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-black/30 p-4 border border-[var(--color-brand-gray-light)] text-sm">
          <p className="flex justify-between text-gray-400 mb-1">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </p>
          <p className="flex justify-between text-gray-400 mb-2">
            <span>Delivery</span>
            <span>{deliveryFee === 0 ? <span className="text-green-400 font-medium">Free Delivery Applied</span> : `₹${deliveryFee}`}</span>
          </p>
          <div className="border-t border-[var(--color-brand-gray-light)] mt-2 pt-2"></div>
          <p className="flex justify-between text-lg font-bold text-white mt-1">
            <span>Total To Pay</span>
            <span className="text-brand-blue">₹{total}</span>
          </p>
        </div>

        {subtotal < 100 && items.length > 0 && (
          <p className="text-center text-sm font-medium text-red-400">
            Minimum order value is ₹100
          </p>
        )}

        <button
          type="submit"
          disabled={!isValid || items.length === 0}
          className="mt-4 w-full rounded-xl bg-brand-blue py-4 text-center font-bold text-white transition-all hover:bg-brand-blue-hover disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Place Order (COD) via WhatsApp
        </button>
      </form>
    </>
  );
}
