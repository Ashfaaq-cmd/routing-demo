"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      onClick={() => router.back()}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xl leading-none text-white"
          onClick={() => router.back()}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
