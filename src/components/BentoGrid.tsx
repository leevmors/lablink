import React from 'react';
import { Card } from './Card';
export const BentoGrid = () => {
  return <div className="w-full max-w-[800px] grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="md:col-span-2 bg-[#74B6C2] h-[240px] sm:h-[270px] md:h-[300px] flex flex-col items-center justify-center text-white hover:bg-[#5EA3AE] cursor-pointer">
        <img src="/tooth.png" alt="Tooth icon" className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110" />
        <h2 className="text-xl sm:text-2xl font-semibold font-['Inter']">Создать кейс</h2>
      </Card>
      <Card className="bg-[#3D6B6D] h-[240px] sm:h-[270px] md:h-[300px] flex flex-col items-center justify-center text-white hover:bg-[#335A5C] cursor-pointer">
        <img src="/admin.png" alt="Admin icon" className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110 brightness-0 invert" />
      </Card>
      <Card className="bg-[#CCCCCC] h-[240px] sm:h-[270px] md:h-[300px] flex items-center justify-center hover:bg-[#BBBBBB] cursor-pointer">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 font-['Inter']">
          Скоро появится
        </h2>
      </Card>
      <Card className="md:col-span-2 bg-[#CCCCCC] h-[240px] sm:h-[270px] md:h-[300px] flex items-center justify-center hover:bg-[#BBBBBB] cursor-pointer">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 font-['Inter']">
          Скоро появится
        </h2>
      </Card>
    </div>;
};