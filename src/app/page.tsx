"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex flex-1 flex-col"
      >
        <header className="border-b border-neutral-200 bg-white pt-2">
          <div className="mx-auto flex h-16 max-w-2xl items-center justify-center px-4 sm:px-5">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/mr-bakers-icon.png"
                alt="Mr Bakers"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />
              <span className="text-xl font-bold tracking-tight pb-1">
                Mr <span className="text-red-600">Bakers</span>
              </span>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:py-16">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-100 sm:h-24 sm:w-24">
            <UtensilsCrossed className="h-10 w-10 text-neutral-600 sm:h-12 sm:w-12" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Welcome to Mr Bakers
          </h1>
          <p className="mb-10 max-w-sm text-neutral-500 sm:text-lg">
            Pizza, burgers, cakes, and more. Fresh and delivered to you in Reoti, Ballia.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-neutral-900 active:scale-[0.98]"
          >
            <UtensilsCrossed className="h-5 w-5" />
            View Menu
          </Link>
        </div>

        <footer className="border-t border-neutral-200 py-6">
          <div className="mx-auto max-w-2xl px-4 text-center text-sm text-neutral-500 sm:px-5">
            <p>Supar Market, Reoti, Ballia (UP)</p>
            <p className="mt-1">Home delivery available</p>
          </div>
        </footer>
      </motion.div>
    </main>
  );
}
