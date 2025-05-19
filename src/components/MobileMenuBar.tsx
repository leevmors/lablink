import React, { ReactNode } from 'react';

interface MenuButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  isActive?: boolean; // Added to control active state externally
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, href, onClick, icon, isActive }) => {
  const commonClasses = "flex-1 flex flex-col items-center justify-center p-2 text-xs font-medium transition-colors duration-150 focus:outline-none";
  const activeColor = "text-blue-600"; // Example active color, consider using theme variables
  const inactiveColor = "text-gray-500 hover:text-gray-700"; // Slightly adjusted inactive for better contrast with icons

  return (
    <a
      href={href || '#'}
      onClick={onClick}
      className={`${commonClasses} ${isActive ? activeColor : inactiveColor}`}
    >
      {icon && <span className="mb-0.5 h-5 w-5">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const ContactsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const AdminIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.532 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01-.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

export const MobileMenuBar: React.FC = () => {
  // Dummy active state for "Home" for visual demo. In a real app, this would come from routing.
  const activeRoute = "/"; // Example: window.location.pathname

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex items-stretch justify-around border-t border-gray-200 dark:border-gray-700">
      <MenuButton label="Главная" href="/" icon={<HomeIcon />} isActive={activeRoute === "/"} />
      <MenuButton label="Контакты" href="/contacts" icon={<ContactsIcon />} isActive={activeRoute === "/contacts"} />
      <MenuButton label="Админ" href="/admin" icon={<AdminIcon />} isActive={activeRoute === "/admin"} />
    </nav>
  );
}; 