import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { Breadcrumbs } from "./Breadcrumbs";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[120px] md:pt-[140px] pb-20 md:pb-0">
        <div className="container">
          <Breadcrumbs />
        </div>
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
