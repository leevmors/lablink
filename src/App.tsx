import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { BentoGrid } from './components/BentoGrid';
export function App() {
  return <div
    className="flex flex-col w-full mx-auto min-h-screen bg-[#F2F2F2] lg:desktop-zoom-effect"
    >
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <SearchBar />
        <BentoGrid />
      </main>
    </div>;
}