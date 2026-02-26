"use client";

import { useState } from "react";
import { menu } from "@/data/menu";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CategoryTabs({ 
  activeCategory, 
  setActiveCategory 
}: { 
  activeCategory: string, 
  setActiveCategory: (cat: string) => void 
}) {
  const categories = menu.map((m) => m.category);

  return (
    <div className="sticky top-16 z-30 w-full bg-[var(--color-brand-black)]/95 backdrop-blur shadow-sm border-b border-[var(--color-brand-gray-light)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <ul className="flex flex-nowrap gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <li key={category} className="shrink-0">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-brand-blue text-white"
                      : "bg-[var(--color-brand-gray-light)] text-gray-300 hover:bg-[var(--color-brand-gray)]"
                  )}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
