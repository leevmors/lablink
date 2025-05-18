import React from 'react';
import { Search } from 'lucide-react';
export const SearchBar = () => {
  return <div className="w-full max-w-[400px] h-[50px] mb-6 relative">
      <input type="text" placeholder="Введите ID..." className="w-full h-full px-4 py-2 pr-12 bg-[#E5E5E5] rounded-[64px] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5CBFCA] transition-shadow duration-200 shadow-md font-['Inter'] text-sm sm:text-base" />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <Search size={20} className="text-gray-500" />
      </div>
    </div>;
};