'use client';
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

// --- SE ELIMINÓ LA IMPORTACIÓN DE GLOBALS.CSS AQUÍ ---
// Los estilos ya fluyen desde el layout principal (app/layout.tsx)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Este layout se renderiza dentro del RootLayout principal */}
      {children}
    </div>
  );
}