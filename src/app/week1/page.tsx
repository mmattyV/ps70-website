export default function Week1() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 1
            </span>
            <span className="text-sm text-white/60">
              September 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Website & Final Project Proposal
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Setting up my documentation website and proposing ideas for the semester final project.
          </p>
        </div>

        {/* Website Documentation */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Website Development</h2>
            </div>
          </div>
          
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Technology Stack</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Frontend
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Next.js 15 (React framework)</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Responsive design principles</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Features
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Apple liquid glass aesthetic</li>
                  <li>• Glassmorphism effects</li>
                  <li>• Mobile-responsive layout</li>
                  <li>• Fast page navigation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Design Philosophy</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              The website embraces Apple&apos;s liquid glass aesthetic with glassmorphism effects, creating a modern and immersive experience. 
              The design emphasizes visual hierarchy through blur effects, transparency, and gradient overlays while maintaining 
              excellent readability and user experience across all devices.
            </p>
          </div>
        </div>

        {/* Final Project Proposal */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Final Project Proposal</h2>
            </div>
          </div>
          
          {/* Project Overview */}
          <div className="text-section rounded-2xl p-10 mb-8 bg-gradient-to-br from-red-500/20 to-orange-500/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">AI-Controlled Turret System</h3>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                An intelligent automated turret that uses computer vision and AI to detect, track, and engage moving targets 
                with BB pellets. Combining machine learning, servo control systems, and real-time image processing for precision targeting.
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="mb-8">
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/1G1Z4vjy9rg"
                    title="AI Turret System Example"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="text-center text-white/60 mt-4 italic">
                Inspiration: Advanced AI turret system demonstration
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-section rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                  Key Features
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Real-time object detection & tracking</li>
                  <li>• AI-powered target identification</li>
                  <li>• Precision servo-controlled aiming</li>
                  <li>• Automated BB pellet firing system</li>
                  <li>• Safety protocols & emergency stop</li>
                  <li>• Live video feed & control interface</li>
                  <li>• Target hit accuracy analytics</li>
                </ul>
              </div>
              <div className="text-section rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                  Applications
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Educational robotics demonstrations</li>
                  <li>• Computer vision research</li>
                  <li>• Target practice training systems</li>
                  <li>• Automated gaming platforms</li>
                  <li>• Security system prototypes</li>
                  <li>• STEM outreach programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">3D Design & Fabrication</h4>
              </div>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                  Turret base & rotating platform
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>
                  BB pellet magazine & feed system
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                  Camera mounting gimbal
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>
                  Barrel & firing mechanism
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                  Safety shields & enclosures
                </li>
              </ul>
            </div>
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Electronics</h4>
              </div>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  Raspberry Pi 4 (main controller)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  High-resolution camera module
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  Pan/tilt servo motors (2x)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  Firing mechanism servo
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  Emergency stop button
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  LED status indicators
                </li>
              </ul>
            </div>
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">AI & Programming</h4>
              </div>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  OpenCV object detection
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  YOLO real-time tracking
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  PID control algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  Web control interface
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  Safety monitoring system
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  Target analytics & logging
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline & Milestones */}
          <div className="text-section rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Development Timeline</h4>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full">Weeks 2-4</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Design and 3D print turret base, gimbal system, and firing mechanism</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-full">Weeks 5-7</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Assemble electronics, test servo controls, and implement basic camera tracking</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full">Weeks 8-10</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Develop AI targeting system, integrate firing mechanism, and build web interface</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">Weeks 11-12</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Safety testing, accuracy calibration, final assembly, and demonstration</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Success Metrics</h4>
            </div>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              The project will be considered successful if it can:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Detect and track moving targets in real-time with &gt;90% accuracy</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Automatically aim and fire BB pellets at detected targets</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Achieve target hit rate of &gt;70% within 10-foot range</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Respond to moving targets within 2-second detection window</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Implement robust safety protocols and emergency stop functionality</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Provide live video feed and remote control through web interface</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Log targeting data and analytics for performance analysis</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Operate continuously for 30+ minutes without mechanical failure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="text-section rounded-2xl p-10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">Reflection</h3>
          </div>
          <p className="text-xl text-white/80 leading-relaxed">
            This project excites me because it pushes the boundaries of what&apos;s possible with digital fabrication, 
            combining cutting-edge AI technology with precision mechanical engineering. It will challenge me to integrate 
            3D design, advanced electronics, computer vision, and real-time control systems. The project&apos;s emphasis on 
            safety protocols and precision targeting will teach valuable lessons about responsible engineering and the 
            ethical considerations of autonomous systems.
          </p>
        </div>
      </div>
    </div>
  );
}
