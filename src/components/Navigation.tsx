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
    <nav className="fixed top-0 left-0 right-0 w-full z-50 mt-6">
      <div className="glass-card mx-4 sm:mx-6 lg:mx-8 p-6 rounded-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-200 transition-colors">
              PS70
            </Link>
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-500 ease-out hover:text-white ${
                    pathname === item.href
                      ? 'text-white active'
                      : 'text-white/70 hover:text-white/90'
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
