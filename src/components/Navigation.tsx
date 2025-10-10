'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isWeeksOpen, setIsWeeksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWeeksOpen(false);
      }
    };

    if (isWeeksOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isWeeksOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ];

  const weeks = [
    { href: '/week1', label: 'Week 1', completed: true },
    { href: '/week2', label: 'Week 2', completed: true },
    { href: '/week3', label: 'Week 3', completed: true },
    { href: '/week4', label: 'Week 4', completed: true },
    { href: '/week5', label: 'Week 5', completed: true },
    { href: '/week6', label: 'Week 6', completed: false },
    { href: '/week7', label: 'Week 7', completed: false },
    { href: '/week8', label: 'Week 8', completed: false },
    { href: '/week9', label: 'Week 9', completed: false },
    { href: '/week10', label: 'Week 10', completed: false },
    { href: '/week11', label: 'Week 11', completed: false },
    { href: '/week12', label: 'Week 12', completed: false },
    { href: '/week13', label: 'Week 13', completed: false },
    { href: '/week14', label: 'Week 14', completed: false },
    { href: '/week15', label: 'Week 15', completed: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="nav-glass py-4 px-0">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-200 transition-colors pl-3 sm:pl-4 md:pl-6">
              PS70
            </Link>
            <div className="flex space-x-8 pr-3 sm:pr-4 md:pr-6 items-center">
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
              
              {/* Weeks Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsWeeksOpen(!isWeeksOpen)}
                  className={`text-sm font-medium transition-all duration-300 ease-out flex items-center space-x-1 ${
                    weeks.some(week => pathname === week.href)
                      ? 'text-transparent bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text'
                      : 'text-white/80 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200 hover:bg-clip-text'
                  }`}
                >
                  <span>Weeks</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isWeeksOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isWeeksOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass-card rounded-xl shadow-2xl py-2 max-h-80 overflow-y-auto border border-white/10">
                    {weeks.map((week) => (
                      <Link
                        key={week.href}
                        href={week.href}
                        onClick={() => setIsWeeksOpen(false)}
                        className={`flex items-center justify-between px-4 py-2 text-sm transition-all duration-200 rounded-lg mx-2 my-1 ${
                          pathname === week.href
                            ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white backdrop-blur-sm border border-white/20'
                            : 'text-white/80 hover:bg-white/10 hover:text-white hover:backdrop-blur-sm hover:border hover:border-white/10'
                        }`}
                      >
                        <span>{week.label}</span>
                        {week.completed && (
                          <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center ml-2 shadow-lg">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
