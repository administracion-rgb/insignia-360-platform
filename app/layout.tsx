'use client'; 
import "./globals.css"; // Única importación global necesaria
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "./Footer"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Ocultamos Navbar y Footer en Dashboard, Login y cualquier ruta de Admin
  const isDashboard = pathname.startsWith('/dashboard');
  const isAdminArea = pathname.startsWith('/admin');
  const isLogin = pathname === '/login';

  const isPanelArea = isDashboard || isAdminArea || isLogin;

  return (
    <html lang="es">
      <body className="antialiased">
        {!isPanelArea && <Navbar />}
        {children}
        {!isPanelArea && <Footer />}
      </body>
    </html>
  );
}