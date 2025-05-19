import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { MobileMenuBar } from './components/MobileMenuBar';

export function App() {
  return <div
    className="flex flex-col w-full mx-auto min-h-screen bg-[#F2F2F2] lg:desktop-zoom-effect lg:pb-[20vh]"
    >
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-6 pb-20 md:pb-6">
        <SearchBar />
        <BentoGrid />
      </main>
      <Footer />
      <MobileMenuBar />
    </div>;
}