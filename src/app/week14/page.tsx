'use client';

import Link from 'next/link';

export default function Week14() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 14
            </span>
            <span className="text-sm text-white/60">
              December 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Project Preparation
          </h1>
        </div>

        {/* Complete Notice */}
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mb-8">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Week Complete
          </h2>
          
          <p className="text-xl text-white/70 text-center max-w-lg mb-8">
            This week was dedicated to final project work and did not have a separate assignment. 
            Progress during this time is documented in the Final Project pages.
          </p>

          <div className="flex gap-4">
            <Link 
              href="/week11" 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              ← Process Page
            </Link>
            <Link 
              href="/week15" 
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-colors"
            >
              Final Project →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

