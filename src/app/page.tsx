// @vsc repo:vsc-project-113-frontend file:src/app/page.tsx task:f3-src-app-page-tsx module:frontend session:113
tsx
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import MainCounter from '@/app/components/MainCounter';
import RefreshButton from '@/app/components/RefreshButton';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-<header-height>-<footer-height>)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainCounter />
          <RefreshButton className="mt-6" />
        </div>
      </main>
      <Footer />
    </>
  );
}
