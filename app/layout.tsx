// app/layout.tsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Pastikan sudah install: npm install @studio-freight/lenis
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inisialisasi dengan opsi tambahan
    const lenis = new Lenis({
      duration: 1.5, // Durasi scroll (dalam detik)
      lerp: 0.08,     // EFEK UTAMA: Nilai 0.05 - 0.1 memberikan efek "ketarik" yang halus
      wheelMultiplier: 1.1, // Sensitivitas scroll mouse
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup saat komponen di-unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}