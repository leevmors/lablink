import React from 'react';
import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between md:grid md:grid-cols-3">
      <nav className="hidden md:flex md:justify-self-start">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200 font-['Inter'] md:text-xl">
              Главная
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200 font-['Inter'] md:text-xl">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center md:justify-self-center">
        <img src="/mdi_tooth.png" alt="Tooth icon" className="w-5 h-5 mr-2 md:w-6 md:h-6" />
        <h1 className="text-xl font-bold text-gray-800 font-['Inter'] md:text-2xl">
          LABLINK
        </h1>
      </div>
      <button className="text-gray-800 hover:text-gray-600 transition-colors duration-200 md:justify-self-end">
        <Menu size={24} />
      </button>
    </header>
  );
};