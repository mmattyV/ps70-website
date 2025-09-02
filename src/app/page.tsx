import Link from 'next/link';

export default function Home() {
  const assignments = [
    { week: 1, title: 'Website & Final Project Proposal', href: '/week1', completed: true },
    { week: 2, title: '2D Design & Cutting', href: '/week2', completed: false },
    { week: 3, title: '3D Design & Printing', href: '/week3', completed: false },
    { week: 4, title: 'Microcontroller Programming', href: '/week4', completed: false },
    { week: 5, title: 'Electronic Input Devices', href: '/week5', completed: false },
    { week: 6, title: 'Electronic Output Devices', href: '/week6', completed: false },
    { week: 7, title: 'Molding & Casting', href: '/week7', completed: false },
    { week: 8, title: 'Computer-Controlled Machining', href: '/week8', completed: false },
    { week: 9, title: 'Embedded Programming', href: '/week9', completed: false },
    { week: 10, title: 'Machine Building', href: '/week10', completed: false },
    { week: 11, title: 'Computer Programming', href: '/week11', completed: false },
    { week: 12, title: 'Final Project', href: '/final-project', completed: false },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          PS70: Introduction to Digital Fabrication
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Documentation of my journey through digital fabrication, from 2D design to embedded programming and final project development.
        </p>
      </div>

      {/* Assignments Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Weekly Assignments</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map((assignment) => (
            <Link
              key={assignment.week}
              href={assignment.href}
              className={`block p-6 rounded-lg border transition-all hover:shadow-md ${
                assignment.completed
                  ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'
                  : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Week {assignment.week}
                </span>
                {assignment.completed && (
                  <span className="text-green-600 dark:text-green-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
              <h3 className="font-medium text-foreground">{assignment.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href="/about"
          className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-md"
        >
          <h3 className="text-lg font-medium text-foreground mb-2">About Me</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Learn more about my background and interests in digital fabrication.
          </p>
        </Link>
        <Link
          href="/week1"
          className="p-6 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-md"
        >
          <h3 className="text-lg font-medium text-foreground mb-2">Final Project Proposal</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Check out my ideas for the semester final project.
          </p>
        </Link>
      </div>
    </div>
  );
}
