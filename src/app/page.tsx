import Link from 'next/link';

export default function Home() {
  const assignments = [
    { week: 1, title: 'Introduction and Documentation', href: '/week1', completed: true },
    { week: 2, title: '2D Design & Cutting', href: '/week2', completed: false },
    { week: 3, title: 'Hand Tools and Fabrication', href: '/week3', completed: false },
    { week: 4, title: 'Microcontroller Programming', href: '/week4', completed: false },
    { week: 5, title: '3D Design & Printing', href: '/week5', completed: false },
    { week: 6, title: 'Electronic Input Devices', href: '/week6', completed: false },
    { week: 7, title: 'Electronic Output Devices', href: '/week7', completed: false },
    { week: 8, title: 'CNC Milling', href: '/week8', completed: false },
    { week: 9, title: 'Radio, WiFi, and Bluetooth', href: '/week9', completed: false },
    { week: 10, title: 'Machine Building and End Effectors', href: '/week10', completed: false },
    { week: 11, title: 'Project Integration', href: '/week11', completed: false },
    { week: 12, title: 'Machine Demo / Wildcard', href: '/week12', completed: false },
    { week: 13, title: 'Next Steps', href: '/week13', completed: false },
    { week: 14, title: 'Project Preperation', href: '/week14', completed: false },
    { week: 15, title: 'Final Project', href: '/week15', completed: false },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Digital Fabrication
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            Journey
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
          Exploring the intersection of design, engineering, and creativity through PS70: Introduction to Digital Fabrication
        </p>
      </div>

      {/* Assignments Grid */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Weekly Assignments</h2>
          <p className="text-white/70">Track my progress through the semester</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map((assignment) => (
            <Link
              key={assignment.week}
              href={assignment.href}
              className="glass-card-clickable rounded-2xl p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">
                  Week {assignment.week}
                </span>
                {assignment.completed && (
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-blue-200 transition-colors">
                {assignment.title}
              </h3>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                    assignment.completed ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        <Link
          href="/about"
          className="glass-card-clickable rounded-2xl p-8 group"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
              About Me
            </h3>
          </div>
          <p className="text-white/70 text-lg leading-relaxed">
            Discover my background, interests, and goals for this digital fabrication journey.
          </p>
        </Link>
        
        <Link
          href="/week1"
          className="glass-card-clickable rounded-2xl p-8 group bg-gradient-to-br from-purple-500/20 to-pink-500/20"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
              Final Project
            </h3>
          </div>
          <p className="text-white/70 text-lg leading-relaxed">
            Explore my ambitious smart plant monitoring system proposal and development plan.
          </p>
        </Link>
      </div>
    </div>
  );
}
