// @vsc repo:vsc-project-113-frontend file:src/app/layout.tsx task:f2-src-app-layout-tsx module:frontend session:113
import '../styles/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa-IR" className="direction-rtl">
      <body>
        <Header />
        <main className="min-h-[calc(100vh-128px)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
