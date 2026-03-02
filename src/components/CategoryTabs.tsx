"use client";

import { menu } from "@/data/menu";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}) {
  const categories = [
    "All",
    "Cakes",
    ...menu.map((m) => m.category).filter((c) => c !== "Cakes"),
  ];

  return (
    <div className="sticky top-14 z-30 w-full border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-5">
        <ul className="flex flex-nowrap gap-2 overflow-x-auto py-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <li key={category} className="shrink-0">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
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
