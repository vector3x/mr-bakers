import { create } from "zustand";
import { MenuItem, SizeOption, CartItem } from "@/types";

interface CartState {
    items: CartItem[];
    isDrawerOpen: boolean;
    addItem: (item: MenuItem, size?: SizeOption) => void;
    removeItem: (cartItemId: string) => void;
    updateQuantity: (cartItemId: string, delta: number) => void;
    clearCart: () => void;
    toggleDrawer: () => void;
    getCartTotal: () => number;
    getSubTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    isDrawerOpen: false,

    addItem: (item, size) => {
        const cartItemId = size ? `${item.id}-${size.label}` : item.id;
        const price = size ? size.price : item.price || 0;

        set((state) => {
            const existingItem = state.items.find((i) => i.cartItemId === cartItemId);
            if (existingItem) {
                return {
                    items: state.items.map((i) =>
                        i.cartItemId === cartItemId
                            ? {
                                ...i,
                                quantity: i.quantity + 1,
                                itemTotal: (i.quantity + 1) * price,
                            }
                            : i
                    )
                };
            }

            return {
                items: [
                    ...state.items,
                    {
                        ...item,
                        cartItemId,
                        quantity: 1,
                        selectedSize: size,
                        itemTotal: price,
                    },
                ]
            };
        });
    },

    removeItem: (cartItemId) => {
        set((state) => ({
            items: state.items.filter((i) => i.cartItemId !== cartItemId),
        }));
    },

    updateQuantity: (cartItemId, delta) => {
        set((state) => ({
            items: state.items.map((i) => {
                if (i.cartItemId === cartItemId) {
                    const newQuantity = Math.max(1, i.quantity + delta);
                    const unitPrice = i.selectedSize ? i.selectedSize.price : i.price || 0;
                    return {
                        ...i,
                        quantity: newQuantity,
                        itemTotal: newQuantity * unitPrice,
                    };
                }
                return i;
            }),
        }));
    },

    clearCart: () => {
        set({ items: [], isDrawerOpen: false });
    },

    toggleDrawer: () => {
        set((state) => ({ isDrawerOpen: !state.isDrawerOpen }));
    },

    getSubTotal: () => {
        return get().items.reduce((total, item) => total + item.itemTotal, 0);
    },

    getCartTotal: () => {
        const subtotal = get().getSubTotal();
        return subtotal;
    },
}));
