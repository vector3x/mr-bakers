"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { menu } from "@/data/menu";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(menu[0].category);
  const { items, getCartTotal, toggleDrawer, isDrawerOpen } = useCartStore();

  const currentCategoryData = menu.find((m) => m.category === activeCategory);

  // Group items by subCategory if they exist
  const renderItems = () => {
    if (!currentCategoryData) return null;

    const items = currentCategoryData.items;
    
    // Check if any item has a subCategory
    const hasSubCategories = items.some(item => item.subCategory);

    if (!hasSubCategories) {
      return (
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      );
    }

    // Grouping logic for subCategories
    const groupedItems = items.reduce((acc, item) => {
      const subCat = item.subCategory || "Other";
      if (!acc[subCat]) acc[subCat] = [];
      acc[subCat].push(item);
      return acc;
    }, {} as Record<string, typeof items>);

    return Object.entries(groupedItems).map(([subCat, subCatItems], groupIndex) => (
      <div key={subCat} className="mb-10 last:mb-0">
        <h3 className="mb-4 text-xl font-bold text-brand-blue border-b border-[var(--color-brand-gray-light)] pb-2 inline-block">
          {subCat}
        </h3>
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {subCatItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: groupIndex * 0.1 + index * 0.05 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    ));
  };

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="min-h-screen bg-[var(--color-brand-black)] text-white w-full overflow-x-hidden pb-24 relative">
      <Header />
      <CategoryTabs 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white">{activeCategory}</h2>
          <span className="text-sm rounded-md bg-[var(--color-brand-gray-light)] px-3 py-1 text-gray-300">
            {currentCategoryData?.items.length || 0} items
          </span>
        </div>

        {renderItems()}
      </div>

      {/* Floating Cart Button */}
      <AnimatePresence>
        {cartItemCount > 0 && !isDrawerOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-0 right-0 z-40 mx-auto w-[calc(100%-2rem)] max-w-md sm:w-full"
          >
            <button
              onClick={toggleDrawer}
              className="flex w-full items-center justify-between rounded-2xl bg-brand-blue px-6 py-4 font-bold text-white shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <span className="text-lg">{cartItemCount}</span>
                </div>
                <span>View Cart</span>
              </div>
              <div className="flex items-center gap-2">
                <span>₹{getCartTotal()}</span>
                <ShoppingBag className="h-5 w-5" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer />
    </main>
  );
}
