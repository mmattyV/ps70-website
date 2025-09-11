'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/week1', label: 'Week 1' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="nav-glass py-4 px-0">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-200 transition-colors pl-3 sm:pl-4 md:pl-6">
              PS70
            </Link>
            <div className="flex space-x-8 pr-3 sm:pr-4 md:pr-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 ease-out ${
                    pathname === item.href
                      ? 'text-transparent bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text'
                      : 'text-white/80 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200 hover:bg-clip-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
