"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { menu } from "@/data/menu";
import type { MenuItem } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

function filterItems(items: MenuItem[], query: string): MenuItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      (item.description?.toLowerCase().includes(q) ?? false),
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Cakes");
  const [searchQuery, setSearchQuery] = useState("");
  const { items, getCartTotal, toggleDrawer, isDrawerOpen } = useCartStore();

  const searchPlaceholder =
    activeCategory === "All"
      ? "Search menu"
      : `Search ${activeCategory.toLowerCase()}`;

  const { itemsToShow, totalCount } = useMemo(() => {
    const raw =
      activeCategory === "All"
        ? menu.flatMap((c) => c.items)
        : (menu.find((m) => m.category === activeCategory)?.items ?? []);
    const filtered = filterItems(raw, searchQuery);
    return { itemsToShow: filtered, totalCount: filtered.length };
  }, [activeCategory, searchQuery]);

  const renderItems = () => {
    if (itemsToShow.length === 0) {
      return (
        <p className="py-8 text-center text-sm text-neutral-500">
          {searchQuery.trim()
            ? "No items match your search."
            : "No items in this category."}
        </p>
      );
    }

    const hasSubCategories =
      activeCategory !== "All" && itemsToShow.some((item) => item.subCategory);

    if (!hasSubCategories) {
      return (
        <motion.div
          className="flex flex-col gap-3 rounded-none border-0 bg-white px-0"
          layout
        >
          <AnimatePresence mode="popLayout">
            {itemsToShow.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      );
    }

    const groupedItems = itemsToShow.reduce(
      (acc, item) => {
        const subCat = item.subCategory || "Other";
        if (!acc[subCat]) acc[subCat] = [];
        acc[subCat].push(item);
        return acc;
      },
      {} as Record<string, MenuItem[]>,
    );

    return Object.entries(groupedItems).map(
      ([subCat, subCatItems], groupIndex) => (
        <div key={subCat} className="mb-8 last:mb-0">
          <h3 className="mb-3 text-base font-bold text-neutral-900 sm:text-lg">
            {subCat}
          </h3>
          <motion.div className="flex flex-col gap-3 bg-white" layout>
            <AnimatePresence mode="popLayout">
              {subCatItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: groupIndex * 0.03 + index * 0.02,
                  }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ),
    );
  };

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white pb-24 text-neutral-900">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
        className="min-h-screen w-full"
      >
        <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder={searchPlaceholder}
        backHref="/"
      />
      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-5">
        <h2 className="mb-1 text-lg font-bold text-neutral-900 sm:text-xl">
          Our Menu
        </h2>
        <p className="mb-5 text-sm text-neutral-500">
          {totalCount} item{totalCount !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {renderItems()}
      </div>

      <AnimatePresence>
        {cartItemCount > 0 && !isDrawerOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6"
          >
            <button
              onClick={toggleDrawer}
              className="flex items-center gap-2 rounded-full bg-neutral-800 px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:bg-neutral-900 active:scale-[0.98]"
            >
              <UtensilsCrossed className="h-5 w-5" />
              <span>Menu</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-sm">
                {cartItemCount} · ₹{getCartTotal()}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

        <CartDrawer />
      </motion.div>
    </main>
  );
}
